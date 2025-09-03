import PageLayout from '@/components/app/PageLayout';
import BlogSection from '@/components/app/BlogSection';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { blogPosts } from '@/lib/blog-data';

export default function BlogPage() {
  return (
    <PageLayout>
      <div className="bg-primary/10 py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-headline font-bold mb-4 sm:mb-6 text-center">
            HR Insights & Resources
          </h1>
          <p className="text-muted-foreground text-center max-w-3xl mx-auto text-sm sm:text-base">
            Stay updated with the latest trends, best practices, and expert advice in HR and workforce management.
          </p>
        </div>
      </div>
      
      <BlogSection />
      
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-12 text-center section-title underline">Featured Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {blogPosts.slice(0, 2).map((post) => (
              <div key={post.slug} className="bg-secondary/30 rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-64 w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  {post.new && (
                    <span className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                      NEW
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium bg-secondary px-2 py-1 rounded">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                  <p className="text-muted-foreground mb-6">{post.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Image
                        src={post.author.image}
                        alt={post.author.name}
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                      <span className="text-sm font-medium">{post.author.name}</span>
                    </div>
                    <Button asChild variant="ghost" size="sm">
                      <Link href={`/blog/${post.slug}`}>
                        Read More
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.slice(2).map((post) => (
              <div key={post.slug} className="bg-secondary/30 rounded-lg overflow-hidden shadow-md">
                <div className="relative h-48 w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  {post.new && (
                    <span className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                      NEW
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium bg-secondary px-2 py-1 rounded">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{post.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{post.description}</p>
                  <Button asChild variant="ghost" size="sm" className="w-full justify-between">
                    <Link href={`/blog/${post.slug}`}>
                      Read Article
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="bg-background rounded-lg p-8 md:p-12 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
                <p className="text-muted-foreground mb-6">
                  Stay updated with the latest HR trends, industry insights, and best practices. 
                  Our newsletter delivers valuable content directly to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    Subscribe
                  </Button>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="relative w-full aspect-[5/3] rounded-lg overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/djxoeyk1a/image/upload/v1756877906/1756876716737-0de97e44-5708-4a0d-b901-c07fa56bd647_zi0r2k.png"
                    alt="Newsletter and subscription illustration featuring email marketing, content updates, HR industry insights, and professional communication design"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6">Need Expert HR Guidance?</h2>
          <p className="text-muted-foreground mb-8 max-w-3xl mx-auto">
            Our team of HR specialists is ready to help you navigate complex workforce challenges and implement effective solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/contact">
                Contact Our Experts
                <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/services">
                Explore Our Services
                <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}