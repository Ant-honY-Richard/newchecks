
import { blogPosts, BlogPost } from '@/components/app/BlogSection';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Header from '@/components/app/Header';
import Footer from '@/components/app/Footer';
import { Clock, MessageSquare, Linkedin, Twitter, Facebook, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card } from '@/components/ui/card';

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
                <Button asChild variant="ghost" className="mb-8">
                    <Link href="/#blog">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Blog
                    </Link>
                </Button>

                <article>
                    <header className="mb-8">
                        <p className="text-primary font-semibold mb-2">{post.category}</p>
                        <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-4">{post.title}</h1>
                        <div className="flex items-center gap-6 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <Image src={post.author.image} alt={post.author.name} width={40} height={40} className="rounded-full" />
                                <div>
                                    <p className="font-semibold text-foreground">{post.author.name}</p>
                                    <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                                </div>
                            </div>
                            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {post.readTime}</span>
                            <span className="flex items-center gap-1.5"><MessageSquare className="w-4 h-4" /> {post.comments} Comments</span>
                        </div>
                    </header>
                    
                    <Image 
                        src={post.image} 
                        alt={post.title} 
                        width={1200} 
                        height={600}
                        data-ai-hint={post.dataAiHint}
                        className="w-full h-auto rounded-lg shadow-lg mb-8"
                    />

                    <div className="prose prose-invert prose-lg max-w-none mx-auto text-foreground/90 prose-headings:text-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:text-foreground">
                        <p className="lead text-xl text-muted-foreground">{post.description}</p>
                        <div dangerouslySetInnerHTML={{ __html: post.content }} />
                    </div>
                </article>

                <Card className="mt-12 p-6 bg-secondary flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="font-semibold text-lg">Share this article</p>
                    <div className="flex gap-2">
                        <Button asChild variant="outline" size="icon" className="rounded-full">
                            <a href="#" aria-label="Share on Linkedin"><Linkedin className="h-5 w-5" /></a>
                        </Button>
                        <Button asChild variant="outline" size="icon" className="rounded-full">
                            <a href="#" aria-label="Share on Twitter"><Twitter className="h-5 w-5" /></a>
                        </Button>
                        <Button asChild variant="outline" size="icon" className="rounded-full">
                            <a href="#" aria-label="Share on Facebook"><Facebook className="h-5 w-5" /></a>
                        </Button>
                    </div>
                </Card>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
