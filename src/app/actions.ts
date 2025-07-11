"use server";

import { z } from "zod";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export async function handleContactForm(values: z.infer<typeof contactFormSchema>) {
  try {
    const { data, error } = await resend.emails.send({
      from: "Newchecks Contact Form <onboarding@resend.dev>", // This needs to be a verified domain on Resend.
      to: "Hr@newcheckssolutions.com",
      subject: "New Contact Form Submission",
      reply_to: values.email,
      html: `
        <h1>New Contact Form Submission</h1>
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
    throw new Error("Failed to send message.");
  }
}
