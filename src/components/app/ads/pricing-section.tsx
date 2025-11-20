import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

const pricingTiers = [
  {
    name: 'Standard',
    price: '$99',
    originalPrice: '$200',
    features: [
      '3 signature options',
      '3 edits',
      'Personalized video tutorial',
      'Personalized training stencil',
      'SVG/PNG for e-signature',
      'Money-back guarantee',
    ],
    popular: false,
  },
  {
    name: 'Optimal',
    price: '$249',
    originalPrice: '$500',
    features: [
      '10 signature options',
      'Unlimited edits',
      'Personalized video tutorial',
      'Personalized training stencil',
      'SVG/PNG for e-signature',
      'Handwriting cursive stencil',
      'Money-back guarantee',
    ],
    popular: true,
  },
  {
    name: 'Premier',
    price: '$500',
    originalPrice: '',
    features: [
      'Unlimited options',
      'Unlimited edits',
      'Personalized video tutorial',
      'Personalized training stencil',
      'SVG/PNG for e-signature',
      'Handwriting cursive stencil',
      'Copyright transfer agreement',
      'Money-back guarantee',
    ],
    popular: false,
  },
];

export default function PricingSection() {
  return (
    <section className="bg-card py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-headline text-center font-bold mb-4">Choose Your Plan</h2>
        <p className="text-muted-foreground text-center mb-12">
          Invest in your professional image with a signature that stands out.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {pricingTiers.map((tier) => (
            <Card key={tier.name} className={`flex flex-col h-full ${tier.popular ? 'border-primary ring-2 ring-primary' : ''}`}>
              <CardHeader>
                {tier.popular && <p className="text-primary font-semibold text-sm mb-2">MOST POPULAR</p>}
                <CardTitle>{tier.name}</CardTitle>
                <CardDescription>
                  <span className="text-4xl font-bold">{tier.price}</span>
                  {tier.originalPrice && <span className="line-through text-muted-foreground ml-2">{tier.originalPrice}</span>}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={tier.popular ? 'default' : 'secondary'}>
                  Order Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
