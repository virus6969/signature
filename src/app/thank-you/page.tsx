'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, PartyPopper } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function ThankYouPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4">
      <main className="max-w-2xl w-full text-center">
        <Card className="shadow-2xl border-2 border-green-500">
            <CardHeader className="items-center">
                <div className="bg-green-500 text-white rounded-full p-3 mb-4">
                    <CheckCircle className="h-10 w-10" />
                </div>
                <CardTitle className="text-3xl font-headline font-bold">Payment Successful!</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <p className="text-lg text-muted-foreground">
                    Thank you for your order. We've received your payment and our designers are getting ready to craft your perfect signature.
                </p>
                <div className="bg-accent/10 p-4 rounded-lg text-left space-y-2">
                    <h3 className="font-semibold text-foreground">What Happens Next?</h3>
                    <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                        <li>You will receive an order confirmation email shortly.</li>
                        <li>Our design team will begin crafting your unique signature concepts.</li>
                        <li>Expect your signature package to be delivered to your email within <strong>24-48 hours</strong>.</li>
                    </ul>
                </div>
                <p className="text-sm text-muted-foreground pt-2">
                    If you have any questions, please don't hesitate to contact our support team.
                </p>
                <div className="pt-4">
                    <Link href="/" passHref>
                        <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                            <PartyPopper className="mr-2 h-5 w-5" />
                            Explore More
                        </Button>
                    </Link>
                </div>
            </CardContent>
        </Card>
      </main>
    </div>
  );
}
