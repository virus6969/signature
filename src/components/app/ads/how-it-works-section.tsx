
'use client';

import { Button } from '@/components/ui/button';

const steps = [
    {
        step: 1,
        title: "Tell Us What You Like",
        description: "Share your name, initials, and preferred style — elegant, bold, modern, minimal, artistic, or anything in between.",
    },
    {
        step: 2,
        title: "We Design 3 Signature Concepts",
        description: "Our calligraphy experts craft three signature styles made exclusively for you.",
    },
    {
        step: 3,
        title: "You Pick Your Favorite",
        description: "Need changes? Want it sharper, bolder, cleaner? Ask for unlimited tweaks — free.",
    },
    {
        step: 4,
        title: "Download Your Final Signature",
        description: "Receive high-resolution formats ready for digital use, printing, or even animation.",
    }
]

export default function HowItWorksSection() {
    return (
        <section className="py-10">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-headline font-bold">How It Works</h2>
                    <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">A simple process. Stunning results.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 max-w-4xl mx-auto">
                    {steps.map((step) => (
                        <div key={step.step} className="flex items-start gap-6">
                            <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-full text-primary-foreground font-bold text-2xl flex-shrink-0">
                                {step.step}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-1">{step.title}</h3>
                                <p className="text-muted-foreground">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <Button
                        size="lg"
                        className="h-14 text-base md:text-lg min-w-[280px] bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all animate-jiggle"
                        style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}
                    >
                        Start My Signature (50% Off)
                    </Button>
                </div>
            </div>
        </section>
    )
}
