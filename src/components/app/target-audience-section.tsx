

import { GraduationCap, Briefcase, Paintbrush, UserCheck, UserPlus, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '../ui/button';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const audiences = [
  {
    icon: GraduationCap,
    title: 'Students & Freshers',
    description: 'Make a strong first impression on job applications and internships. A professional signature sets you apart from the crowd and shows you mean business from day one.',
  },
  {
    icon: Briefcase,
    title: 'Business Owners',
    description: 'Elevate your brand with a signature that exudes authority and professionalism. Perfect for contracts, client communication, and marketing materials.',
  },
  {
    icon: UserCheck,
    title: 'Working Professionals',
    description: 'Upgrade your personal brand and command respect in every interaction. A designer signature enhances your credibility on reports, emails, and internal documents.',
  },
  {
    icon: Paintbrush,
    title: 'Creatives & Freelancers',
    description: 'Showcase your unique style and attention to detail. A custom signature adds a memorable and artistic touch to your portfolio, invoices, and client work.',
  },
   {
    icon: UserPlus,
    title: 'Anyone Tired of Basic Signatures',
    description: 'If your current signature is inconsistent, illegible, or just plain boring, it\'s time for an upgrade. A handcrafted signature is an investment in your personal brand.',
  },
];

export default function TargetAudienceSection() {
  return (
    <section className="py-10 bg-accent/20 relative overflow-hidden">
        <Users className="absolute -right-24 bottom-0 h-96 w-96 text-foreground/5" />
      <div className="container mx-auto px-4 relative z-10 max-w-3xl">
        <div className="text-center mb-6">
            <p className="text-accent font-semibold">Perfect For</p>
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Who Is This For?</h2>
          <p className="text-muted-foreground mt-2">Professional signature design for everyone who wants to make their mark</p>
        </div>
        <div className="border-t">
          {audiences.map((audience, index) => (
             <Accordion key={index} type="single" collapsible className="w-full border-b">
              <AccordionItem value={`item-${index}`} className="border-none">
                <AccordionTrigger className="p-3 text-left hover:no-underline relative">
                  <div className="flex items-center gap-4">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 h-2/3 w-1 bg-accent rounded-full"></div>
                    <audience.icon className="h-6 w-6 text-accent flex-shrink-0 ml-4" />
                    <span className="font-semibold text-lg">{audience.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-16 pr-6 pb-3 pt-0">
                  <p className="text-muted-foreground">{audience.description}</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
        <div className="text-center mt-6">
            <h3 className="text-2xl font-headline mb-2">Ready to Create Your Perfect Signature?</h3>
            <p className="text-muted-foreground mb-3 max-w-xl mx-auto">Join thousands of professionals who've transformed their image with a custom signature</p>
            <Link href="/checkout" passHref>
              <Button size="lg" className="h-14 text-lg bg-accent text-accent-foreground hover:bg-accent/90 shine-effect">Get Started Today</Button>
            </Link>
        </div>
      </div>
    </section>
  );
}
