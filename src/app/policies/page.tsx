import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, ShieldCheck, Truck, RotateCcw, Ban, Info, LifeBuoy } from 'lucide-react';
import Link from 'next/link';

const policies = [
  { name: 'Shipping and Delivery', href: '/shipping', icon: Truck },
  { name: 'Refund Policy', href: '/refund', icon: Info },
  { name: 'Revision Policy', href: '/revision', icon: RotateCcw },
  { name: 'Cancellation Policy', href: '/cancellation', icon: Ban },
  { name: 'Privacy Policy', href: '/privacy', icon: ShieldCheck },
  { name: 'Terms & Conditions', href: '/terms', icon: FileText },
  { name: 'Support Policy', href: '/support', icon: LifeBuoy },
];

export default function PoliciesPage() {
  return (
    <Card>
      <CardHeader>
        <div className="text-center">
            <p className="text-sm text-muted-foreground">Updated • {new Date().toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' })}</p>
            <CardTitle className="text-3xl font-headline mt-2">The Signature Studio • Policies & Terms</CardTitle>
            <CardDescription className="mt-2 max-w-2xl mx-auto">
                Please review our policies regarding delivery, refunds, revisions, cancellations, privacy, and support.
            </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {policies.map((policy) => (
          <Link key={policy.name} href={policy.href} passHref>
             <Card className="h-full hover:shadow-lg hover:-translate-y-1 transition-transform cursor-pointer">
                <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                    <div className="bg-primary/10 p-3 rounded-full">
                        <policy.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg font-headline">{policy.name}</CardTitle>
                </CardHeader>
             </Card>
          </Link>
        ))}
      </CardContent>
    </Card>
  );
}
