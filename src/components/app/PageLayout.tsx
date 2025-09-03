"use client";

import Header from '@/components/app/Header';
import Footer from '@/components/app/Footer';
import GoToTopButton from '@/components/app/GoToTopButton';

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
      <GoToTopButton />
    </div>
  );
}