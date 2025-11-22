
'use client';

import { useEffect, useState } from 'react';
import AdHeader from '@/components/app/ad-header';
import { Button } from '@/components/ui/button';
import { Star, Users, Calendar } from 'lucide-react';
import PortfolioSection from '@/components/app/ads/portfolio-section';
import TestimonialsSection from '@/components/app/ads/testimonials-section';
import FaqSection from '@/components/app/ads/faq-section';
import HowItWorksSection from '@/components/app/ads/how-it-works-section';
import BenefitsSection from '@/components/app/ads/benefits-section';
import CountdownTimer from '@/components/app/ads/countdown-timer';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

export default function AdsPage() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-signature');

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AdHeader />
      <main className="flex-1 pb-24 md:pb-0">
        {/* Hero Section */}
        <section id="hero-section" className="bg-primary text-primary-foreground text-center py-16 md:py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-5xl font-headline font-bold mb-4" style={{ lineHeight: 1.2 }}>
              ✨ SignaGenius™ — Your Signature, Reinvented
            </h1>
            <h2 className="text-xl md:text-2xl font-body font-normal mb-6">
                Turn Your Name Into a Stunning Personal Brand Mark
            </h2>
            <p className="text-lg md:text-xl mb-6 md:mb-8 max-w-xl mx-auto">
                A signature isn’t just handwriting — it’s identity, confidence, and presence. We transform your name into a premium, handcrafted signature designed by professional calligraphers so you stand out on every document, email, and contract.
            </p>
            <div className="relative inline-block">
              <Button 
                size="lg" 
                className="h-14 text-base md:text-lg min-w-[280px] bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all animate-jiggle"
                style={{boxShadow: '0 4px 12px rgba(0,0,0,0.15)'}}
              >
                Get Your Custom Signature — Now at 50% Off
              </Button>
            </div>
            <p className="text-sm mt-4 text-primary-foreground/80">Crafted by Experts. Delivered in 24 Hours. Guaranteed to Impress.</p>
            {heroImage && (
              <div className="mt-12 md:mt-16 max-w-4xl mx-auto">
                <Image
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  width={1200}
                  height={600}
                  className="rounded-lg shadow-2xl"
                  data-ai-hint={heroImage.imageHint}
                  priority
                />
              </div>
            )}
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto text-center px-4">
            <h2 className="text-2xl md:text-3xl font-headline font-bold mb-8">
              Trusted Worldwide
            </h2>
            <div className="flex justify-center items-center gap-6 md:gap-12 text-muted-foreground flex-wrap">
              <div className="flex flex-col items-center gap-2">
                <Users className="w-8 h-8 text-primary" />
                 <p className="text-4xl font-bold text-foreground">20,500+</p>
                <p className="text-sm">Clients Served</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
                <p className="text-4xl font-bold text-foreground">1,000+</p>
                <p className="text-sm">5-Star Reviews</p>
              </div>
               <div className="flex flex-col items-center gap-2">
                <Calendar className="w-8 h-8 text-muted-foreground"/>
                <p className="text-4xl font-bold text-foreground">Since 2017</p>
                <p className="text-sm">Creating premium signatures</p>
              </div>
            </div>
          </div>
        </section>
        
        <BenefitsSection />
        <HowItWorksSection />
        <PortfolioSection />
        <TestimonialsSection />
        <FaqSection />

      </main>

      {/* Sticky Mobile CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-background/90 backdrop-blur-sm p-2 border-t" style={{zIndex: 1000}}>
        <div className="container mx-auto flex items-center justify-between gap-4 px-4">
            <div className="flex-1 text-center">
                <CountdownTimer />
            </div>
            <Button 
              size="default" 
              className="flex-shrink-0 h-12 text-base bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-lg shadow-lg animate-jiggle"
            >
              Get My Signature (50% Off)
            </Button>
        </div>
      </div>
    </div>
  );
}
