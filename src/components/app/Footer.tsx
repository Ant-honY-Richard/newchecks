import Link from 'next/link';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-secondary text-muted-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="md:col-span-2 lg:col-span-2">
            <Link href="#home" className="flex items-center gap-2 mb-4">
              <Image src="https://res.cloudinary.com/djxoeyk1a/image/upload/v1752213585/header_logo_newchecks_zd9b1g.png" alt="Newchecks Solutions Logo" width={180} height={40} />
            </Link>
            <p className="mb-4 max-w-sm">
              Your trusted partner for Permanent Staffing, Contract Staffing, Outsourcing, Payroll, and Background Verification services. Empowering businesses with tailored HR solutions.
            </p>
            <p className="text-primary font-semibold italic mb-6">"we work by your trust"</p>
            <div className="flex space-x-4">
              <Button asChild variant="outline" size="icon" className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <a href="#" aria-label="Facebook"><Facebook className="h-5 w-5" /></a>
              </Button>
              <Button asChild variant="outline" size="icon" className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <a href="#" aria-label="Instagram"><Instagram className="h-5 w-5" /></a>
              </Button>
              <Button asChild variant="outline" size="icon" className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <a href="#" aria-label="Twitter"><Twitter className="h-5 w-5" /></a>
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="font-headline font-bold text-foreground mb-4">Our Links</h4>
            <ul className="space-y-3">
              <li><Link href="#home" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="#about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="#blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="#contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline font-bold text-foreground mb-4">Our Services</h4>
            <ul className="space-y-3">
              <li><Link href="#services" className="hover:text-primary transition-colors">HR Consultancy</Link></li>
              <li><Link href="#services" className="hover:text-primary transition-colors">Permanent Staffing</Link></li>
              <li><Link href="#services" className="hover:text-primary transition-colors">Contract Staffing</Link></li>
              <li><Link href="#services" className="hover:text-primary transition-colors">Outsourcing</Link></li>
              <li><Link href="#services" className="hover:text-primary transition-colors">Payroll Services</Link></li>
              <li><Link href="#services" className="hover:text-primary transition-colors">Background Verification</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline font-bold text-foreground mb-4">Other Links</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Terms & Conditions</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Support</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-background">
        <div className="container mx-auto px-4 py-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} <Link href="#" className="text-primary hover:underline">Newchecks Solutions</Link>. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
