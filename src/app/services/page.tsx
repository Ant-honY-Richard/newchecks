import PageLayout from '@/components/app/PageLayout';
import ServicesSection from '@/components/app/ServicesSection';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function ServicesPage() {
  return (
    <PageLayout>
      <div className="bg-primary/10 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-headline font-bold mb-6 text-center">Our HR Services</h1>
          <p className="text-muted-foreground text-center max-w-3xl mx-auto">
            Comprehensive HR solutions tailored to meet your business needs and drive growth.
          </p>
        </div>
      </div>
      
      <ServicesSection />
      
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-12 text-center section-title underline">Detailed Service Offerings</h2>
          
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
              <div className="order-2 md:order-1">
                <div className="relative w-full aspect-[3/2] shadow-2xl rounded-lg overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/djxoeyk1a/image/upload/v1756877449/1756876224341-8a66f2aa-af74-4e95-b587-550d19b5cbdd_jtuvgi.png"
                    alt="Professional recruitment team conducting interviews and candidate evaluations for permanent staffing positions"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-primary">Permanent Staffing</h3>
                <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base">
                  Our permanent staffing solutions help you find the perfect long-term talent for your organization. We handle everything from initial screening to final placement.
                </p>
                <h4 className="text-lg sm:text-xl font-semibold mb-2">Our Process:</h4>
                <ul className="list-disc pl-5 mb-4 sm:mb-6 text-muted-foreground text-sm sm:text-base">
                  <li>Thorough understanding of your company culture and requirements</li>
                  <li>Comprehensive candidate screening and evaluation</li>
                  <li>In-depth interviews and skill assessments</li>
                  <li>Background verification and reference checks</li>
                  <li>Seamless onboarding support</li>
                </ul>
                <h4 className="text-lg sm:text-xl font-semibold mb-2">Industries We Serve:</h4>
                <p className="text-muted-foreground text-sm sm:text-base">
                  IT & Technology, Finance & Banking, Healthcare, Manufacturing, Retail, and more.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
              <div className="order-2 md:order-1">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-primary">Contract Staffing</h3>
                <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base">
                  Our contract staffing solutions provide flexible workforce options to meet your temporary, project-based, or seasonal needs.
                </p>
                <h4 className="text-lg sm:text-xl font-semibold mb-2">Benefits:</h4>
                <ul className="list-disc pl-5 mb-4 sm:mb-6 text-muted-foreground text-sm sm:text-base">
                  <li>Rapid deployment of qualified professionals</li>
                  <li>Reduced administrative burden and overhead costs</li>
                  <li>Flexibility to scale your workforce as needed</li>
                  <li>Access to specialized skills for specific projects</li>
                  <li>Try-before-you-hire opportunities</li>
                </ul>
                <h4 className="text-lg sm:text-xl font-semibold mb-2">Contract Durations:</h4>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Short-term (1-3 months), Medium-term (3-6 months), Long-term (6+ months)
                </p>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative w-full aspect-[4/3] shadow-2xl rounded-lg overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/djxoeyk1a/image/upload/v1756877548/1756876275585-852ebb44-0a1e-443f-bf2a-8ca2fe086f8f_fqjjgk.png"
                    alt="Flexible contract workforce solutions showcasing temporary professionals in various project-based roles and settings"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
              <div className="order-2 md:order-1">
                <div className="relative w-full aspect-[16/10] shadow-2xl rounded-lg overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/djxoeyk1a/image/upload/v1756877597/1756876361352-b7b0351e-268c-4895-9228-eb05892044d7_ehzkvg.jpg"
                    alt="Complete HR outsourcing solutions showing dedicated teams managing various business functions remotely and efficiently"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-primary">Outsourcing</h3>
                <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base">
                  Our outsourcing solutions allow you to delegate entire business functions to our expert team, enabling you to focus on your core business activities.
                </p>
                <h4 className="text-lg sm:text-xl font-semibold mb-2">Functions We Can Manage:</h4>
                <ul className="list-disc pl-5 mb-4 sm:mb-6 text-muted-foreground text-sm sm:text-base">
                  <li>HR Administration and Management</li>
                  <li>Recruitment and Talent Acquisition</li>
                  <li>Payroll Processing and Management</li>
                  <li>Training and Development</li>
                  <li>Employee Relations and Engagement</li>
                </ul>
                <h4 className="text-lg sm:text-xl font-semibold mb-2">Why Outsource to Us:</h4>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Cost efficiency, access to specialized expertise, improved compliance, and enhanced focus on core business functions.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-primary">Payroll & Background Verification</h3>
                <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base">
                  Our comprehensive payroll and background verification services ensure accuracy, compliance, and security in your HR operations.
                </p>
                <h4 className="text-lg sm:text-xl font-semibold mb-2">Payroll Services Include:</h4>
                <ul className="list-disc pl-5 mb-4 sm:mb-6 text-muted-foreground text-sm sm:text-base">
                  <li>Accurate salary calculations and disbursements</li>
                  <li>Tax compliance and statutory deductions</li>
                  <li>Payslip generation and distribution</li>
                  <li>Regulatory reporting and compliance</li>
                  <li>Year-end processing and documentation</li>
                </ul>
                <h4 className="text-lg sm:text-xl font-semibold mb-2">Background Verification Covers:</h4>
                <ul className="list-disc pl-5 text-muted-foreground text-sm sm:text-base">
                  <li>Education and employment history verification</li>
                  <li>Criminal background checks</li>
                  <li>Reference verification</li>
                  <li>Address verification</li>
                  <li>Identity and document validation</li>
                </ul>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative w-full aspect-[3/2] shadow-2xl rounded-lg overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/djxoeyk1a/image/upload/v1756877663/1756876521366-23299c5c-ce80-466c-b8ee-e5e054d0f9b0_bdskck.png"
                    alt="Comprehensive payroll processing and background verification systems showing secure data management and compliance procedures"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6">Ready to Elevate Your HR Operations?</h2>
          <p className="text-muted-foreground mb-8 max-w-3xl mx-auto">
            Contact us today to discuss how our comprehensive HR services can be tailored to meet your specific business needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/contact">
                Request a Consultation
                <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/approach">
                Learn About Our Approach
                <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}