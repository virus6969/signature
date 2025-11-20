import { PenSquare } from 'lucide-react';
import React from 'react';

export default function Header() {
  return (
    <header className="w-full p-4 border-b">
      <div className="container mx-auto flex items-center gap-2">
        <PenSquare className="h-8 w-8 text-primary" />
        <h1 className="text-2xl font-headline font-bold text-foreground">
          SignaGenius
        </h1>
      </div>
    </header>
  );
}
