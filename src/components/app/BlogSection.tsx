
"use client"

import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Search, Clock, MessageSquare, Sparkles } from 'lucide-react';
import Image from "next/image";
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Textarea } from '@/components/ui/textarea';
import { summarizeArticle, type ArticleSummarizerOutput } from '@/ai/flows/article-summarizer';
import { blogPosts, type BlogPost } from '@/lib/blog-data';


const categories = ["All Topics", "HR Strategy", "Recruitment", "Payroll", "Compliance"];

const ArticleSummarizer = () => {
    const [articleText, setArticleText] = useState('');
    const [summary, setSummary] = useState<ArticleSummarizerOutput | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsLoading(true);
      setError(null);
      setSummary(null);
  
      if (!articleText.trim()) {
        setError('Please paste some article text to summarize.');
        setIsLoading(false);
        return;
      }
  
      try {
        const result = await summarizeArticle({ articleText });
        setSummary(result);
      } catch (err) {
        setError('Failed to summarize the article. Please try again.');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
  
    return (
      <Card className="bg-secondary/50 border-border/70 mt-16">
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1" className="border-b-0">
                <AccordionTrigger className="p-6 text-lg font-headline hover:no-underline">
                    <div className="flex items-center gap-3">
                        <Sparkles className="w-6 h-6 text-primary" />
                        <span>AI Article Summarizer</span>
                    </div>
                </AccordionTrigger>
                <AccordionContent className="p-6 pt-0">
                    <p className="text-muted-foreground mb-4">Get the gist of lengthy HR articles, guides, and updates quickly with AI-generated summaries.</p>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <Textarea
                        placeholder="Paste the text of an HR article here..."
                        value={articleText}
                        onChange={(e) => setArticleText(e.target.value)}
                        rows={8}
                        className="bg-background"
                        />
                        <Button type="submit" disabled={isLoading}>
                        {isLoading ? 'Summarizing...' : 'Summarize Article'}
                        </Button>
                    </form>
                    {error && <p className="text-destructive mt-4">{error}</p>}
                    {summary && (
                        <Card className="mt-6 bg-background p-6">
                            <CardContent className="p-0">
                                <h3 className="font-headline text-xl mb-2 text-primary">Summary</h3>
                                <p className="text-foreground whitespace-pre-wrap">{summary.summary}</p>
                            </CardContent>
                        </Card>
                    )}
                </AccordionContent>
            </AccordionItem>
        </Accordion>
      </Card>
    );
};


export default function BlogSection() {
    const [activeCategory, setActiveCategory] = useState("All Topics");
    const [searchTerm, setSearchTerm] = useState("");

    const filteredPosts = blogPosts.filter(post => {
        const categoryMatch = activeCategory === "All Topics" || post.category === activeCategory;
        const searchMatch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || post.description.toLowerCase().includes(searchTerm.toLowerCase());
        return categoryMatch && searchMatch;
    });

  return (
    <section id="blog" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-headline font-bold mb-4 section-title underline">HR Insights & Industry News</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Expert perspectives on HR trends, strategies, and best practices.</p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
            <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                    <Button key={category} variant={activeCategory === category ? "default" : "secondary"} className={activeCategory === category ? 'bg-primary text-primary-foreground' : ''} onClick={() => setActiveCategory(category)}>
                        {category}
                    </Button>
                ))}
            </div>
            <div className="relative w-full md:w-auto">
                <Input type="text" placeholder="Search articles..." className="pr-10 bg-secondary" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 blog-list">
            {filteredPosts.map((post) => (
                <Card key={post.slug} className="bg-secondary overflow-hidden group">
                    <figure className="banner relative">
                        <Link href={`/blog/${post.slug}`}>
                            <Image src={post.image} width={750} height={350} alt={post.title} data-ai-hint={post.dataAiHint} className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" />
                            {post.new && <div className="new-badge">NEW</div>}
                            <div className="category-badge">{post.category}</div>
                        </Link>
                    </figure>
                    <CardContent className="p-6">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                            <span>{post.metaCategory}</span>
                            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {post.readTime}</span>
                        </div>
                        <h3 className="text-2xl font-headline font-bold mb-3 h-24">
                            <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">{post.title}</Link>
                        </h3>
                        <p className="text-muted-foreground mb-4 h-20 overflow-hidden">{post.description}</p>
                        <div className="flex justify-between items-center border-t border-border pt-4">
                            <div className="flex items-center gap-2">
                                <Image src={post.author.image} alt={post.author.name} width={40} height={40} className="rounded-full" />
                                <div>
                                    <p className="font-semibold text-foreground">{post.author.name}</p>
                                    <time dateTime={post.date} className="text-xs text-muted-foreground">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <a href="#" className="flex items-center gap-1 text-muted-foreground hover:text-primary"><MessageSquare className="w-5 h-5" /> {post.comments}</a>
                            </div>
                        </div>
                        <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-primary font-semibold mt-4 group-hover:translate-x-1 transition-transform">
                            Read Article <ArrowRight className="w-4 h-4" />
                        </Link>
                    </CardContent>
                </Card>
            ))}
        </div>

        <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 hover:text-primary">View All Articles <ArrowRight className="ml-2 w-4 h-4" /></Button>
        </div>

        <ArticleSummarizer />
      </div>
    </section>
  );
}
