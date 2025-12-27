import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function PoliciesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const policies = [
    { name: 'Shipping and Delivery', href: '/policies/shipping' },
    { name: 'Refund', href: '/policies/refund' },
    { name: 'Revision', href: '/policies/revision' },
    { name: 'Cancellation', href: '/policies/cancellation' },
    { name: 'Privacy', href: '/policies/privacy' },
    { name: 'Terms & Conditions', href: '/policies/terms' },
    { name: 'Support', href: '/policies/support' },
  ];

  return (
    <div className="bg-muted/40 min-h-screen">
      <header className="bg-background border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
           <Link href="/" passHref>
             <Button variant="ghost" size="icon" aria-label="Back to Home">
                <ArrowLeft className="h-5 w-5" />
             </Button>
            </Link>
          <h1 className="text-xl font-headline font-bold">The Signature Studio</h1>
           <div className="w-10"></div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-8">
          <aside className="md:col-span-1">
             <Card className="sticky top-24">
                <CardHeader>
                    <CardTitle className="text-lg font-headline">Policies</CardTitle>
                </CardHeader>
                <CardContent>
                    <nav className="flex flex-col space-y-2">
                        {policies.map((policy) => (
                            <Link key={policy.name} href={policy.href} passHref>
                               <Button variant="ghost" className="justify-start">
                                {policy.name}
                               </Button>
                            </Link>
                        ))}
                    </nav>
                </CardContent>
             </Card>
          </aside>
          <div className="md:col-span-3">
            {children}
          </div>
        </div>
      </main>
      <footer className="w-full py-6 border-t bg-background">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} The Signature Studio. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
