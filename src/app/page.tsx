
'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Star, Users, Zap } from 'lucide-react';
import PortfolioSection from '@/components/app/portfolio-section';
import TestimonialsSection from '@/components/app/testimonials-section';
import FaqSection from '@/components/app/faq-section';
import HowItWorksSection from '@/components/app/how-it-works-section';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import OfferBanner from '@/components/app/offer-banner';
import SocialProofToast from '@/components/app/social-proof-toast';
import ExitIntentPopup from '@/components/app/exit-intent-popup';
import OfferSection from '@/components/app/offer-section';
import WhyUsSection from '@/components/app/why-us-section';
import TargetAudienceSection from '@/components/app/target-audience-section';
import PricingSection from '@/components/app/pricing-section';
import TransformationsSection from '@/components/app/transformations-section';
import Footer from '@/components/app/footer';
import Link from 'next/link';
import { LoadingProvider } from '@/components/app/loading-provider';
import * as fpixel from '@/lib/fpixel'

const POPUP_SESSION_KEY = 'signagenius_popup_shown';

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-signature');
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    fpixel.event('ViewContent')
  }, [])

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
    <LoadingProvider>
      <div className="flex flex-col min-h-screen bg-background">
        <SocialProofToast />
        <ExitIntentPopup open={showPopup} onOpenChange={setShowPopup} />
        <main id="main-content" className="flex-1 pb-12 md:pb-0">
          <OfferBanner />
          {/* Hero Section */}
          <section id="hero-section" className="bg-primary text-primary-foreground py-8 md:py-10">
            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
              <div className="text-center md:text-left">
                <p className="font-headline text-accent text-lg">Transform Your Identity</p>
                <h1 className="text-3xl md:text-5xl font-headline font-bold mb-2" style={{ lineHeight: 1.2 }}>
                  Craft Your Perfect Digital Signature
                </h1>
                <p className="text-lg md:text-xl mb-4 md:mb-4 max-w-xl mx-auto md:mx-0">
                    Elevate your personal brand with a handcrafted, designer signature that reflects your style, ambition, and profession.
                </p>
                <div className="relative inline-block mb-4">
                  <Link href="/checkout" passHref>
                    <Button 
                      size="lg" 
                      className="h-14 text-base md:text-lg min-w-[280px] bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all shine-effect"
                    >
                      Get Your Designer Signature
                    </Button>
                  </Link>
                </div>

                 <div className="flex justify-center md:justify-start items-center gap-6 md:gap-8 text-primary-foreground/80 flex-wrap">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    <p className="font-semibold">2,500+ <span className="font-normal">Happy Clients</span></p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5" />
                    <p className="font-semibold">4.9/5 <span className="font-normal">Rating</span></p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5"/>
                    <p className="font-semibold">24hrs <span className="font-normal">Delivery</span></p>
                  </div>
                </div>
              </div>
              {heroImage && (
                <div className="mt-6 md:mt-0 max-w-md mx-auto md:max-w-none">
                  <Image
                    src={heroImage.imageUrl}
                    alt={heroImage.description}
                    width={600}
                    height={400}
                    className="rounded-lg shadow-2xl"
                    data-ai-hint={heroImage.imageHint}
                    priority
                  />
                   <p className="text-center mt-2 text-sm text-primary-foreground/60 italic">Your custom signature will be uniquely crafted for you</p>
                </div>
              )}
            </div>
          </section>
          
          <OfferSection />
          <TransformationsSection />
          <WhyUsSection />
          <HowItWorksSection />
          <TargetAudienceSection />
          <TestimonialsSection />
          <PricingSection />
          <FaqSection />
        </main>

        <Footer />

        {/* Sticky Mobile CTA */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm p-4 border-t shadow-lg" style={{zIndex: 1000}}>
          <div className="container mx-auto flex items-center justify-between gap-4 px-4">
              <div className="flex flex-col">
                  <span className="text-muted-foreground line-through text-sm">₹4,999</span>
                  <span className="font-bold text-xl text-foreground">₹489</span>
              </div>
              <Link href="/checkout" passHref className="flex-grow">
                <Button 
                  size="lg" 
                  className="w-full h-12 text-base bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-lg shadow-lg shine-effect"
                >
                  Get Signature
                </Button>
              </Link>
          </div>
        </div>
      </div>
    </LoadingProvider>
  );
}
