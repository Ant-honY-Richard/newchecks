
"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Phone, Mail, MapPin } from "lucide-react"
import { handleContactForm } from "@/app/actions"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

export default function ContactSection() {
    const { toast } = useToast()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
      try {
        const result = await handleContactForm(values);
    
        if (result.success) {
          toast({
            title: "Message Sent!",
            description: "Thank you for contacting us. We will get back to you shortly.",
          });
          form.reset();
        } else {
           throw new Error("An unknown error occurred on the server.");
        }
      } catch (error) {
        console.error("Submit Error:", error);
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: error instanceof Error ? error.message : "There was a problem with your request. Please try again.",
        });
      }
    }


  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-headline font-bold mb-4 section-title underline">Contact Us</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Have a question or want to work with us? Drop us a message!</p>
        </div>
        <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
                <h3 className="text-3xl font-headline font-bold">Get in Touch</h3>
                <p className="text-muted-foreground">We are here to help and answer any question you might have. We look forward to hearing from you.</p>
                <div className="space-y-4">
                    <div className="flex items-start gap-4">
                        <Phone className="w-6 h-6 text-primary mt-1" />
                        <div>
                            <h4 className="font-semibold text-foreground">Phone</h4>
                            <a href="tel:+919606197196" className="text-muted-foreground hover:text-primary transition-colors">+91-9606197196</a><br />
                            <a href="tel:+919035034640" className="text-muted-foreground hover:text-primary transition-colors">+91-9035034640</a>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <Mail className="w-6 h-6 text-primary mt-1" />
                        <div>
                            <h4 className="font-semibold text-foreground">Email</h4>
                            <a href="mailto:Hr@newcheckssolutions.com" className="text-muted-foreground hover:text-primary transition-colors">hr@newcheckssolutions.com</a>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <MapPin className="w-6 h-6 text-primary mt-1" />
                        <div>
                            <h4 className="font-semibold text-foreground">Address</h4>
                            <p className="text-muted-foreground">#435, 3rd floor, 80 ft road, 18th main, 6th block, Bangalore</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                            <Input placeholder="Your Name" {...field} className="bg-background"/>
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                            <Input placeholder="your.email@example.com" {...field} className="bg-background"/>
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                            <Textarea placeholder="How can we help you?" {...field} rows={5} className="bg-background"/>
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" disabled={form.formState.isSubmitting}>
                      {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                </form>
            </Form>
            </div>
        </div>
      </div>
    </section>
  )
}
