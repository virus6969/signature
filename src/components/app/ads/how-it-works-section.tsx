'use client';

import { Button } from '@/components/ui/button';
import { FileText, Palette, Smile, Download } from 'lucide-react';

const steps = [
    {
        step: 1,
        title: "Submit Your Style",
        description: "Fill out a quick form with your name and style preferences. Takes 2 minutes.",
        icon: FileText
    },
    {
        step: 2,
        title: "We Design",
        description: "Our calligraphers create 3 signature options based on your unique personality.",
        icon: Palette
    },
    {
        step: 3,
        title: "You Choose",
        description: "Review designs and pick your favorite. Request unlimited revisions if needed.",
        icon: Smile
    },
    {
        step: 4,
        title: "Master Your Signature",
        description: "Download your signature in all formats and start using it everywhere.",
        icon: Download
    }
]

export default function HowItWorksSection() {
    return (
        <section className="py-20">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-headline font-bold">How It Works</h2>
                    <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">A simple, four-step process to get your perfect signature, designed by professionals.</p>
                </div>
                <div className="relative">
                    {/* Dashed line for desktop */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 border-t-2 border-dashed border-border -translate-y-1/2" style={{top: '30px'}}></div>

                    <div className="relative grid grid-cols-1 md:grid-cols-4 gap-12">
                        {steps.map((step) => (
                            <div key={step.step} className="flex flex-col items-center text-center">
                                <div className="relative z-10 flex items-center justify-center w-[60px] h-[60px] bg-primary rounded-full text-primary-foreground font-bold text-2xl mb-6">
                                    <div className="absolute -top-8 text-primary">
                                        <step.icon className="w-7 h-7" />
                                    </div>
                                    {step.step}
                                </div>
                                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                <p className="text-muted-foreground text-sm">{step.description}</p>
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
