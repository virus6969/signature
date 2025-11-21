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
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    id: 'customer-1',
    name: 'Sarah L.',
    title: 'Real Estate Agent',
    quote: "Awesome customer service, willing to go above and beyond and make sure you're happy. On the first try I got exactly what I wanted and didn't need additional changes. Very happy with this service!",
  },
  {
    id: 'customer-2',
    name: 'Michael B.',
    title: 'Photographer',
    quote: "The quality is top-notch. My new signature has elevated my branding and I constantly get compliments on it. The video tutorial was surprisingly helpful.",
  },
  {
    id: 'customer-3',
    name: 'Jessica P.',
    title: 'Consultant',
    quote: "I was skeptical at first, but the process was seamless and the results were stunning. It's a small detail that makes a huge professional impact. Highly recommend!",
  },
];

export default function TestimonialsSection() {
  const customerImages = PlaceHolderImages.filter(img => img.id.startsWith('customer-'));
  
  const getImage = (id: string) => customerImages.find(img => img.id === id);

  return (
    <section className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-headline text-center font-bold mb-12">What Our Clients Say</h2>
        
        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => {
            const image = getImage(testimonial.id);
            return (
            <Card key={testimonial.id} className="flex flex-col">
              <CardContent className="p-6 flex flex-col flex-grow">
                <div className="flex items-center mb-4">
                  <Avatar className="h-16 w-16">
                    {image && <AvatarImage src={image.imageUrl} alt={image.description} data-ai-hint={image.imageHint} />}
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <p className="font-semibold text-lg">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />)}
                </div>
                <p className="text-muted-foreground flex-grow">"{testimonial.quote}"</p>
              </CardContent>
            </Card>
          )})}
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-md mx-auto"
            >
              <CarouselContent>
                {testimonials.map((testimonial) => {
                  const image = getImage(testimonial.id);
                  return (
                  <CarouselItem key={testimonial.id}>
                    <div className="p-1">
                      <Card className="flex flex-col h-full">
                        <CardContent className="p-6 flex flex-col flex-grow items-center text-center">
                          <div className="flex flex-col items-center mb-4">
                            <Avatar className="h-20 w-20 mb-4">
                              {image && <AvatarImage src={image.imageUrl} alt={image.description} data-ai-hint={image.imageHint} />}
                              <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-semibold text-lg">{testimonial.name}</p>
                              <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                            </div>
                          </div>
                          <div className="flex mb-4">
                              {[...Array(5)].map((_, i) => <Star keyi={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />)}
                          </div>
                          <p className="text-muted-foreground flex-grow">"{testimonial.quote}"</p>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                )})}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
        </div>
        <div className="mt-12 text-center">
            <Button
                size="lg"
                className="h-14 text-base md:text-lg min-w-[280px] bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
                style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}
            >
                Create My Signature - 50% Off
            </Button>
        </div>

      </div>
    </section>
  );
}
