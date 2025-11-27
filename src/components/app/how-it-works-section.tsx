
'use client';

import { Button } from '@/components/ui/button';
import { FileText, Brush, Check, Download, FileSignature } from 'lucide-react';

const steps = [
    {
        step: 1,
        icon: FileText,
        title: "Share Your Details",
        description: "Start by placing your order and filling out a simple form with your name and style preferences.",
    },
    {
        step: 2,
        icon: Brush,
        title: "Designer Analysis",
        description: "Our experts study your name, professional field, and desired vibe to conceptualize the perfect designs.",
    },
    {
        step: 3,
        icon: Check,
        title: "Crafting Your Options",
        description: "We handcraft three unique, designer-style signature options that are tailored specifically to you.",
    },
    {
        step: 4,
        icon: Download,
        title: "Receive Your Package",
        description: "Your complete signature package, including tutorials and practice sheets, is delivered to your email in 24-48 hours.",
    }
]

export default function HowItWorksSection() {
    return (
        <section className="py-10 relative overflow-hidden">
            <FileSignature className="absolute -left-24 top-1/2 -translate-y-1/2 h-96 w-96 text-foreground/5" />
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-headline font-bold">Your Signature in 4 Simple Steps</h2>
                    <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">From order to delivery, our process is designed to be seamless, transparent, and efficient.</p>
                </div>
                
                <div className="grid md:grid-cols-4 gap-4">
                    {steps.map((step, index) => (
                        <div key={step.step} className="flex flex-col items-center text-center">
                            <div className="flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full border-4 border-background shadow-lg mb-2">
                                <span className="text-xl font-bold">{step.step}</span>
                            </div>
                            <h3 className="text-xl font-headline font-bold mb-1">{step.title}</h3>
                            <p className="text-muted-foreground">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
