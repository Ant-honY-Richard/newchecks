import PageLayout from '@/components/app/PageLayout';
import AboutSection from '@/components/app/AboutSection';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <PageLayout>
      <div className="bg-primary/10 py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-headline font-bold mb-4 sm:mb-6 text-center">
            About Newchecks Solutions
          </h1>
          <p className="text-muted-foreground text-center max-w-3xl mx-auto text-sm sm:text-base">
            Learn about our mission, values, and the team behind Newchecks Solutions.
          </p>
        </div>
      </div>
      
      <AboutSection />
      
      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-headline font-bold mb-4 sm:mb-6 section-title underline">
                Our Mission & Vision
              </h2>
              <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base">
                At Newchecks Solutions, our mission is to transform how businesses manage their human resources by providing innovative, efficient, and tailored solutions that drive growth and success.
              </p>
              <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base">
                We envision a future where businesses of all sizes can access world-class HR services that empower them to focus on their core competencies while we handle the complexities of workforce management.
              </p>
              <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base">
                Our commitment to excellence, integrity, and client satisfaction guides everything we do, from recruitment and staffing to payroll management and beyond.
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto">
                <Link href="/contact">
                  Get in Touch
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative w-full aspect-[4/3] shadow-2xl rounded-lg overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/djxoeyk1a/image/upload/v1756877202/1756876003413-edd06537-9674-4d1e-afd8-e3bc74f074c6_lfg3ip.png"
                  alt="Professional HR team providing comprehensive staffing, outsourcing, and recruitment services to diverse business clients"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-12 text-center section-title underline">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-primary">Excellence</h3>
              <p className="text-muted-foreground">
                We strive for excellence in every service we provide, ensuring the highest quality solutions for our clients.
              </p>
            </div>
            <div className="bg-background p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-primary">Integrity</h3>
              <p className="text-muted-foreground">
                We operate with honesty, transparency, and ethical standards in all our business dealings.
              </p>
            </div>
            <div className="bg-background p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-primary">Innovation</h3>
              <p className="text-muted-foreground">
                We continuously seek innovative approaches to HR challenges, staying ahead of industry trends.
              </p>
            </div>
            <div className="bg-background p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-primary">Client-Centric</h3>
              <p className="text-muted-foreground">
                We put our clients' needs first, tailoring our solutions to meet their specific requirements.
              </p>
            </div>
            <div className="bg-background p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-primary">Collaboration</h3>
              <p className="text-muted-foreground">
                We believe in the power of teamwork and partnership, both internally and with our clients.
              </p>
            </div>
            <div className="bg-background p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-primary">Accountability</h3>
              <p className="text-muted-foreground">
                We take responsibility for our actions and commitments, ensuring reliable service delivery.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6">Ready to Transform Your HR Operations?</h2>
          <p className="text-muted-foreground mb-8 max-w-3xl mx-auto">
            Discover how Newchecks Solutions can help your business thrive with our comprehensive HR services.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/services">
                Explore Our Services
                <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contact">
                Contact Us
                <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}