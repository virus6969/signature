
'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { HelpCircle, Clock, CheckSquare, Shield, Smile } from 'lucide-react';
import React from 'react';

const faqs = [
    {
        icon: HelpCircle,
        question: "My handwriting is terrible. Can you still help?",
        answer: "Absolutely. Your handwriting has no impact on the final design because we don't use it. Our professional calligraphers create your new signature entirely from scratch based on the style preferences you select, ensuring a clean, professional, and unique result regardless of your own handwriting."
    },
    {
        icon: Clock,
        question: "How long does it take?",
        answer: "You'll receive your initial set of 3 unique signature concepts within 24 hours of submitting your order. We prioritize a swift turnaround so you can start elevating your brand as quickly as possible."
    },
    {
        icon: CheckSquare,
        question: "Is the signature legally usable?",
        answer: "Yes, your new signature is 100% legally binding and can be used on all official documents, including contracts, credit card slips, and legal forms, just like your current signature. It serves as your unique personal mark."
    },
    {
        icon: Shield,
        question: "Is my data safe?",
        answer: "We are committed to your privacy. Your name and any other personal information are used exclusively for creating your signature. We never share, sell, or store your data for any other purpose. All transactions are securely processed."
    },
     {
        icon: Smile,
        question: "What if I don’t like the signature?",
        answer: "Your satisfaction is our top priority. We offer unlimited free revisions. If you're not completely happy with the initial designs, we will continue to refine and adjust them based on your feedback until you have a signature you absolutely love, guaranteed."
    }
]

export default function FaqSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto max-w-3xl px-4">
        <h2 className="text-3xl font-headline text-center font-bold mb-12">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-card border-none rounded-lg shadow-md transition-shadow hover:shadow-lg">
                <AccordionTrigger className="p-6 text-left hover:no-underline">
                  <div className="flex items-center gap-4">
                    <faq.icon className="h-6 w-6 text-accent flex-shrink-0" />
                    <span className="font-semibold">{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-0">
                  <p className="ml-10 text-muted-foreground">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
        </Accordion>
      </div>
    </section>
  );
}
