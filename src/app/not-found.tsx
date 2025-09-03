import PageLayout from '@/components/app/PageLayout';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-32 text-center">
        <h1 className="text-6xl md:text-8xl font-headline font-bold mb-6 text-primary">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Page Not Found</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/">
              Return to Home
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/contact">
              Contact Support
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </Button>
        </div>
      </div>
    </PageLayout>
  );
}