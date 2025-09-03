"use client";

import { Button } from '@/components/ui/button';
import { ImagePlaceholder } from '@/components/ui/image-placeholder';
import Link from 'next/link';
import { ChevronRight, Users, Briefcase, Target, MessageCircle, BookOpen } from 'lucide-react';

const pagePreviewData = [
  {
    title: "About Us",
    description: "Learn about our mission, values, and the team behind Newchecks Solutions.",
    href: "/about",
    icon: Users,
    image: "https://res.cloudinary.com/djxoeyk1a/image/upload/v1753452674/mission-vision_rkpqwz.jpg",
    aspectRatio: "16/9",
    imageDescription: "Professional team meeting in modern office environment showcasing company culture and collaboration"
  },
  {
    title: "Our Services",
    description: "Comprehensive HR solutions including staffing, outsourcing, payroll, and background verification.",
    href: "/services",
    icon: Briefcase,
    image: "https://res.cloudinary.com/djxoeyk1a/image/upload/v1753452674/permanent-staffing_xvfpqr.jpg",
    aspectRatio: "4/3",
    imageDescription: "HR professionals reviewing candidate profiles and conducting interviews for permanent staffing solutions"
  },
  {
    title: "Our Approach",
    description: "Discover our systematic and client-focused methodology for delivering exceptional HR solutions.",
    href: "/approach",
    icon: Target,
    image: "https://res.cloudinary.com/djxoeyk1a/image/upload/v1753452674/discovery_asdfgh.jpg",
    aspectRatio: "3/2",
    imageDescription: "Strategic planning session with charts and analytics showing systematic approach to HR solutions"
  },
  {
    title: "Contact Us",
    description: "Get in touch with our team of HR experts to discuss your business needs.",
    href: "/contact",
    icon: MessageCircle,
    image: "https://res.cloudinary.com/djxoeyk1a/image/upload/v1753452674/office-map_zxcvbn.jpg",
    aspectRatio: "16/10",
    imageDescription: "Modern office reception area with professional consultation space and company branding"
  },
  {
    title: "HR Insights & Resources",
    description: "Stay updated with the latest trends, best practices, and expert advice in HR.",
    href: "/blog",
    icon: BookOpen,
    image: "https://res.cloudinary.com/djxoeyk1a/image/upload/v1753452674/newsletter_qazwsx.jpg",
    aspectRatio: "5/3",
    imageDescription: "Professional reading materials, laptops, and research documents for HR industry insights and knowledge sharing"
  }
];

export default function PagePreviewSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-headline font-bold mb-4 sm:mb-6">
            Explore Our Complete HR Solution
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-3xl mx-auto">
            Discover all aspects of our comprehensive HR services through our dedicated pages, 
            each designed to provide detailed insights into how we can help your business thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {pagePreviewData.map((page, index) => (
            <div key={page.href} className="group bg-background rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
              {/* Image Section */}
              <div className="relative h-40 sm:h-48 lg:h-56 overflow-hidden">
                <ImagePlaceholder
                  src={page.image}
                  alt={page.title}
                  aspectRatio={page.aspectRatio}
                  description={page.imageDescription}
                  fill={true}
                  className="h-full"
                />
              </div>

              {/* Content Section */}
              <div className="p-4 sm:p-6">
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <page.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {page.title}
                  </h3>
                </div>
                
                <p className="text-muted-foreground text-sm sm:text-base mb-4 sm:mb-6 line-clamp-3">
                  {page.description}
                </p>
                
                <Button 
                  asChild 
                  variant="outline" 
                  size="sm" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all"
                >
                  <Link href={page.href}>
                    Explore Page
                    <ChevronRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-muted-foreground mb-6 text-sm sm:text-base">
            Ready to transform your HR operations with our comprehensive solutions?
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/contact">
                Start Your Journey
                <ChevronRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/services">
                View All Services
                <ChevronRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}