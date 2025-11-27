

import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Award, PenTool, Users, Eye, Fingerprint } from 'lucide-react';
import { Button } from '../ui/button';

const features = [
  {
    icon: Users,
    title: '100% Human-Crafted Expert Designers',
    description: 'Handcrafted by professional signature designers, not AI-generated. Every signature is meticulously crafted to reflect your unique personality and professional image.',
    image: PlaceHolderImages.find(p => p.id === 'sig-1'),
  },
  {
    icon: Award,
    title: 'Professional Impact Career-Focused',
    description: 'Built to enhance your professional image across all documents. From contracts to emails, make every signature count in your career advancement.',
    image: PlaceHolderImages.find(p => p.id === 'sig-2'),
  },
  {
    icon: Eye,
    title: 'Perfectly Balanced Elegant & Readable',
    description: 'Perfect balance of aesthetics and readability for maximum impact. Beautiful enough to impress, clear enough to be legally recognized.',
    image: PlaceHolderImages.find(p => p.id === 'sig-3'),
  },
  {
    icon: Fingerprint,
    title: 'Instant Access Digital Delivery',
    description: 'Instant delivery ready to use on all your devices. Compatible with all major platforms and document signing software.',
    image: PlaceHolderImages.find(p => p.id === 'sig-4'),
  },
  {
    icon: PenTool,
    title: 'Personalized Service Personal Attention',
    description: 'One-on-one attention ensuring your signature reflects your personality. We work with you until you\'re completely satisfied with the result.',
    image: PlaceHolderImages.find(p => p.id === 'hero-signature'),
  },
];

export default function WhyUsSection() {
  return (
    <section className="py-10 bg-accent/20 relative overflow-hidden">
        <PenTool className="absolute -left-12 -top-12 h-64 w-64 text-foreground/5 rotate-12" />
        <Award className="absolute -right-12 bottom-12 h-72 w-72 text-foreground/5 -rotate-12" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Why Choose Us</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Professional signature design that elevates your personal brand and makes a lasting impression
          </p>
        </div>
        <div className="space-y-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-4 md:gap-8 items-center`}
            >
              <div className={index % 2 !== 0 ? 'md:order-last' : ''}>
                <div className="mb-2 flex items-center gap-4">
                    <div className="bg-primary/10 text-primary p-3 rounded-full">
                        <feature.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-headline font-bold">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground text-lg">{feature.description}</p>
              </div>
              
              {feature.image && (
                <div className={`aspect-video relative rounded-lg shadow-xl overflow-hidden`}>
                  <Image
                    src={feature.image.imageUrl}
                    alt={feature.title}
                    fill
                    className="object-cover"
                    data-ai-hint={feature.image.imageHint}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
         <div className="text-center mt-8">
          <h3 className="text-2xl font-headline mb-2">Ready to Elevate Your Professional Image?</h3>
          <p className="text-muted-foreground mb-3 max-w-2xl mx-auto">Join thousands of professionals who have transformed their personal brand with our signature design service</p>
          <Button size="lg" className="h-14 text-lg bg-accent text-accent-foreground hover:bg-accent/90">Get Your Signature Design</Button>
        </div>
      </div>
    </section>
  );
}
