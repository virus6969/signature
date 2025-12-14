import { Gem, Film, PencilRuler, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const offers = [
    {
        icon: Gem,
        title: "3 Designer Options",
        description: "We provide 3 distinct signature styles for you to choose from."
    },
    {
        icon: Film,
        title: "Writing Tutorial",
        description: "Video guide on how to recreate your new signature."
    },
    {
        icon: PencilRuler,
        title: "Practice Sheets",
        description: "Printable sheets to practice your muscle memory."
    },
    {
        icon: Zap,
        title: "24-48hr Delivery",
        description: "Fast turnaround time for your urgent needs."
    },
]


export default function OfferSection() {
    return (
        <section className="py-10 bg-accent/20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-6">
                    <h2 className="text-3xl font-headline font-bold">What You'll Receive</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {offers.map((offer, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <div className="bg-primary/10 text-primary p-4 rounded-full mb-3">
                                <offer.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-headline font-semibold">{offer.title}</h3>
                            <p className="text-muted-foreground mt-1">{offer.description}</p>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-8">
                    <Link href="/checkout" passHref>
                        <Button
                            size="lg"
                            className="h-14 text-base md:text-lg min-w-[280px] bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all shine-effect"
                            style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}
                        >
                            Start My Signature (50% Off)
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
