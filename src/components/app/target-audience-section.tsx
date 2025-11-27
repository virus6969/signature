

import { GraduationCap, Briefcase, Paintbrush, UserCheck, UserPlus, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '../ui/button';

const audiences = [
  {
    icon: GraduationCap,
    title: 'Students & Freshers',
    description: 'Make a strong first impression with a professional signature that sets you apart from the crowd. Perfect for job applications, internships, and building your professional identity from day one.',
    className: 'md:col-span-2',
  },
  {
    icon: Briefcase,
    title: 'Business Owners',
    description: 'who want to stand out',
    className: 'md:col-span-1',
  },
  {
    icon: UserCheck,
    title: 'Working Professionals',
    description: 'upgrading their image',
    className: 'md:col-span-1',
  },
  {
    icon: Paintbrush,
    title: 'Creatives',
    description: 'who value aesthetics',
    className: 'md:col-span-2',
  },
   {
    icon: UserPlus,
    title: 'Anyone Tired of Basic Signatures',
    description: 'or inconsistent handwriting',
    className: 'md:col-span-3',
  },
];

export default function TargetAudienceSection() {
  return (
    <section className="py-10 bg-accent/20 relative overflow-hidden">
        <Users className="absolute -right-24 bottom-0 h-96 w-96 text-foreground/5" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-6">
            <p className="text-accent font-semibold">Perfect For</p>
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Who Is This For?</h2>
          <p className="text-muted-foreground mt-2">Professional signature design for everyone who wants to make their mark</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {audiences.map((audience) => (
            <Card key={audience.title} className={`${audience.className} bg-card/80 shadow-md hover:shadow-lg transition-shadow flex flex-col`}>
              <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
                <div className="bg-primary/10 text-primary p-3 rounded-full">
                    <audience.icon className="w-6 h-6" />
                </div>
                <CardTitle>{audience.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{audience.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-6">
            <h3 className="text-2xl font-headline mb-2">Ready to Create Your Perfect Signature?</h3>
            <p className="text-muted-foreground mb-3 max-w-xl mx-auto">Join thousands of professionals who've transformed their image with a custom signature</p>
            <Button size="lg" className="h-14 text-lg bg-accent text-accent-foreground hover:bg-accent/90">Get Started Today</Button>
        </div>
      </div>
    </section>
  );
}
