
"use server";

import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function handleContactForm(values: z.infer<typeof contactFormSchema>) {
    console.log("Received contact form submission:", values);

    const validatedFields = contactFormSchema.safeParse(values);

    if (!validatedFields.success) {
        throw new Error("Invalid form data provided.");
    }

    const { name, email, message } = validatedFields.data;
    const googleScriptUrl = "https://script.google.com/macros/s/AKfycby8YOFw6qzpWmUDBLUAXQRmicrDOmtJ6955cvmLW7kfL1lNh8h9cbjQ4fyWl0TZN0336g/exec";

    try {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("message", message);

        const response = await fetch(googleScriptUrl, {
            method: "POST",
            body: formData,
        });

        if (response.ok) {
            return { success: true, message: "Message sent successfully!" };
        } else {
            // Log the response status and text for debugging on the server
            const errorText = await response.text();
            console.error("Google Sheets submission failed:", response.status, errorText);
            throw new Error(`Failed to submit to Google Sheets. Status: ${response.status}`);
        }
    } catch (error) {
        console.error("Error in handleContactForm:", error);
        if (error instanceof Error) {
            throw error;
        }
        throw new Error("An unknown error occurred while sending the message.");
    }
}
