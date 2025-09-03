import PageLayout from '@/components/app/PageLayout';
import ContactSection from '@/components/app/ContactSection';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Mail, Phone, MapPin, Clock, ChevronRight, ExternalLink } from 'lucide-react';

export default function ContactPage() {
  return (
    <PageLayout>
      <div className="bg-primary/10 py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-headline font-bold mb-4 sm:mb-6 text-center">
            Contact Us
          </h1>
          <p className="text-muted-foreground text-center max-w-3xl mx-auto text-sm sm:text-base">
            Get in touch with our team of HR experts to discuss your business needs and discover how we can help.
          </p>
        </div>
      </div>
      
      <ContactSection />
      
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-headline font-bold mb-4 sm:mb-6 section-title underline">
                Our Offices
              </h2>
              <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base">
                Visit us at one of our office locations or reach out through our contact channels. Our team is ready to assist you with all your HR needs.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Headquarters</h3>
                    <p className="text-muted-foreground">
                      #435, 3rd floor, 80 ft road, 18th main<br />
                      6th block, Bangalore<br />
                      Karnataka, India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Phone</h3>
                    <p className="text-muted-foreground">
                      +91-9606197196<br />
                      +91-9035034640
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Email</h3>
                    <p className="text-muted-foreground">
                      hr@newcheckssolutions.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Business Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2 space-y-6">
              {/* Google Maps Embed */}
              <div className="relative w-full aspect-[3/2] shadow-xl rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.889936861755!2d77.59416007507447!3d12.97194841559875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0x14adf7b13be96ef!2s80%20Feet%20Rd%2C%20Koramangala%206th%20Block%2C%20Koramangala%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                  title="Newchecks Solutions Office Location"
                />
              </div>
              
              {/* Google Maps Integration */}
              <div className="bg-background p-4 rounded-lg border shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-lg">Get Directions</h4>
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  Open in Google Maps for detailed directions, traffic updates, and nearby amenities.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link 
                    href="https://maps.app.goo.gl/roMq77LxQspTRRAE8?g_st=aw" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    Open in Google Maps
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-12 text-center section-title underline">Frequently Asked Questions</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-background p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">What services does Newchecks Solutions offer?</h3>
              <p className="text-muted-foreground">
                We offer a comprehensive range of HR services including permanent staffing, contract staffing, outsourcing, payroll management, and background verification.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">How quickly can you provide staffing solutions?</h3>
              <p className="text-muted-foreground">
                Our turnaround time varies based on the complexity of the role and your specific requirements. For standard positions, we typically provide qualified candidates within 1-2 weeks.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Do you work with businesses of all sizes?</h3>
              <p className="text-muted-foreground">
                Yes, we work with businesses of all sizes, from startups to large enterprises. Our solutions are scalable and can be tailored to meet the specific needs of your organization.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">What industries do you specialize in?</h3>
              <p className="text-muted-foreground">
                We have expertise across multiple industries including IT, finance, healthcare, manufacturing, retail, and more. Our team understands the unique HR challenges in each sector.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">How do you ensure quality in your staffing solutions?</h3>
              <p className="text-muted-foreground">
                We have a rigorous screening process that includes skills assessment, background verification, and multiple rounds of interviews to ensure we provide only the most qualified candidates.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">What is your pricing structure?</h3>
              <p className="text-muted-foreground">
                Our pricing varies based on the services you require. We offer flexible pricing models including fixed fee, percentage-based, and retainer options. Contact us for a customized quote.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6">Ready to Transform Your HR Operations?</h2>
          <p className="text-muted-foreground mb-8 max-w-3xl mx-auto">
            Contact us today to schedule a consultation with our HR experts and discover how Newchecks Solutions can help your business thrive.
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Schedule a Consultation
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </section>
    </PageLayout>
  );
}