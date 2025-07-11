"use client";

import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#approach', label: 'Approach' },
  { href: '#blog', label: 'Blog' },
  { href: '#contact', label: 'Contact Us' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", isScrolled ? "bg-background/80 backdrop-blur-sm border-b border-border" : "bg-transparent")}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="#home" className="flex items-center gap-2">
            <Image src="https://res.cloudinary.com/djxoeyk1a/image/upload/v1752213585/header_logo_newchecks_zd9b1g.png" alt="Newchecks Solutions Logo" width={180} height={40} />
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              {link.label}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center gap-4">
            <Button asChild className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="#contact">
                    Get A Quote
                    <ChevronRight className="h-4 w-4" />
                </Link>
            </Button>

            <div className="md:hidden">
                <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Open menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[300px] bg-background">
                        <SheetHeader className="mb-8">
                        <SheetTitle>
                            <Link href="#home" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2">
                                <Image src="https://res.cloudinary.com/djxoeyk1a/image/upload/v1752213585/header_logo_newchecks_zd9b1g.png" alt="Newchecks Solutions Logo" width={180} height={40} />
                            </Link>
                        </SheetTitle>
                        </SheetHeader>
                        <div className="flex flex-col gap-6">
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-muted-foreground transition-colors hover:text-primary">
                                {link.label}
                            </Link>
                        ))}
                        <Button asChild className="mt-4 bg-primary hover:bg-primary/90 text-primary-foreground">
                            <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                                Get A Quote
                                <ChevronRight className="h-4 w-4" />
                            </Link>
                        </Button>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </div>

      </div>
    </header>
  );
}
