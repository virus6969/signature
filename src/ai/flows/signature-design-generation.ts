'use server';

/**
 * @fileOverview A signature design generation AI agent.
 *
 * - generateSignatureDesign - A function that handles the signature design generation process.
 * - SignatureDesignInput - The input type for the generateSignatureDesign function.
 * - SignatureDesignOutput - The return type for the generateSignatureDesign function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SignatureDesignInputSchema = z.object({
  name: z.string().describe('The name to be used in the signature.'),
  stylePreferences: z
    .string()
    .describe(
      'The preferred style for the signature, e.g., elegant, modern, bold.'
    ),
});
export type SignatureDesignInput = z.infer<typeof SignatureDesignInputSchema>;

const SignatureDesignOutputSchema = z.object({
  signatureDesign: z.string().describe('The generated signature design.'),
  styleAnalysis: z.string().describe('Analysis of style used in the design'),
});
export type SignatureDesignOutput = z.infer<typeof SignatureDesignOutputSchema>;

export async function generateSignatureDesign(
  input: SignatureDesignInput
): Promise<SignatureDesignOutput> {
  return signatureDesignFlow(input);
}

const prompt = ai.definePrompt({
  name: 'signatureDesignPrompt',
  input: {schema: SignatureDesignInputSchema},
  output: {schema: SignatureDesignOutputSchema},
  prompt: `You are an AI-powered signature design generator. Create a signature design based on the given name and style preferences.

Name: {{{name}}}
Style Preferences: {{{stylePreferences}}}

Output the signature design and an analysis of the style you used.`, // Added system message
});

const signatureDesignFlow = ai.defineFlow(
  {
    name: 'signatureDesignFlow',
    inputSchema: SignatureDesignInputSchema,
    outputSchema: SignatureDesignOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
