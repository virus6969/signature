'use server';

/**
 * @fileOverview A Genkit flow for analyzing signature style trends based on user input.
 *
 * - analyzeStyleTrends - Analyzes signature style trends and provides real-time suggestions.
 * - StyleTrendAnalysisInput - The input type for the analyzeStyleTrends function.
 * - StyleTrendAnalysisOutput - The return type for the analyzeStyleTrends function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const StyleTrendAnalysisInputSchema = z.object({
  signatureElements: z
    .string()
    .describe(
      'A description of signature elements entered by the user, such as font, slant, weight, and flourishes.'
    ),
  websiteReview:
    z.string().optional().describe("The website to pull the review from, if desired."),
});
export type StyleTrendAnalysisInput = z.infer<typeof StyleTrendAnalysisInputSchema>;

const StyleTrendAnalysisOutputSchema = z.object({
  trendSuggestions: z.string().describe('Real-time suggestions for signature elements of styles trending in 2025.'),
});
export type StyleTrendAnalysisOutput = z.infer<typeof StyleTrendAnalysisOutputSchema>;

export async function analyzeStyleTrends(input: StyleTrendAnalysisInput): Promise<StyleTrendAnalysisOutput> {
  return analyzeStyleTrendsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'styleTrendAnalysisPrompt',
  input: {schema: StyleTrendAnalysisInputSchema},
  output: {schema: StyleTrendAnalysisOutputSchema},
  prompt: `You are an AI assistant specializing in analyzing signature style trends for 2025.

You will provide real-time suggestions based on the user's input for signature elements.

Signature Elements: {{{signatureElements}}}

Based on the signature elements provided, suggest signature elements and styles that are trending in 2025. The elements should align with trends detailed in the provided website review.

Website Review: {{websiteReview}}`,
});

const analyzeStyleTrendsFlow = ai.defineFlow(
  {
    name: 'analyzeStyleTrendsFlow',
    inputSchema: StyleTrendAnalysisInputSchema,
    outputSchema: StyleTrendAnalysisOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
