
'use client';

import { Button } from '@/components/ui/button';
import { FileText, Brush, Check, Download } from 'lucide-react';

const steps = [
    {
        step: 1,
        icon: FileText,
        title: "Share Your Details",
        description: "Share your name, and style preferences.",
    },
    {
        step: 2,
        icon: Brush,
        title: "Designer Analysis",
        description: "We study your name's unique flow.",
    },
    {
        step: 3,
        icon: Check,
        title: "Crafting Your Options",
        description: "Our calligraphy experts get to work crafting three signature styles.",
    },
    {
        step: 4,
        icon: Download,
        title: "Receive Your Package",
        description: "Receive high-resolution formats delivered to your email.",
    }
]

export default function HowItWorksSection() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-headline font-bold">Your Signature in 4 Simple Steps</h2>
                    <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">A simple process. Stunning results.</p>
                </div>
                
                <div className="relative">
                    {/* The connecting line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block"></div>

                    {steps.map((step, index) => (
                        <div key={step.step} className="relative mb-12 md:mb-20 flex flex-col md:flex-row items-center justify-center">
                            {/* Content */}
                            <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'} text-center`}>
                                <h3 className="text-2xl font-headline font-bold mb-2">{step.title}</h3>
                                <p className="text-muted-foreground">{step.description}</p>
                            </div>
                            
                            {/* Icon & Number */}
                            <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center bg-background z-10 my-4 md:my-0">
                                <div className="flex items-center justify-center w-20 h-20 bg-primary text-primary-foreground rounded-full border-4 border-background">
                                    <step.icon className="w-8 h-8" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <Button
                        size="lg"
                        className="h-14 text-base md:text-lg min-w-[280px] bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all shine-effect"
                        style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}
                    >
                        Start My Signature (50% Off)
                    </Button>
                </div>
            </div>
        </section>
    )
}
