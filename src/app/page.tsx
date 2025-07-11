import Header from '@/components/app/Header';
import HeroSection from '@/components/app/HeroSection';
import AboutSection from '@/components/app/AboutSection';
import ServicesSection from '@/components/app/ServicesSection';
import ApproachSection from '@/components/app/ApproachSection';
import PartnersSection from '@/components/app/PartnersSection';
import BlogSection from '@/components/app/BlogSection';
import ContactSection from '@/components/app/ContactSection';
import Footer from '@/components/app/Footer';
import GoToTopButton from '@/components/app/GoToTopButton';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ApproachSection />
        <PartnersSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
      <GoToTopButton />
    </div>
  );
}
