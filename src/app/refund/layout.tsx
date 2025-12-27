import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function PoliciesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
        <div className="max-w-4xl mx-auto">
            {children}
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
