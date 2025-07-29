import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import AdminProvider from '@/components/admin/AdminProvider'

export const metadata: Metadata = {
  title: 'Newchecks Solutions | HR & Staffing Services',
  description: 'Newchecks Solutions provides expert HR services including permanent staffing, contract staffing, outsourcing, payroll, and background verification.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background">
        {children}
        <Toaster />
        <AdminProvider />
      </body>
    </html>
  );
}
