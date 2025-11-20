
'use server';

import {
  generateSignatureDesign,
  type SignatureDesignInput,
  type SignatureDesignOutput,
} from '@/ai/flows/signature-design-generation';
import {
  analyzeStyleTrends,
  type StyleTrendAnalysisInput,
  type StyleTrendAnalysisOutput,
} from '@/ai/flows/style-trend-analysis';

export async function handleGenerateSignature(
  data: SignatureDesignInput
): Promise<{ data: SignatureDesignOutput | null; error: string | null }> {
  try {
    const result = await generateSignatureDesign(data);
    return { data: result, error: null };
  } catch (error) {
    console.error('Error generating signature:', error);
    return { data: null, error: 'Failed to generate signature design. Please try again.' };
  }
}

export async function handleAnalyzeTrends(
  data: StyleTrendAnalysisInput
): Promise<{ data: StyleTrendAnalysisOutput | null; error: string | null }> {
  try {
    const result = await analyzeStyleTrends(data);
    return { data: result, error: null };
  } catch (error) {
    console.error('Error analyzing trends:', error);
    return { data: null, error: 'Failed to analyze style trends. Please try again.' };
  }
}
