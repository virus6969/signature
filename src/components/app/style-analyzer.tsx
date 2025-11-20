'use client';

import React, { useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Loader2 } from 'lucide-react';
import type { StyleTrendAnalysisOutput } from '@/ai/flows/style-trend-analysis';
import { handleAnalyzeTrends } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  signatureElements: z.string().min(10, 'Please describe the elements in more detail.'),
  websiteReview: z.string().nonempty('Please select a website for context.'),
});

const websiteReviews = {
    "SignaturePro Design": "Premium handcrafted signature design service targeting professionals and executives. The design uses a minimalist aesthetic with a luxury feel, high contrast, and strategic warm accents.",
    "Handwritten Sign": "Custom signature design with an emphasis on speed and support for busy professionals. The design focuses on bold, expressive typography and a content-focused, minimalist color application."
}

type StyleAnalyzerProps = {
  onResult: (result: StyleTrendAnalysisOutput | null) => void;
  setIsAnalyzing: (isAnalyzing: boolean) => void;
};

export default function StyleAnalyzer({ onResult, setIsAnalyzing }: StyleAnalyzerProps) {
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      signatureElements: 'Modern font, slight right slant, medium weight, no flourishes.',
      websiteReview: 'SignaturePro Design',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsAnalyzing(true);
    onResult(null);
    startTransition(async () => {
      const payload = {
          ...values,
          websiteReview: websiteReviews[values.websiteReview as keyof typeof websiteReviews]
      }
      const { data, error } = await handleAnalyzeTrends(payload);
      if (error) {
        toast({
          title: 'Error',
          description: error,
          variant: 'destructive',
        });
        onResult(null);
      } else {
        onResult(data);
      }
      setIsAnalyzing(false);
    });
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>2. Analyze Style Trends</CardTitle>
        <CardDescription>
          Get AI-powered feedback on your signature elements based on 2025 design trends from leading sites.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="signatureElements"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Signature Elements</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe font, slant, weight, flourishes..."
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="websiteReview"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Trend Context</FormLabel>
                   <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a website review" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="SignaturePro Design">SignaturePro Design</SelectItem>
                      <SelectItem value="Handwritten Sign">Handwritten Sign</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isPending} className="w-full" variant="secondary">
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Analyzing...
                </>
              ) : (
                'Analyze Trends'
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
