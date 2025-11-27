
'use client';

import React from 'react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay"
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    id: 'customer-1',
    name: 'Aanya S.',
    title: 'Real Estate Agent',
    quote: "From start to finish, everything felt premium. My signature came out flawless and elevated my brand instantly.",
  },
  {
    id: 'customer-2',
    name: 'Rohan M.',
    title: 'Photographer',
    quote: "People compliment my signature all the time now. It actually boosted my confidence when sending out contracts.",
  },
  {
    id: 'customer-3',
    name: 'Isha P.',
    title: 'Consultant',
    quote: "Didn’t expect such quality. The process was super smooth and the final signature made me feel truly professional.",
  },
];

export default function TestimonialsSection() {
  const customerImages = PlaceHolderImages.filter(img => img.id.startsWith('customer-'));
  
  const getImage = (id: string) => customerImages.find(img => img.id === id);
  
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  )

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">What Clients Say About SignaGenius™</h2>
            <p className="text-muted-foreground mt-2">Ready to Join These Success Stories?</p>
        </div>
        
        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => {
            const image = getImage(testimonial.id);
            return (
            <Card key={testimonial.id} className="flex flex-col bg-card/50 shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
              <CardContent className="p-6 flex flex-col flex-grow">
                <div className="flex items-center mb-4">
                  <Avatar className="h-16 w-16 border-2 border-accent">
                    {image && <AvatarImage src={image.imageUrl} alt={image.description} data-ai-hint={image.imageHint} />}
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <p className="font-semibold text-lg font-headline">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-accent fill-accent" />)}
                </div>
                <p className="text-foreground/80 flex-grow">"{testimonial.quote}"</p>
              </CardContent>
            </Card>
          )})}
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden -mx-4 overflow-hidden">
            <Carousel
              plugins={[plugin.current]}
              opts={{
                align: "center",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {testimonials.map((testimonial) => {
                  const image = getImage(testimonial.id);
                  return (
                  <CarouselItem key={testimonial.id} className="basis-4/5 pl-4 md:basis-1/2">
                      <Card className="flex flex-col h-full bg-card/50 shadow-lg">
                        <CardContent className="p-6 flex flex-col flex-grow items-center text-center">
                          <div className="flex flex-col items-center mb-4">
                            <Avatar className="h-20 w-20 mb-4 border-2 border-accent">
                              {image && <AvatarImage src={image.imageUrl} alt={image.description} data-ai-hint={image.imageHint} />}
                              <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-semibold text-lg font-headline">{testimonial.name}</p>
                              <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                            </div>
                          </div>
                          <div className="flex mb-4">
                              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-accent fill-accent" />)}
                          </div>
                          <p className="text-foreground/80 flex-grow">"{testimonial.quote}"</p>
                        </CardContent>
                      </Card>
                  </CarouselItem>
                )})}
              </CarouselContent>
              <CarouselPrevious className="absolute left-2" />
              <CarouselNext className="absolute right-2" />
            </Carousel>
        </div>
        <div className="mt-12 text-center">
            <Button
                size="lg"
                className="h-14 text-base md:text-lg min-w-[280px] bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
                style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}
            >
                Create My Signature (50% Off)
            </Button>
        </div>

      </div>
    </section>
  );
}
