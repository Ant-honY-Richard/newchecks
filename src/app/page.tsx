import PageLayout from '@/components/app/PageLayout';
import HeroSection from '@/components/app/HeroSection';
import PartnersSection from '@/components/app/PartnersSection';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ChevronRight, Users, TrendingUp, Shield, Award } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <PageLayout>
      <HeroSection />
      <section className="py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-headline font-bold mb-4 sm:mb-6">
            Discover Our Comprehensive HR Solutions
          </h2>
          <p className="text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto text-sm sm:text-base">
            Newchecks Solutions offers a wide range of HR services designed to help your business thrive. 
            Explore our offerings and find the perfect solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/about">
                Learn About Us
                <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/services">
                Explore Services
                <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-headline font-bold mb-8 sm:mb-12 text-center">
            Why Choose Newchecks Solutions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="text-center p-6 bg-background rounded-lg shadow-md">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3">Expert Team</h3>
              <p className="text-muted-foreground text-sm">
                Our seasoned HR professionals bring years of industry expertise to solve your workforce challenges.
              </p>
            </div>
            <div className="text-center p-6 bg-background rounded-lg shadow-md">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3">Proven Results</h3>
              <p className="text-muted-foreground text-sm">
                Track record of helping 500+ companies optimize their HR operations and achieve business goals.
              </p>
            </div>
            <div className="text-center p-6 bg-background rounded-lg shadow-md">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3">Compliance First</h3>
              <p className="text-muted-foreground text-sm">
                Ensure 100% regulatory compliance with our thorough understanding of labor laws and regulations.
              </p>
            </div>
            <div className="text-center p-6 bg-background rounded-lg shadow-md">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3">Quality Assured</h3>
              <p className="text-muted-foreground text-sm">
                ISO certified processes and rigorous quality checks ensure exceptional service delivery every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Overview */}
      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-headline font-bold mb-8 sm:mb-12 text-center">
            Our Core Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-2 rounded-full flex-shrink-0">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2">Permanent Staffing</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    End-to-end recruitment solutions to help you find and hire the best talent for long-term positions.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-2 rounded-full flex-shrink-0">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2">Contract Staffing</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    Flexible workforce solutions for project-based and temporary staffing requirements.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-2 rounded-full flex-shrink-0">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2">HR Outsourcing</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    Complete HR function management allowing you to focus on your core business activities.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="relative w-full aspect-[4/3] shadow-lg rounded-lg overflow-hidden">
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
          <div className="text-center">
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/services">
                View All Services
                <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-headline font-bold mb-8 sm:mb-12 text-center">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="bg-background p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-primary mb-2">85%</div>
              <h3 className="text-lg font-bold mb-2">Faster Hiring</h3>
              <p className="text-muted-foreground text-sm">
                Average reduction in time-to-hire for our permanent staffing clients.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <h3 className="text-lg font-bold mb-2">Happy Clients</h3>
              <p className="text-muted-foreground text-sm">
                Companies trust us with their HR operations across various industries.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <h3 className="text-lg font-bold mb-2">Client Retention</h3>
              <p className="text-muted-foreground text-sm">
                Long-term partnerships built on consistent service excellence and results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-headline font-bold mb-4 sm:mb-6">
                Ready to Transform Your HR Operations?
              </h2>
              <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base">
                Partner with Newchecks Solutions and experience the difference professional HR services can make. 
                Get started with a free consultation and discover customized solutions for your business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="/contact">
                    Get Free Consultation
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/approach">
                    Learn Our Approach
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </Button>
              </div>
            </div>
            <div>
              <div className="relative w-full aspect-[16/10] shadow-lg rounded-lg overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/djxoeyk1a/image/upload/v1756877334/1756876042191-247f0060-cc9b-47f4-8b0f-2abb30a68b09_p4rffy.jpg"
                  alt="Professional consultation meeting with HR experts discussing business needs, strategy planning, and customized solutions"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <PartnersSection />
    </PageLayout>
  );
}
