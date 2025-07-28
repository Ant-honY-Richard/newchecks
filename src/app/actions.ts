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
        throw new Error("Invalid form data.");
    }
    
    const { name, email, message } = validatedFields.data;
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
        throw new Error("Server configuration error: API key is missing.");
    }
    
    const resend = new Resend(apiKey);

    try {
        const { data, error } = await resend.emails.send({
            from: "Newchecks Contact <onboarding@resend.dev>",
            to: "hr@newcheckssolutions.com",
            subject: `New Contact Form Submission from ${name}`,
            reply_to: email,
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
            console.error("Resend API Error:", error);
            throw new Error(`Failed to send email: ${error.message}`);
        }

        if (!data || !data.id) {
            console.error("Resend API Error: No ID returned", data);
            throw new Error("Email not sent. Invalid response from Resend.");
        }

        console.log("Email sent successfully:", data);
        return { success: true, message: "Message sent successfully!" };

    } catch (error) {
        console.error("Error in handleContactForm:", error);
        if (error instanceof Error) {
            // Re-throw the original error message, which will be more specific.
            throw new Error(error.message);
        }
        throw new Error("An unexpected error occurred while sending the message.");
    }
}
