'use client';

import { Button } from '@/components/ui/button';

const steps = [
    {
        step: 1,
        title: "Submit Your Style",
        description: "Fill out a quick form with your name and style preferences. Takes 2 minutes.",
    },
    {
        step: 2,
        title: "We Design",
        description: "Our calligraphers create 3 signature options based on your unique personality.",
    },
    {
        step: 3,
        title: "You Choose",
        description: "Review designs and pick your favorite. Request unlimited revisions if needed.",
    },
    {
        step: 4,
        title: "Master Your Signature",
        description: "Download your signature in all formats and start using it everywhere.",
    }
]

export default function HowItWorksSection() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-headline font-bold">How It Works</h2>
                    <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">A simple, four-step process to get your perfect signature, designed by professionals.</p>
                </div>
                
                <div className="max-w-2xl mx-auto">
                    <div className="space-y-8">
                        {steps.map((step) => (
                            <div key={step.step} className="flex items-start gap-4">
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
                </div>

                <div className="text-center mt-16">
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
