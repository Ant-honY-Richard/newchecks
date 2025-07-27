"use client";

import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

const StatCard = ({ finalValue, text, suffix = "" }: { finalValue: number, text: string, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = finalValue;
      if (start === end) return;

      let totalMilSecDur = 2000;
      let incrementTime = (totalMilSecDur / end) * 0.5;
      
      let timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);

      // Adjust speed for large numbers
      if (end > 1000) {
        clearInterval(timer);
        timer = setInterval(() => {
            start += Math.ceil(end/100);
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(start);
            }
        }, 20);
      }
    }
  }, [inView, finalValue]);

  return (
    <div ref={ref} className="text-center p-4">
      <p className="text-5xl font-bold font-headline text-primary">{count.toLocaleString()}{suffix}</p>
      <p className="text-muted-foreground mt-2">{text}</p>
    </div>
  );
};


export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="w-full h-full flex justify-center items-center">
             <Image
              src="https://res.cloudinary.com/djxoeyk1a/image/upload/v1753452674/662a3f9c-6c2a-4c85-82f4-bced987abe26_jphi8e.png"
              width={700}
              height={532}
              alt="Team discussing HR strategies"
              className="rounded-lg shadow-2xl object-cover"
              data-ai-hint="team business meeting"
            />
          </div>
          <div>
            <h2 className="text-4xl font-headline font-bold mb-6 section-title underline">Why Choose Newchecks Solutions</h2>
            <p className="text-muted-foreground mb-4">
              We provide expert HR solutions to simplify your business operations and fuel growth. From staffing and outsourcing to payroll and background verification, we deliver the right talent and smooth workforce management — every time.
            </p>
            <p className="text-muted-foreground mb-8">
              Our strategic approach ensures efficient processes, helping you focus on what matters most — growing your business.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <StatCard finalValue={50} text="Happy Clients" suffix="+" />
              <StatCard finalValue={10000} text="Careers Built" suffix="+" />
              <StatCard finalValue={99} text="Success Rate" suffix="%" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
