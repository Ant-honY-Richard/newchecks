"use server";

import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function handleContactForm(values: z.infer<typeof contactFormSchema>) {
  console.log("✅ [handleContactForm] Values received:", values);

  try {
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("message", values.message);

    console.log("📦 [handleContactForm] Sending FormData:");
    for (const [key, value] of formData.entries()) {
      console.log(`- ${key}: ${value}`);
    }

    const response = await fetch("https://script.google.com/macros/s/AKfycby8YOFw6qzpWmUDBLUAXQRmicrDOmtJ6955cvmLW7kfL1lNh8h9cbjQ4fyWl0TZN0336g/exec", {
      method: "POST",
      body: formData,
    });

    const text = await response.text();
    console.log("📬 [handleContactForm] Google Script Response:", text);

    if (response.ok) {
      return { success: true, message: "Message sent successfully!" };
    } else {
      throw new Error(`Failed to submit to Google Sheets. Status: ${response.status}`);
    }
  } catch (error) {
    console.error("❌ [handleContactForm] Error occurred:", error);
    if (error instanceof Error) {
      throw error;
    }
    throw new Error("An unknown error occurred while sending the message.");
  }
}
