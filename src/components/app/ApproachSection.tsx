import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Search, Users, CheckCheck, FileText, CircleDollarSign, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const approachSteps = [
  {
    icon: Search,
    title: "Understanding Your Needs",
    description: "We start by understanding your business goals and job role requirements to find the perfect candidates."
  },
  {
    icon: Users,
    title: "Finding the Right Talent",
    description: "Using multiple channels like direct outreach, field recruiters, and trusted partners, we source top talent."
  },
  {
    icon: CheckCheck,
    title: "Selecting the Best Fit",
    description: "We assess candidates through interviews, skill tests, and reference checks to ensure the best match."
  },
  {
    icon: FileText,
    title: "Smooth Onboarding",
    description: "From paperwork to training, we ensure a seamless onboarding experience for new hires."
  },
  {
    icon: CircleDollarSign,
    title: "Hassle-Free Payroll",
    description: "We manage salary processing, ensuring accurate and timely payments without any hassle."
  },
  {
    icon: ShieldCheck,
    title: "Staying Compliant",
    description: "We handle all legal and industry compliance requirements, keeping your business risk-free."
  },
];

interface ApproachCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ApproachCard = ({ icon: Icon, title, description }: ApproachCardProps) => (
  <div className="flex items-start gap-6">
    <div className="flex-shrink-0">
        <div className="p-3 border-2 border-primary/30 bg-secondary rounded-full">
            <Icon className="h-8 w-8 text-primary" />
        </div>
    </div>
    <div>
        <h3 className="text-xl font-headline font-bold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
    </div>
  </div>
);

export default function ApproachSection() {
  return (
    <section id="approach" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-headline font-bold mb-4 section-title underline">Our Approach</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Our process is simple and effective, designed for maximum impact and minimal friction.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {approachSteps.map((step, index) => (
            <ApproachCard key={index} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}
