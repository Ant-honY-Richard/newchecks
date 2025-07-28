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
    console.error("RESEND_API_KEY is not set in the environment variables.");
    throw new Error("Server configuration error: API key is missing.");
  }
  
  const resend = new Resend(apiKey);

  try {
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
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
      console.error("Resend API Error:", error);
      throw new Error(`Failed to send email: ${error.message}`);
    }

    console.log("Email sent successfully:", data);
    return { success: true, message: "Message sent successfully!" };
  } catch (error) {
    console.error("Error in handleContactForm:", error);
    // Re-throw the error to be caught by the client-side component.
    // This provides more specific feedback to the user/developer.
    if (error instanceof Error) {
        throw new Error(error.message);
    }
    throw new Error("An unexpected error occurred.");
  }
}
