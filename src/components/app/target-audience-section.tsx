import { GraduationCap, Briefcase, Paintbrush, UserCheck, UserPlus } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const audiences = [
  {
    icon: GraduationCap,
    title: 'Students & Freshers',
    description: 'Start your career with a signature that commands respect.',
    className: 'md:col-span-2',
  },
  {
    icon: Briefcase,
    title: 'Business Owners',
    description: 'Close deals with confidence and a professional mark.',
    className: 'md:col-span-1',
  },
  {
    icon: UserCheck,
    title: 'Working Professionals',
    description: 'Elevate your daily communications and documents.',
    className: 'md:col-span-1',
  },
  {
    icon: Paintbrush,
    title: 'Creatives',
    description: 'A signature that reflects your unique artistic identity.',
    className: 'md:col-span-2',
  },
   {
    icon: UserPlus,
    title: 'Anyone Tired of Basic Signatures',
    description: 'Ready for an upgrade? We craft signatures that make an impact.',
    className: 'md:col-span-3',
  },
];

export default function TargetAudienceSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Who Is This For?</h2>
          <p className="text-muted-foreground mt-2">Our handcrafted signatures are designed for anyone ready to make a statement.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {audiences.map((audience) => (
            <Card key={audience.title} className={`${audience.className} bg-card/50 shadow-md hover:shadow-lg transition-shadow`}>
              <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
                <div className="bg-primary/10 text-primary p-3 rounded-full">
                    <audience.icon className="w-6 h-6" />
                </div>
                <CardTitle>{audience.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{audience.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
