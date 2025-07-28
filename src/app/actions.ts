
"use server";

import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function handleContactForm(values: z.infer<typeof contactFormSchema>) {
    console.log("Received data in server action:", values);
    try {
        const formData = new FormData();
        formData.append("name", values.name);
        formData.append("email", values.email);
        formData.append("message", values.message);

        const response = await fetch("https://script.google.com/macros/s/AKfycby8YOFw6qzpWmUDBLUAXQRmicrDOmtJ6955cvmLW7kfL1lNh8h9cbjQ4fyWl0TZN0336g/exec", {
            method: "POST",
            body: formData,
        });

        if (response.ok) {
            return { success: true, message: "Message sent successfully!" };
        } else {
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
