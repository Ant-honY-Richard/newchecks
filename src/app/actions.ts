
"use server";

import { z } from "zod";
import { Resend } from "resend";

const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function handleContactForm(values: z.infer<typeof contactFormSchema>) {
    const validatedFields = contactFormSchema.safeParse(values);

    if (!validatedFields.success) {
        // This case should ideally be caught by client-side validation,
        // but it's good practice to have server-side checks too.
        throw new Error("Invalid form data provided.");
    }
    
    const { name, email, message } = validatedFields.data;
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
        // This is a server configuration error.
        console.error("RESEND_API_KEY is missing from environment variables.");
        throw new Error("Server configuration error: Email service is not set up.");
    }
    
    const resend = new Resend(apiKey);

    try {
        const { data, error } = await resend.emails.send({
            from: "Newchecks Contact <onboarding@resend.dev>",
            to: "hr@newcheckssolutions.com",
            subject: `New Contact Form Submission from ${name}`,
            html: `
                <h1>New Contact Form Submission</h1>
                <p>You have received a new message from the contact form on your website.</p>
                <hr>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, "<br>")}</p>
            `,
        });

        if (error) {
            // If Resend's API returns an error object, handle it here.
            console.error("Resend API Error:", error);
            // Construct a more informative error message.
            throw new Error(`Failed to send email. Resend error: ${error.message || 'Unknown Resend API error'}`);
        }

        if (!data || !data.id) {
            // This case handles unexpected successful responses from Resend that lack an ID.
            console.error("Resend API Error: No ID returned in the success response.", data);
            throw new Error("Email not sent due to an invalid response from the email service.");
        }

        console.log("Email sent successfully with ID:", data.id);
        return { success: true, message: "Message sent successfully!" };

    } catch (error) {
        // This catches network errors or errors thrown from the checks above.
        console.error("Error in handleContactForm:", error);
        // Ensure we always throw a standard Error object with a helpful message.
        if (error instanceof Error) {
            throw error; // Re-throw the specific error from above.
        }
        throw new Error("An unknown error occurred while sending the message.");
    }
}
