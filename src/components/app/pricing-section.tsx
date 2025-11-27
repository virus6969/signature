import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

const features = [
  "3 Designer Signature Options",
  "Video Writing Tutorial",
  "Printable Practice Sheets",
  "24-48 Hour Delivery",
  "Unlimited Revisions",
  "High-Resolution Digital Files (PNG & SVG)",
];

export default function PricingSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-8">
            <p className="text-accent font-semibold">Only 7 Spots Available This Week</p>
            <h2 className="text-3xl md:text-4xl font-headline font-bold mt-2">Become Unforgettable</h2>
        </div>
        <Card className="shadow-2xl border-2 border-accent rounded-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-headline">The Complete Package</CardTitle>
            <CardDescription>Everything you need to elevate your brand.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
                <span className="text-4xl font-bold font-headline">$49</span>
                <span className="text-muted-foreground line-through ml-2">$98</span>
            </div>
            <ul className="space-y-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <div className="bg-green-500 text-white rounded-full p-1">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-foreground/80">{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button size="lg" className="w-full h-12 text-lg bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shine-effect">
              Claim Your Spot
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
