
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import TestimonialsSection from '@/components/app/testimonials-section';
import Footer from '@/components/app/footer';
import { FileSignature, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const BASE_PRICE = 1;
const ADDON_PRICE = 0;
const ORIGINAL_TOTAL = 99;
const DISCOUNT = 98;

const BACKEND_URL = 'https://razorpay-signature-app.onrender.com';

export default function CheckoutPage() {
  const [isAddonSelected, setIsAddonSelected] = useState(false);
  const [totalPrice, setTotalPrice] = useState(BASE_PRICE);
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    if (isAddonSelected) {
      setTotalPrice(BASE_PRICE + ADDON_PRICE);
    } else {
      setTotalPrice(BASE_PRICE);
    }
  }, [isAddonSelected]);
  
  const handleProceedToPayment = async () => {
    setIsProcessing(true);
    
    const customerDetails = {
      name: (document.getElementById('fullName') as HTMLInputElement)?.value,
      profession: (document.getElementById('profession') as HTMLInputElement)?.value,
      email: (document.getElementById('email') as HTMLInputElement)?.value,
      phone: (document.getElementById('phone') as HTMLInputElement)?.value,
      remarks: (document.getElementById('remarks') as HTMLTextAreaElement)?.value,
    };
    
    const selectedItemIds: string[] = ['PRO_SIGNATURE_DESIGN'];
    if (isAddonSelected) {
      selectedItemIds.push('ADDON_PRACTICE_SHEET');
    }

    if (!customerDetails.name || !customerDetails.profession || !customerDetails.phone || !customerDetails.email) {
        toast({
            title: "Missing Information",
            description: "Please fill out all required fields (*).",
            variant: "destructive",
        });
        setIsProcessing(false);
        return;
    }
    
    toast({
        title: "Initializing Payment...",
        description: "Please wait while we create your secure order.",
    });

    try {
        const orderResponse = await fetch(`${BACKEND_URL}/api/payment/cashfree/create-order`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ customerDetails, selectedItemIds })
        });

        const orderData = await orderResponse.json();
        
        if (!orderData.success) {
            throw new Error(orderData.error || 'Backend order creation failed');
        }

        const cashfree = (window as any).cashfree;
        if (!cashfree) {
          console.error("Cashfree SDK not loaded");
           toast({
              title: "Error Initializing Payment",
              description: "Could not load payment library.",
              variant: "destructive"
          });
          setIsProcessing(false);
          return;
        }

        cashfree.checkout({
          paymentSessionId: orderData.payment_session_id,
          redirectTarget: "_self",
        });

    } catch (error: any) {
        console.error('Payment error:', error);
        toast({
            title: "Error Initiating Payment",
            description: error.message || "Could not connect to payment gateway.",
            variant: "destructive"
        });
        setIsProcessing(false);
    }
  };


  return (
    <div className="bg-background overflow-x-hidden" id="checkout-top">
      <main className="container mx-auto px-4 py-8 relative">
        <FileSignature className="absolute -left-24 top-1/4 h-96 w-96 text-foreground/5" />
        <FileSignature className="absolute -right-24 bottom-1/4 h-96 w-96 text-foreground/5" />
        <div className="text-center mb-8 relative z-10">
          <h1 className="text-4xl font-headline font-bold">Your Signature Cart</h1>
          <p className="text-muted-foreground mt-2">
            Review your selected signature design and prepare for your professional journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start relative z-10">
          {/* Left Column: Cart & Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Main Product */}
            <Card className="overflow-hidden shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl font-headline">
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
             <Card 
              className={`relative overflow-hidden shadow-lg cursor-pointer transition-all duration-300 bg-accent/10 ${isAddonSelected ? 'border-accent ring-2 ring-accent' : 'border-border'}`}
              onClick={() => setIsAddonSelected(!isAddonSelected)}
            >
              <div className="absolute top-0 right-0 h-24 w-24 overflow-hidden z-10">
                <div className="absolute transform rotate-45 bg-accent text-accent-foreground text-xs font-bold text-center py-1 right-[-25px] top-[22px] w-[120px] shadow-md">
                    93% Opted-In
                </div>
              </div>
                <CardHeader>
                    <CardTitle className="text-lg font-headline flex items-center justify-between">
                        <span>Want to master your new signature perfectly?</span>
                    </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                    <div>
                        <p className="text-sm text-muted-foreground">
                            Add a printable sheet with your signature traced & outlined — just like handwriting practice sheets.
                        </p>
                        <ul className="text-xs text-muted-foreground list-disc pl-5 mt-2 space-y-1">
                            <li>Light grey version for trace-over</li>
                            <li>Lined version for repeat practice</li>
                            <li>Adds premium feel for very little effort</li>
                        </ul>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center gap-2">
                             <Checkbox
                                id="add-on-checkbox"
                                checked={isAddonSelected}
                                onCheckedChange={(checked) => setIsAddonSelected(!!checked)}
                                aria-label="Toggle signature practice sheet add-on"
                            />
                            <Label htmlFor="add-on-checkbox" className="font-bold cursor-pointer">Add to Cart</Label>
                        </div>
                        <div className="text-right">
                            <p className="text-lg font-bold">₹{ADDON_PRICE}</p>
                            <p className="text-sm text-muted-foreground line-through">₹499</p>
                        </div>
                    </div>
                </CardContent>
            </Card>


            {/* User Details Form */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Your Details</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Please provide your information for personalized signature design
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                   <div>
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input id="fullName" placeholder="Enter your full name" required />
                  </div>
                  <div>
                    <Label htmlFor="profession">Profession *</Label>
                    <Input id="profession" placeholder="Enter your profession" required />
                  </div>
                </div>
                 <div className="grid md:grid-cols-2 gap-4">
                   <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="Enter your email address" required/>
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" type="tel" placeholder="Enter your phone number" required />
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
          <div className="lg:sticky top-24" id="order-summary">
            <Card className="shadow-2xl border-2 border-accent">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <p>Pro Signature</p>
                  <p className="font-medium">₹{BASE_PRICE}</p>
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
                <Button 
                  size="lg" 
                  className="w-full h-12 text-lg bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shine-effect"
                  onClick={handleProceedToPayment}
                  disabled={isProcessing}
                >
                  {isProcessing ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                  {isProcessing ? 'Processing...' : `Proceed to Payment - ₹${totalPrice}`}
                </Button>
                 <p className="text-xs text-muted-foreground text-center">Secure One-Time Payment • SSL Protected</p>
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
