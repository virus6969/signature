
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

const features = [
  "Handcrafted by expert designers",
  "One-time payment, lifetime value",
  "Full package with tutorials included",
];

export default function PricingSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-headline font-bold mt-2">Become Unforgettable</h2>
            <p className="text-muted-foreground mt-2 max-w-xl mx-auto">Your signature is the most personal piece of your brand. Don't settle for average. Invest in an identity that makes a lasting impression.</p>
        </div>
        <Card className="shadow-2xl border-2 border-accent rounded-xl overflow-hidden">
           <div className="p-2 bg-accent text-center text-sm font-semibold text-accent-foreground">
             Limited Weekly Slots: Only 7 Spots Available This Week
           </div>
          <CardHeader className="text-center pb-2">
            <CardTitle className="text-4xl font-headline">
                <span className="text-muted-foreground line-through mr-2 font-normal">₹4,999</span>
                <span>₹489</span>
            </CardTitle>
            <CardDescription>We limit our client intake to ensure every signature receives the personal attention and quality craftsmanship it deserves.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="space-y-3 pt-4 border-t">
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
          <CardFooter className="flex-col gap-2">
            <Button size="lg" className="w-full h-12 text-lg bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
              Secure Your Spot Now
            </Button>
            <p className="text-xs text-muted-foreground">Secure One-Time Payment • SSL Protected</p>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
