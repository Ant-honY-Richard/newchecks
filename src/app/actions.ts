"use server";

import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export async function handleContactForm(values: z.infer<typeof contactFormSchema>) {
  // This is a server action.
  // In a real application, you would use a service like Resend, SendGrid, or Nodemailer to send an email.
  // For this example, we'll just log the data to the console to simulate the action.

  console.log("Received contact form submission:");
  console.log("Name:", values.name);
  console.log("Email:", values.email);
  console.log("Message:", values.message);
  
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // You can throw an error here to test the error state in the form.
  // throw new Error("Failed to send message.");

  return { success: true, message: "Message sent successfully!" };
}
