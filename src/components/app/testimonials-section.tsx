
'use client';

import React from 'react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    id: 'customer-1',
    name: 'Priya S.',
    title: 'Chartered Accountant',
    quote: "From messy to magnetic. My new signature gets compliments every time I use it. The transformation is just incredible!",
  },
  {
    id: 'customer-2',
    name: 'Rahul V.',
    title: 'Startup Founder',
    quote: "I didn't realize how weak and unprofessional my old signature looked until I saw the 'after.' This was a total upgrade for my personal brand.",
  },
  {
    id: 'customer-3',
    name: 'Aisha K.',
    title: 'MBA Graduate',
    quote: "Honestly, this is the best money I've spent on my professional development this year. Worth every single penny.",
  },
  {
    id: 'customer-4',
    name: 'Sarah M.',
    title: 'Marketing Director',
    quote: "Professional signature that matches my brand perfectly! My clients notice the difference immediately.",
  },
  {
    id: 'customer-5',
    name: 'Michael R.',
    title: 'Software Engineer',
    quote: "Worth every penny. My confidence has skyrocketed since getting my new signature. It's amazing what a difference it makes!",
  }
];

export default function TestimonialsSection() {
  const customerImages = PlaceHolderImages.filter(img => img.id.startsWith('customer-'));
  
  const getImage = (id: string) => customerImages.find(img => img.id === id);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Real Transformations, Real Results</h2>
            <p className="text-muted-foreground mt-2">See how we've helped professionals elevate their identity with stunning signature transformations</p>
        </div>
        
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {testimonials.map((testimonial) => {
            const image = getImage(testimonial.id);
            return (
            <div key={testimonial.id} className="break-inside-avoid">
              <Card className="flex flex-col bg-card/50 shadow-lg transform hover:-translate-y-2 transition-transform duration-300 h-full">
                <CardContent className="p-6 flex flex-col flex-grow">
                  <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-accent fill-accent" />)}
                  </div>
                  <p className="text-foreground/80 flex-grow mb-6">"{testimonial.quote}"</p>
                   <div className="flex items-center">
                    <Avatar className="h-12 w-12 border-2 border-accent">
                      {image && <AvatarImage src={image.imageUrl} alt={image.description} data-ai-hint={image.imageHint} />}
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="ml-4">
                      <p className="font-semibold font-headline">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )})}
        </div>

        <div className="text-center mt-16">
          <h3 className="text-2xl font-headline mb-4">Ready to Join These Success Stories?</h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">Transform your signature and elevate your professional presence today</p>
          <Button size="lg" className="h-14 text-lg bg-accent text-accent-foreground hover:bg-accent/90">Start Your Transformation</Button>
        </div>
      </div>
    </section>
  );
}
