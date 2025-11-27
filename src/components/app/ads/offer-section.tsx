import { Gem, Film, PencilRuler, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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
        <section className="py-20 bg-accent/5">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-headline font-bold">What You'll Receive</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {offers.map((offer, index) => (
                        <Card key={index} className="flex flex-col items-center text-center p-6 shadow-md hover:shadow-xl transition-shadow">
                            <CardHeader className="p-0">
                                <div className="bg-primary/10 text-primary p-4 rounded-full mb-4">
                                    <offer.icon className="w-8 h-8" />
                                </div>
                                <CardTitle>{offer.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="p-0 mt-2">
                                <p className="text-muted-foreground">{offer.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
