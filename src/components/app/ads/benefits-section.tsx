import { Award, Clock, Download, RefreshCw, PenTool } from 'lucide-react';
import { Button } from '@/components/ui/button';

const benefits = [
    {
        icon: PenTool,
        title: "Professional Brand Identity",
        description: "Stand out in business correspondence. Your signature becomes your personal brand mark that clients remember."
    },
    {
        icon: Clock,
        title: "Done in 24 Hours",
        description: "Fast turnaround. Submit your style preferences and receive your custom signature within 24 hours."
    },
    {
        icon: RefreshCw,
        title: "Unlimited Revisions",
        description: "Perfection guaranteed. We refine your signature until you're 100% satisfied—no extra charges."
    },
    {
        icon: Download,
        title: "Digital & Print Ready",
        description: "Use everywhere. Get formats for email signatures, PDFs, contracts, and physical documents."
    },
    {
        icon: Award,
        title: "Professional Calligraphers",
        description: "Expert craftsmanship. Designed by professional calligraphers with 10+ years of experience."
    }
]


export default function BenefitsSection() {
    return (
        <section className="py-20 bg-muted/50">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-headline font-bold">Why Choose SignaGenius?</h2>
                    <p className="text-muted-foreground mt-2">Everything you need to elevate your professional image.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="flex flex-col items-center text-center p-6">
                            <div className="bg-primary/10 text-primary p-4 rounded-full mb-4">
                                <benefit.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                            <p className="text-muted-foreground">{benefit.description}</p>
                        </div>
                    ))}
                </div>
                 <div className="mt-12 text-center">
                    <Button
                        size="lg"
                        className="h-14 text-base md:text-lg min-w-[280px] bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all animate-jiggle"
                        style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}
                    >
                        Create My Signature - 50% Off
                    </Button>
                </div>
            </div>
        </section>
    )
}
