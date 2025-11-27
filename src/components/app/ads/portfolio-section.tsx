import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const portfolioSignatures = [
    { id: 'sig-1', description: "Elegant Flowing Style – Priya Sharma" },
    { id: 'sig-2', description: "Bold Modern Style – Rahul Verma" },
    { id: 'sig-3', description: "Minimal Clean Style – Anjali Gupta" },
    { id: 'sig-4', description: "Artistic Luxury Style – Rohan Mehta" }
]

export default function PortfolioSection() {
  const portfolioImages = portfolioSignatures.map(sig => {
      const img = PlaceHolderImages.find(pImg => pImg.id === sig.id);
      return { ...sig, ...img };
  });

  return (
    <section className="pt-4 pb-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-headline text-center font-bold mb-6">Our Work Speaks for Itself</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {portfolioImages.map(image => (
            <Card key={image.id} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video relative">
                  <Image
                    src={image.imageUrl || `https://picsum.photos/seed/${image.id}/600/400`}
                    alt={image.description}
                    fill
                    className="object-cover"
                    data-ai-hint={image.imageHint}
                  />
                </div>
                <div className="p-4 bg-card">
                  <p className="text-muted-foreground text-sm">{image.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
         <div className="mt-6 text-center">
            <Button
                size="lg"
                className="h-14 text-base md:text-lg min-w-[280px] bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all shine-effect"
                style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}
            >
                Create My Signature (50% Off)
            </Button>
        </div>
      </div>
    </section>
  );
}
