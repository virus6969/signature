import { PenSquare } from 'lucide-react';
import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AdHeader() {
  return (
    <header className="w-full p-4 border-b bg-background sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/ads" className="flex items-center gap-2">
            <PenSquare className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-headline font-bold text-foreground">
            SignaGenius
            </h1>
        </Link>
        <Button className="bg-orange-500 hover:bg-orange-600 text-white animate-jiggle">Get Your Signature</Button>
      </div>
    </header>
  );
}
