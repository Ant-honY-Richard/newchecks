"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen sm:h-screen sm:min-h-[600px] md:min-h-[700px] w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-background z-0">
        <div className="hero-bg-mesh"></div>
      </div>
      <div className="container relative z-10 mx-auto px-4 py-20 sm:py-0 text-center">
        <p className="mb-3 sm:mb-4 text-sm sm:text-lg font-semibold text-primary font-headline tracking-wider">
          Premium HR Solutions
        </p>
        <h1 className="font-headline text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-tight mb-4 sm:mb-6">
          Strategic <span className="text-primary">Excellence</span> in <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>Human Resources
        </h1>
        <p className="max-w-3xl mx-auto text-muted-foreground text-sm sm:text-base md:text-lg lg:text-xl mb-8 sm:mb-10 px-2 sm:px-0">
          Empowering businesses with expert services in Permanent Staffing, Contract Staffing,
          Outsourcing, Payroll, and Background Verification — delivering the right talent and
          seamless HR management to drive exceptional growth.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4 sm:px-0">
          <Button 
            asChild 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-sm sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-full transition-transform transform hover:scale-105"
          >
            <Link href="#services">Get Started</Link>
          </Button>
          <Button 
            asChild 
            size="lg" 
            variant="outline" 
            className="font-bold text-sm sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-full border-primary text-primary hover:bg-primary/10 hover:text-primary transition-transform transform hover:scale-105"
          >
            <Link href="#about">Learn More</Link>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce z-10">
        <span className="text-xs sm:text-sm text-muted-foreground">Scroll</span>
        <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
      </div>
    </section>
  );
}
