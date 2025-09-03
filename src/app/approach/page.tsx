import PageLayout from '@/components/app/PageLayout';
import ApproachSection from '@/components/app/ApproachSection';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function ApproachPage() {
  return (
    <PageLayout>
      <div className="bg-primary/10 py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-headline font-bold mb-4 sm:mb-6 text-center">
            Our Approach
          </h1>
          <p className="text-muted-foreground text-center max-w-3xl mx-auto text-sm sm:text-base">
            Discover how we deliver exceptional HR solutions through our systematic and client-focused approach.
          </p>
        </div>
      </div>
      
      <ApproachSection />
      
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-12 text-center section-title underline">Our Methodology</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
            <div className="order-2 md:order-1">
              <div className="relative w-full aspect-[4/3] shadow-2xl rounded-lg overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/djxoeyk1a/image/upload/v1756877748/1756876610401-8fd233db-589c-47db-95f0-0f672b98ca37_c1cxcj.png"
                  alt="Professional consultation session showing stakeholder interviews, business analysis charts, and HR assessment documentation in modern office setting"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-primary">1. Discovery & Assessment</h3>
              <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base">
                We begin by thoroughly understanding your business, culture, and specific HR needs through comprehensive consultations and assessments.
              </p>
              <h4 className="text-lg sm:text-xl font-semibold mb-2">Key Activities:</h4>
              <ul className="list-disc pl-5 mb-4 sm:mb-6 text-muted-foreground text-sm sm:text-base">
                <li>In-depth interviews with key stakeholders</li>
                <li>Analysis of current HR processes and challenges</li>
                <li>Evaluation of organizational culture and values</li>
                <li>Assessment of short and long-term business goals</li>
                <li>Identification of critical success factors</li>
              </ul>
              <p className="text-muted-foreground text-sm sm:text-base">
                This foundational phase ensures that our solutions are perfectly aligned with your unique business context and objectives.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
            <div className="order-2 md:order-1">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-primary">2. Strategic Planning</h3>
              <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base">
                Based on our discovery findings, we develop a customized strategic plan that outlines the optimal HR solutions for your business.
              </p>
              <h4 className="text-lg sm:text-xl font-semibold mb-2">Plan Components:</h4>
              <ul className="list-disc pl-5 mb-4 sm:mb-6 text-muted-foreground text-sm sm:text-base">
                <li>Tailored service recommendations</li>
                <li>Implementation timeline and milestones</li>
                <li>Resource allocation and requirements</li>
                <li>Key performance indicators and success metrics</li>
                <li>Risk assessment and mitigation strategies</li>
              </ul>
              <p className="text-muted-foreground text-sm sm:text-base">
                Our strategic planning process ensures that every aspect of our service delivery is carefully considered and aligned with your business objectives.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative w-full aspect-[3/2] shadow-2xl rounded-lg overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/djxoeyk1a/image/upload/v1756877806/1756876655285-c25568d8-e2ee-4a2f-8e2e-10216df39e62_ntrvck.png"
                  alt="Strategic HR planning session with timeline charts, KPI dashboards, resource allocation matrices, and implementation roadmaps displayed on whiteboards and digital screens"
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
                  src="https://res.cloudinary.com/djxoeyk1a/image/upload/v1756877906/1756876716737-0de97e44-5708-4a0d-b901-c07fa56bd647_zi0r2k.png"
                  alt="HR implementation team executing strategic plans with training sessions, system integration, progress tracking dashboards, and change management activities"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-primary">3. Implementation & Execution</h3>
              <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base">
                We execute the strategic plan with precision, ensuring smooth integration of our HR solutions into your business operations.
              </p>
              <h4 className="text-lg sm:text-xl font-semibold mb-2">Implementation Approach:</h4>
              <ul className="list-disc pl-5 mb-4 sm:mb-6 text-muted-foreground text-sm sm:text-base">
                <li>Phased implementation to minimize disruption</li>
                <li>Clear communication and change management</li>
                <li>Comprehensive training and knowledge transfer</li>
                <li>Regular progress updates and stakeholder engagement</li>
                <li>Agile adaptation to address emerging needs</li>
              </ul>
              <p className="text-muted-foreground text-sm sm:text-base">
                Our implementation process is designed to be seamless, transparent, and responsive to your organization's specific context.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-primary">4. Monitoring & Optimization</h3>
              <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base">
                We continuously monitor the performance of our HR solutions and make data-driven adjustments to optimize results.
              </p>
              <h4 className="text-lg sm:text-xl font-semibold mb-2">Monitoring Activities:</h4>
              <ul className="list-disc pl-5 mb-4 sm:mb-6 text-muted-foreground text-sm sm:text-base">
                <li>Regular performance reviews against established KPIs</li>
                <li>Stakeholder feedback collection and analysis</li>
                <li>Identification of improvement opportunities</li>
                <li>Proactive issue resolution and risk management</li>
                <li>Continuous process refinement and optimization</li>
              </ul>
              <p className="text-muted-foreground text-sm sm:text-base">
                Our commitment to ongoing monitoring and optimization ensures that our HR solutions continue to deliver maximum value as your business evolves.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative w-full aspect-[5/3] shadow-2xl rounded-lg overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/djxoeyk1a/image/upload/v1756877980/1756876795489-55ae7acd-6728-4e2b-9b7b-09908d1385ac_kcgv41.jpg"
                  alt="Performance monitoring dashboard with KPI analytics, feedback collection systems, optimization reports, and continuous improvement metrics displayed on multiple screens"
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
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-12 text-center section-title underline">Our Differentiators</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-primary">Client-Centric Focus</h3>
              <p className="text-muted-foreground">
                We place your business needs at the center of everything we do, ensuring that our solutions are perfectly aligned with your objectives and context.
              </p>
            </div>
            <div className="bg-background p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-primary">Industry Expertise</h3>
              <p className="text-muted-foreground">
                Our team brings deep industry knowledge and specialized HR expertise to deliver solutions that address sector-specific challenges and opportunities.
              </p>
            </div>
            <div className="bg-background p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-primary">Technological Innovation</h3>
              <p className="text-muted-foreground">
                We leverage cutting-edge HR technologies and digital tools to enhance efficiency, accuracy, and effectiveness in our service delivery.
              </p>
            </div>
            <div className="bg-background p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-primary">Agile Methodology</h3>
              <p className="text-muted-foreground">
                Our flexible and adaptive approach allows us to respond quickly to changing business needs and market conditions.
              </p>
            </div>
            <div className="bg-background p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-primary">Data-Driven Decisions</h3>
              <p className="text-muted-foreground">
                We base our strategies and recommendations on robust data analysis, ensuring objective and effective HR solutions.
              </p>
            </div>
            <div className="bg-background p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-primary">Continuous Improvement</h3>
              <p className="text-muted-foreground">
                We are committed to ongoing learning and improvement, constantly refining our approaches to deliver ever-better results.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6">Experience Our Approach in Action</h2>
          <p className="text-muted-foreground mb-8 max-w-3xl mx-auto">
            Ready to see how our systematic approach can transform your HR operations? Contact us today to schedule a consultation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/contact">
                Schedule a Consultation
                <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/services">
                Explore Our Services
                <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}