'use client';

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
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Invest in your professional image with a signature that stands out. All plans come with our 30-day money-back guarantee.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {pricingTiers.map((tier) => (
            <Card key={tier.name} className={`flex flex-col h-full transition-all duration-300 ${tier.popular ? 'border-primary ring-2 ring-primary scale-105 shadow-xl z-10' : 'shadow-md'}`}>
              <CardHeader className="text-center">
                {tier.popular && <p className="font-semibold text-sm mb-2 uppercase text-red-600 bg-red-100 py-1 px-4 rounded-full w-fit mx-auto">MOST POPULAR</p>}
                <CardTitle className="text-2xl">{tier.name}</CardTitle>
                <CardDescription className="flex flex-col items-center justify-center h-16">
                  <div>
                    <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                    {tier.originalPrice && <span className="text-lg line-through text-muted-foreground ml-2">{tier.originalPrice}</span>}
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-4">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-4">
                <Button 
                  className={`w-full text-lg font-semibold ${tier.popular ? 'h-14 bg-orange-500 hover:bg-orange-600 text-white' : 'h-12'}`} 
                  variant={tier.popular ? 'default' : 'secondary'}
                >
                  Order Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-10">
            <p className="text-muted-foreground text-sm">🔒 30-Day Money-Back Guarantee - Risk Free</p>
        </div>
      </div>
    </section>
  );
}
