import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Users, Briefcase, FileText, RefreshCw, CircleDollarSign, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "HR Consultancy",
    description: "Expert guidance to enhance HR strategies, improve efficiency, and build a strong workforce."
  },
  {
    icon: Briefcase,
    title: "Permanent Staffing Recruitment",
    description: "Find top talent for long-term roles, ensuring stability and growth for your organization."
  },
  {
    icon: FileText,
    title: "Contract Staffing Recruitment",
    description: "Flexible hiring solutions for short-term or project-based roles, meeting dynamic business needs."
  },
  {
    icon: RefreshCw,
    title: "Outsourcing Recruitment",
    description: "We handle the entire hiring process, from sourcing to onboarding, while you focus on growth."
  },
  {
    icon: CircleDollarSign,
    title: "Payroll Services",
    description: "Accurate and timely salary processing, tax compliance, and employee benefits management."
  },
  {
    icon: ShieldCheck,
    title: "Background Verification Services",
    description: "Comprehensive background checks to ensure trustworthy and reliable hiring decisions."
  },
];

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => (
  <Card className="bg-secondary border-border/50 text-center p-8 transition-all duration-300 hover:bg-primary/10 hover:border-primary transform hover:-translate-y-2">
    <div className="flex justify-center mb-4">
      <div className="p-4 bg-primary/20 rounded-full">
        <Icon className="h-10 w-10 text-primary" />
      </div>
    </div>
    <CardHeader className="p-0">
      <CardTitle className="text-xl font-headline font-bold text-foreground mb-2">{title}</CardTitle>
    </CardHeader>
    <CardContent className="p-0">
      <p className="text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
);

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-headline font-bold mb-4 section-title underline">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">We provide end-to-end HR solutions tailored to your business needs.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
