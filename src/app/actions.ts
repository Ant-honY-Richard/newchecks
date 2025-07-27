"use server";

import "dotenv/config";
import { z } from "zod";
import { Resend } from "resend";

const contactFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export async function handleContactForm(values: z.infer<typeof contactFormSchema>) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("Resend API key is not set.");
    throw new Error("Server configuration error: Cannot send message.");
  }
  
  const resend = new Resend(apiKey);

  try {
    // Note: The 'from' address domain must be verified in your Resend account.
    // Using a generic 'noreply@yourdomain.com' is a common practice.
    const { data, error } = await resend.emails.send({
      from: "Newchecks Contact Form <noreply@newcheckssolutions.com>",
      to: "hr@newcheckssolutions.com",
      subject: `New Contact Form Submission from ${values.name}`,
      reply_to: values.email,
      html: `
        <h1>New Contact Form Submission</h1>
        <p>You have received a new message from the contact form on your website.</p>
        <hr>
        <p><strong>Name:</strong> ${values.name}</p>
        <p><strong>Email:</strong> ${values.email}</p>
        <p><strong>Message:</strong></p>
        <p>${values.message}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      throw new Error("Failed to send message.");
    }

    console.log("Email sent successfully:", data);
    return { success: true, message: "Message sent successfully!" };
  } catch (error) {
    console.error("Error sending email:", error);
    // Avoid leaking internal error details to the client
    if (error instanceof Error && error.message.startsWith("Server configuration error")) {
        throw error;
    }
    throw new Error("Failed to send message due to an unexpected error.");
  }
}
