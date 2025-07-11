"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-background z-0">
        <div className="hero-bg-mesh"></div>
      </div>
      <div className="container relative z-10 mx-auto px-4 text-center">
        <p className="mb-4 text-lg font-semibold text-primary font-headline tracking-wider">Premium HR Solutions</p>
        <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-foreground leading-tight mb-6">
          Strategic <span className="text-primary">Excellence</span> in <br /> Human Resources
        </h1>
        <p className="max-w-3xl mx-auto text-muted-foreground md:text-xl mb-10">
          Empowering businesses with expert services in Permanent Staffing, Contract Staffing,
          Outsourcing, Payroll, and Background Verification — delivering the right talent and
          seamless HR management to drive exceptional growth.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 rounded-full transition-transform transform hover:scale-105">
            <Link href="#services">Get Started</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="font-bold text-lg px-8 py-6 rounded-full border-primary text-primary hover:bg-primary/10 hover:text-primary transition-transform transform hover:scale-105">
            <Link href="#about">Learn More</Link>
          </Button>
        </div>
      </div>
       <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce z-10">
        <span className="text-sm text-muted-foreground">Scroll</span>
        <ArrowDown className="w-5 h-5 text-muted-foreground" />
      </div>
    </section>
  );
}
