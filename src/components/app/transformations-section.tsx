
'use client';

import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const transformations = [
    { 
        id: 'transform-1',
        title: "From Basic to Bold",
        description: "Stand out with confidence and authority",
        before: {
            id: 'sig-before-1',
            label: 'Basic, forgettable name writing'
        },
        after: {
            id: 'sig-1',
            label: 'Bold, professional signature'
        }
    },
    { 
        id: 'transform-2',
        title: "From Cluttered to Clean",
        description: "Create clarity and professionalism",
         before: {
            id: 'sig-before-2',
            label: 'Cluttered, hard to read'
        },
        after: {
            id: 'sig-2',
            label: 'Clean, elegant design'
        }
    },
    { 
        id: 'transform-3',
        title: "From Forgettable to Flawless",
        description: "Make a lasting impression",
        before: {
            id: 'sig-before-3',
            label: 'Forgettable, plain text'
        },
        after: {
            id: 'sig-3',
            label: 'Memorable, distinctive mark'
        }
    },
]

export default function TransformationsSection() {
  const transformationImages = transformations.map(t => {
      const beforeImg = PlaceHolderImages.find(pImg => pImg.id === t.before.id);
      const afterImg = PlaceHolderImages.find(pImg => pImg.id === t.after.id);
      return { 
          ...t, 
          before: {...t.before, ...beforeImg}, 
          after: {...t.after, ...afterImg} 
      };
  });

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
            <h2 className="text-3xl font-headline font-bold">✍️ Signature Transformations</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">See how we transform ordinary name writing into powerful, professional signatures that make a lasting impression</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6">
          {transformationImages.map(item => (
            <Card key={item.id} className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out hover:scale-[1.02]">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">{item.title}</CardTitle>
                    <p className="text-muted-foreground">{item.description}</p>
                </CardHeader>
              <CardContent className="p-4 md:p-6 md:pt-0">
                <div className="grid md:grid-cols-2 gap-4 md:gap-8 items-center relative">
                    {/* Arrow for Desktop */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-background p-2 rounded-full border shadow-md">
                        <ArrowRight className="w-8 h-8 text-primary" />
                    </div>

                  <div className="flex flex-col items-center text-center">
                    <div className="w-full mb-2">
                        <span className="inline-block bg-destructive/10 text-destructive text-sm font-semibold px-3 py-1 rounded-full">BEFORE</span>
                    </div>
                    <div className="aspect-video relative w-full rounded-lg overflow-hidden border-2 border-dashed border-destructive/50">
                        {item.before.imageUrl && <Image
                            src={item.before.imageUrl}
                            alt={item.before.label}
                            fill
                            className="object-contain p-4"
                            data-ai-hint={item.before.imageHint}
                        />}
                    </div>
                    <div className="mt-2">
                        <p className="text-sm text-muted-foreground">{item.before.label}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-full mb-2">
                        <span className="inline-block bg-green-500/10 text-green-600 text-sm font-semibold px-3 py-1 rounded-full">AFTER</span>
                    </div>
                     <div className="aspect-video relative w-full rounded-lg overflow-hidden border-2 border-green-500 bg-green-500/5">
                        {item.after.imageUrl && <Image
                            src={item.after.imageUrl}
                            alt={item.after.label}
                            fill
                            className="object-contain p-4"
                            data-ai-hint={item.after.imageHint}
                        />}
                    </div>
                    <div className="mt-2">
                        <p className="text-sm text-muted-foreground">{item.after.label}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
         <div className="mt-8 text-center">
            <h3 className="text-2xl font-headline mb-2">Ready for Your Signature Transformation?</h3>
            <p className="text-muted-foreground mb-3 max-w-2xl mx-auto">Join thousands of professionals who have elevated their personal brand with a custom signature design</p>
            <Button
                size="lg"
                className="h-14 text-lg bg-accent hover:bg-accent/90 text-accent-foreground"
            >
                Start Your Transformation
            </Button>
        </div>
      </div>
    </section>
  );
}
