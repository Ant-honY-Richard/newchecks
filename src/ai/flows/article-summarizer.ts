'use server';

/**
 * @fileOverview Summarizes HR articles using AI.
 *
 * - summarizeArticle - A function that summarizes an article.
 * - ArticleSummarizerInput - The input type for the summarizeArticle function.
 * - ArticleSummarizerOutput - The return type for the summarizeArticle function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ArticleSummarizerInputSchema = z.object({
  articleText: z.string().describe('The text content of the HR article to summarize.'),
});
export type ArticleSummarizerInput = z.infer<typeof ArticleSummarizerInputSchema>;

const ArticleSummarizerOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the HR article.'),
});
export type ArticleSummarizerOutput = z.infer<typeof ArticleSummarizerOutputSchema>;

export async function summarizeArticle(input: ArticleSummarizerInput): Promise<ArticleSummarizerOutput> {
  return summarizeArticleFlow(input);
}

const summarizeArticlePrompt = ai.definePrompt({
  name: 'summarizeArticlePrompt',
  input: {schema: ArticleSummarizerInputSchema},
  output: {schema: ArticleSummarizerOutputSchema},
  prompt: `You are an expert HR article summarizer.  Please provide a concise summary of the following article:\n\n{{{articleText}}}`,
});

const summarizeArticleFlow = ai.defineFlow(
  {
    name: 'summarizeArticleFlow',
    inputSchema: ArticleSummarizerInputSchema,
    outputSchema: ArticleSummarizerOutputSchema,
  },
  async input => {
    const {output} = await summarizeArticlePrompt(input);
    return output!;
  }
);
