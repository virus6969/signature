
'use client'

import { PenSquare } from 'lucide-react';
import React from 'react';
import { Button } from '../ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet"
import { DialogTitle } from '@radix-ui/react-dialog';


const navLinks = [
    { href: "#how-it-works", label: "How It Works" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#pricing", label: "Pricing" },
    { href: "#contact", label: "Contact" },
]

export default function Header() {
  const isMobile = useIsMobile();

  return (
    <header className="w-full p-4 border-b bg-background/80 backdrop-blur-sm sticky top-0 z-40">
      <div className="container mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
            <PenSquare className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-headline font-bold text-foreground">
            Easy Soul
            </h1>
        </div>

        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
               <DialogTitle className="sr-only">Menu</DialogTitle>
              <nav className="flex flex-col gap-6 mt-16 text-lg">
                {navLinks.map(link => (
                    <SheetClose asChild key={link.href}>
                      <a href={link.href} className="font-medium hover:text-accent transition-colors">
                          {link.label}
                      </a>
                    </SheetClose>
                ))}
                <SheetClose asChild>
                  <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 mt-4">
                    Get Started
                  </Button>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        ) : (
          <nav className="flex items-center gap-6">
            {navLinks.map(link => (
                <a key={link.href} href={link.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                </a>
            ))}
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                Get Started
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
