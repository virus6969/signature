
'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Header from '@/components/app/header';
import TestimonialsSection from '@/components/app/testimonials-section';
import Footer from '@/components/app/footer';

const BASE_PRICE = 489;
const ADDON_PRICE = 199;
const ORIGINAL_TOTAL = 4999;
const DISCOUNT = 4510;

export default function CheckoutPage() {
  const [isAddonSelected, setIsAddonSelected] = useState(false);
  const [totalPrice, setTotalPrice] = useState(BASE_PRICE);

  useEffect(() => {
    if (isAddonSelected) {
      setTotalPrice(BASE_PRICE + ADDON_PRICE);
    } else {
      setTotalPrice(BASE_PRICE);
    }
  }, [isAddonSelected]);

  return (
    <div className="bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-headline font-bold">Your Signature Cart</h1>
          <p className="text-muted-foreground mt-2">
            Review your selected signature design and prepare for your professional journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left Column: Cart & Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Main Product */}
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="text-2xl">✍️</span>
                  Professional Signature Design
                </CardTitle>
              </CardHeader>
              <CardContent className="grid md:grid-cols-3 items-center gap-6">
                <div className="md:col-span-2">
                  <p className="font-semibold text-lg">Your Professional Signature Design</p>
                  <ul className="text-sm text-muted-foreground list-disc pl-5 mt-2 space-y-1">
                    <li>Multiple Style Variations</li>
                    <li>Digital & Print Ready Formats</li>
                    <li>Lifetime Usage Rights</li>
                    <li>24-48 hours delivery</li>
                  </ul>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold">₹{BASE_PRICE}</p>
                  <p className="text-muted-foreground line-through">₹{ORIGINAL_TOTAL}</p>
                </div>
              </CardContent>
            </Card>

            {/* Add-on */}
            <div className="relative overflow-hidden">
              <div className="absolute top-2 -right-11 text-center bg-accent text-accent-foreground font-bold text-sm py-1 px-10 transform rotate-45 z-10">
                93% of people opted for this
              </div>
              <Card className="bg-accent/10 border-accent">
                  <CardContent className="p-4 flex items-start gap-4">
                      <Checkbox id="add-on" className="mt-1" checked={isAddonSelected} onCheckedChange={(checked) => setIsAddonSelected(checked as boolean)} />
                      <div className="grid gap-1.5 flex-1">
                          <Label htmlFor="add-on" className="font-semibold text-lg flex items-center justify-between">
                              <span>✍️ Want to master your new signature perfectly?</span>
                               <div className="text-right">
                                  <p className="text-lg font-bold">₹{ADDON_PRICE}</p>
                                  <p className="text-sm text-muted-foreground line-through">₹499</p>
                              </div>
                          </Label>
                          <p className="text-sm text-muted-foreground">
                              Add a printable sheet with your signature traced & outlined — just like handwriting practice sheets.
                          </p>
                          <ul className="text-xs text-muted-foreground list-disc pl-5 mt-1">
                              <li>Light grey version for trace-over</li>
                              <li>Lined version for repeat practice</li>
                              <li>Adds premium feel for very little effort</li>
                          </ul>
                      </div>
                  </CardContent>
              </Card>
            </div>


            {/* User Details Form */}
            <Card>
              <CardHeader>
                <CardTitle>Your Details</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Please provide your information for personalized signature design
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                   <div>
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input id="fullName" placeholder="Enter your full name" />
                  </div>
                  <div>
                    <Label htmlFor="profession">Profession *</Label>
                    <Input id="profession" placeholder="Enter your profession" />
                  </div>
                </div>
                 <div className="grid md:grid-cols-2 gap-4">
                   <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="Enter your email address" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" type="tel" placeholder="Enter your phone number" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="remarks">Special Remarks</Label>
                  <Textarea id="remarks" placeholder="Any specific requirements or remarks for your signature design..." />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:sticky top-24">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <p>Subtotal</p>
                  <p className="font-medium">₹{ORIGINAL_TOTAL}</p>
                </div>
                 {isAddonSelected && (
                  <div className="flex justify-between text-muted-foreground">
                    <p>Practice Sheet Add-on</p>
                    <p className="font-medium">₹{ADDON_PRICE}</p>
                  </div>
                )}
                <div className="flex justify-between text-green-600">
                  <p>Discount</p>
                  <p className="font-medium">-₹{DISCOUNT}</p>
                </div>
                <div className="border-t pt-4 flex justify-between font-bold text-lg">
                  <p>Total</p>
                  <p>₹{totalPrice}</p>
                </div>
                <Button size="lg" className="w-full h-12 text-lg bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                  Proceed to Payment - ₹{totalPrice}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <TestimonialsSection />
      <Footer />
    </div>
  );
}
