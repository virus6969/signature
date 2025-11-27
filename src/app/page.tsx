
'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Star, Users, Calendar } from 'lucide-react';
import PortfolioSection from '@/components/app/portfolio-section';
import TestimonialsSection from '@/components/app/testimonials-section';
import FaqSection from '@/components/app/faq-section';
import HowItWorksSection from '@/components/app/how-it-works-section';
import BenefitsSection from '@/components/app/benefits-section';
import CountdownTimer from '@/components/app/countdown-timer';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import OfferBanner from '@/components/app/offer-banner';
import SocialProofToast from '@/components/app/social-proof-toast';
import ExitIntentPopup from '@/components/app/exit-intent-popup';
import OfferSection from '@/components/app/offer-section';
import WhyUsSection from '@/components/app/why-us-section';
import TargetAudienceSection from '@/components/app/target-audience-section';
import PricingSection from '@/components/app/pricing-section';

const POPUP_SESSION_KEY = 'signagenius_popup_shown';

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-signature');
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(POPUP_SESSION_KEY)) {
      return;
    }

    const timer = setTimeout(() => {
      setShowPopup(true);
      sessionStorage.setItem(POPUP_SESSION_KEY, 'true');
    }, 7000); // 7 seconds

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setShowPopup(true);
        sessionStorage.setItem(POPUP_SESSION_KEY, 'true');
        document.removeEventListener('mouseleave', handleMouseLeave);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SocialProofToast />
       <ExitIntentPopup open={showPopup} onOpenChange={setShowPopup} />
      <main className="flex-1 pb-24 md:pb-0">
        <OfferBanner />
        {/* Hero Section */}
        <section id="hero-section" className="bg-primary text-primary-foreground py-16 md:py-20">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-headline font-bold mb-4" style={{ lineHeight: 1.2 }}>
                ✨ Your Signature, Reinvented
              </h1>
              <h2 className="text-xl md:text-2xl font-body font-normal mb-6">
                  Turn Your Name Into a Stunning Brand Mark
              </h2>
              <p className="text-lg md:text-xl mb-6 md:mb-8 max-w-xl mx-auto md:mx-0">
                  A signature isn’t just handwriting; it’s your identity. We transform your name into a premium, handcrafted signature that makes you stand out.
              </p>
              <div className="relative inline-block">
                <Button 
                  size="lg" 
                  className="h-14 text-base md:text-lg min-w-[280px] bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
                  style={{boxShadow: '0 4px 12px rgba(0,0,0,0.15)'}}
                >
                  Get Your Signature Now
                </Button>
              </div>
              <p className="text-sm mt-4 text-primary-foreground/80">Crafted by Experts. Delivered in 24 Hours. Guaranteed to Impress.</p>
            </div>
            {heroImage && (
              <div className="mt-12 md:mt-0 max-w-md mx-auto md:max-w-none">
                <Image
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  width={600}
                  height={400}
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
                <p className="text-sm">5 Star Reviews</p>
              </div>
               <div className="flex flex-col items-center gap-2">
                <Calendar className="w-8 h-8 text-muted-foreground"/>
                <p className="text-4xl font-bold text-foreground">Since 2017</p>
                <p className="text-sm">Creating premium signatures</p>
              </div>
            </div>
          </div>
        </section>
        
        <OfferSection />
        <WhyUsSection />
        <HowItWorksSection />
        <TargetAudienceSection />
        <PortfolioSection />
        <TestimonialsSection />
        <PricingSection />
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
              className="flex-shrink-0 h-12 text-base bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-lg shadow-lg shine-effect"
            >
              Get Started
            </Button>
        </div>
      </div>
    </div>
  );
}
