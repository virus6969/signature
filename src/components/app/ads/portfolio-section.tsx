import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function PortfolioSection() {
  const portfolioImages = PlaceHolderImages.filter(img => img.id.startsWith('sig-'));

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-headline text-center font-bold mb-12">Our Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {portfolioImages.map(image => (
            <Card key={image.id} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video relative">
                  <Image
                    src={image.imageUrl}
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
         <div className="mt-12 text-center">
            <Button
                size="lg"
                className="h-14 text-base md:text-lg min-w-[280px] bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all animate-jiggle"
                style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}
            >
                Create My Signature - 50% Off
            </Button>
        </div>
      </div>
    </section>
  );
}
