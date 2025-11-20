'use client';

import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Signature } from 'lucide-react';
import type { SignatureDesignOutput } from '@/ai/flows/signature-design-generation';
import { Skeleton } from '../ui/skeleton';
import { Separator } from '../ui/separator';

type SignaturePreviewProps = {
  result: SignatureDesignOutput | null;
  isLoading: boolean;
};

export default function SignaturePreview({ result, isLoading }: SignaturePreviewProps) {
  if (isLoading) {
    return (
      <Card className="h-full">
        <CardHeader>
          <Skeleton className="h-8 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-center p-8 border-dashed border-2 rounded-lg bg-muted min-h-[150px]">
            <Skeleton className="h-12 w-4/5" />
          </div>
          <Separator />
          <div className="space-y-2">
            <Skeleton className="h-6 w-1/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </div>
        </CardContent>
        <CardFooter className="gap-4">
          <Skeleton className="h-10 w-1/2" />
          <Skeleton className="h-10 w-1/2" />
        </CardFooter>
      </Card>
    );
  }

  if (!result) {
    return (
      <Card className="flex flex-col items-center justify-center text-center p-8 h-full border-dashed">
        <Signature className="h-16 w-16 text-muted-foreground mb-4" />
        <h3 className="font-headline text-xl font-semibold">Your Signature Awaits</h3>
        <p className="text-muted-foreground">
          Generate a signature to see the preview here.
        </p>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Signature Preview</CardTitle>
        <CardDescription>
          Here is your AI-generated signature design. You can download it in various formats.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-center p-8 border-dashed border-2 rounded-lg bg-muted min-h-[150px]">
          <p className="font-headline text-5xl italic text-foreground">
            {result.signatureDesign}
          </p>
        </div>
        <div>
          <h4 className="font-semibold font-headline text-lg mb-2">Style Analysis</h4>
          <p className="text-sm text-muted-foreground">{result.styleAnalysis}</p>
        </div>
      </CardContent>
      <CardFooter className="gap-4">
        <Button variant="outline" className="w-full">
          <Download className="mr-2 h-4 w-4" />
          Download PNG
        </Button>
        <Button variant="outline" className="w-full">
          <Download className="mr-2 h-4 w-4" />
          Download SVG
        </Button>
      </CardFooter>
    </Card>
  );
}
