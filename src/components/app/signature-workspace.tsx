'use client';

import React, { useState } from 'react';
import type { SignatureDesignOutput } from '@/ai/flows/signature-design-generation';
import type { StyleTrendAnalysisOutput } from '@/ai/flows/style-trend-analysis';
import SignatureGenerator from './signature-generator';
import StyleAnalyzer from './style-analyzer';
import SignaturePreview from './signature-preview';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Skeleton } from '../ui/skeleton';
import { BarChart } from 'lucide-react';

export default function SignatureWorkspace() {
  const [signatureResult, setSignatureResult] = useState<SignatureDesignOutput | null>(null);
  const [trendResult, setTrendResult] = useState<StyleTrendAnalysisOutput | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  return (
    <main className="flex-1 container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
        {/* Left Column: Forms */}
        <div className="lg:col-span-2 space-y-8">
          <SignatureGenerator onResult={setSignatureResult} setIsGenerating={setIsGenerating} />
          <StyleAnalyzer onResult={setTrendResult} setIsAnalyzing={setIsAnalyzing} />
        </div>

        {/* Right Column: Results */}
        <div className="lg:col-span-3 space-y-8">
          <SignaturePreview result={signatureResult} isLoading={isGenerating} />
          
          <Card>
            <CardHeader>
              <CardTitle>Style Trend Analysis</CardTitle>
              <CardDescription>AI-powered suggestions based on 2025 design trends.</CardDescription>
            </CardHeader>
            <CardContent>
              {isAnalyzing && (
                 <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                 </div>
              )}
              {!isAnalyzing && !trendResult && (
                <div className="flex flex-col items-center justify-center text-center p-8 border-dashed rounded-lg">
                    <BarChart className="h-12 w-12 text-muted-foreground mb-4" />
                    <h3 className="font-headline text-lg font-semibold">Trend Insights Appear Here</h3>
                    <p className="text-muted-foreground text-sm">
                        Analyze your style elements to get real-time feedback.
                    </p>
                </div>
              )}
              {trendResult && (
                <p className="text-sm text-foreground">{trendResult.trendSuggestions}</p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
