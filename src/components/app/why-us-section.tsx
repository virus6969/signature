import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Award, PenTool, Users, Eye, Fingerprint } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Expert Designers, Not AI',
    description: 'Your signature is crafted by real calligraphers who understand the art of lettering and personal branding.',
    image: PlaceHolderImages.find(p => p.id === 'sig-1'),
  },
  {
    icon: Award,
    title: 'Career-Focused Designs',
    description: 'We create signatures meant for professional documents, contracts, and presentations where your image matters.',
    image: PlaceHolderImages.find(p => p.id === 'sig-2'),
  },
  {
    icon: Eye,
    title: 'Elegant & Readable',
    description: 'Our designs strike the perfect balance between unique artistic style and professional legibility.',
    image: PlaceHolderImages.find(p => p.id === 'sig-3'),
  },
  {
    icon: Fingerprint,
    title: 'Personal Attention',
    description: 'Your signature is tailored to the unique flow and character of your name, ensuring a truly personal mark.',
    image: PlaceHolderImages.find(p => p.id === 'sig-4'),
  }
];

export default function WhyUsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Why Choose Us?</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            We blend artistry with professionalism to create a signature that is uniquely yours.
          </p>
        </div>
        <div className="space-y-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center ${
                index % 2 !== 0 ? 'md:grid-flow-col-dense' : ''
              }`}
            >
              <div className={index % 2 !== 0 ? 'md:col-start-2' : ''}>
                <div className="mb-4 flex items-center gap-4">
                    <div className="bg-primary/10 text-primary p-3 rounded-full">
                        <feature.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-headline font-bold">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground text-lg">{feature.description}</p>
              </div>
              
              {feature.image && (
                <div className={`aspect-video relative rounded-lg shadow-xl overflow-hidden ${index % 2 !== 0 ? 'md:col-start-1' : ''}`}>
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
      </div>
    </section>
  );
}
