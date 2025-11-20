import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export default function PortfolioSection() {
  const portfolioImages = PlaceHolderImages.filter(img => img.id.startsWith('sig-'));

  return (
    <section className="py-16">
      <div className="container mx-auto">
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
      </div>
    </section>
  );
}
