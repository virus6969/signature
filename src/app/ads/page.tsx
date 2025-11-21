'use client';

import { useEffect, useState } from 'react';
import AdHeader from '@/components/app/ad-header';
import AdFooter from '@/components/app/ad-footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Star } from 'lucide-react';
import PortfolioSection from '@/components/app/ads/portfolio-section';
import PricingSection from '@/components/app/ads/pricing-section';
import TestimonialsSection from '@/components/app/ads/testimonials-section';
import FaqSection from '@/components/app/ads/faq-section';

export default function AdsPage() {
  const [showStickyCta, setShowStickyCta] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after user scrolls past the hero section (e.g., > 400px)
      if (window.scrollY > 400) {
        setShowStickyCta(true);
      } else {
        setShowStickyCta(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AdHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground text-center py-16 md:py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-5xl font-headline font-bold mb-4" style={{ lineHeight: 1.2 }}>
              Express Your Personality with an Exclusive Signature
            </h1>
            <p className="text-lg md:text-xl mb-6 md:mb-8 max-w-xl mx-auto">
              Crafted by professional calligraphers. Sign like a pro. Stand out in every document.
            </p>
            <div className="relative inline-block">
              <div className="absolute -top-4 -right-4 animate-pulse">
                <span className="relative flex h-10 w-auto items-center justify-center">
                  <span className="bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                    50% OFF
                  </span>
                </span>
              </div>
              <Button 
                size="lg" 
                className="h-12 text-base md:text-lg min-w-[220px] bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
                style={{boxShadow: '0 4px 12px rgba(0,0,0,0.15)'}}
              >
                Create My Signature - 50% Off
              </Button>
            </div>
            <p className="text-xs md:text-sm mt-4 text-primary-foreground/80">50% off ends for the first 50 customers</p>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-headline font-bold mb-8">
              Trusted by Thousands Worldwide
            </h2>
            <div className="flex justify-center items-center gap-6 md:gap-12 text-muted-foreground flex-wrap">
              <div className="flex flex-col items-center gap-2">
                <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
                <p className="text-2xl font-bold text-foreground">1,000+</p>
                <p className="text-sm">5-Star Reviews</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CheckCircle className="w-8 h-8 text-green-500" />
                 <p className="text-2xl font-bold text-foreground">20,500+</p>
                <p className="text-sm">Clients Served</p>
              </div>
               <div className="flex flex-col items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>
                <p className="text-2xl font-bold text-foreground">Since 2017</p>
                <p className="text-sm">Established</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-card py-16">
            <div className="container mx-auto">
                <h2 className="text-3xl font-headline text-center font-bold mb-12">How It Works</h2>
                <div className="grid md:grid-cols-4 gap-8 text-center">
                    <div>
                        <div className="flex items-center justify-center mb-4">
                            <div className="bg-primary text-primary-foreground rounded-full h-12 w-12 flex items-center justify-center font-bold text-xl">1</div>
                        </div>
                        <h3 className="font-headline text-xl font-semibold mb-2">Submit Your Style</h3>
                        <p className="text-muted-foreground">Fill out a quick form to tell us about your preferences.</p>
                    </div>
                    <div>
                        <div className="flex items-center justify-center mb-4">
                            <div className="bg-primary text-primary-foreground rounded-full h-12 w-12 flex items-center justify-center font-bold text-xl">2</div>
                        </div>
                        <h3 className="font-headline text-xl font-semibold mb-2">We Design</h3>
                        <p className="text-muted-foreground">Our AI and human calligraphers create multiple options for you.</p>
                    </div>
                    <div>
                        <div className="flex items-center justify-center mb-4">
                             <div className="bg-primary text-primary-foreground rounded-full h-12 w-12 flex items-center justify-center font-bold text-xl">3</div>
                        </div>
                        <h3 className="font-headline text-xl font-semibold mb-2">You Choose</h3>
                        <p className="text-muted-foreground">You pick your favorite design from the generated options.</p>
                    </div>
                    <div>
                        <div className="flex items-center justify-center mb-4">
                            <div className="bg-primary text-primary-foreground rounded-full h-12 w-12 flex items-center justify-center font-bold text-xl">4</div>
                        </div>
                        <h3 className="font-headline text-xl font-semibold mb-2">Master Your Signature</h3>
                        <p className="text-muted-foreground">Receive a video tutorial and practice sheets to perfect your new sign.</p>
                    </div>
                </div>
            </div>
        </section>

        <PortfolioSection />
        <TestimonialsSection />
        <PricingSection />
        <FaqSection />

        {/* CTA Section */}
        <section className="bg-accent text-accent-foreground text-center py-20">
          <div className="container mx-auto">
            <h2 className="text-4xl font-headline font-bold mb-4">
              Ready for your new signature?
            </h2>
            <p className="text-lg mb-8">
              Join thousands of professionals who have elevated their brand with SignaGenius.
            </p>
            <Button size="lg" className="h-14 px-10 text-lg bg-primary hover:bg-primary/90 text-primary-foreground">
              Create Your Signature - 50% Off
            </Button>
          </div>
        </section>
      </main>
      <AdFooter />

      {/* Sticky Mobile CTA */}
      <div className={`md:hidden fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm p-4 border-t transition-transform duration-300 ${showStickyCta ? 'translate-y-0' : 'translate-y-full'}`} style={{zIndex: 1000}}>
         <Button 
            size="lg" 
            className="w-full h-12 text-base bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg shadow-lg"
          >
            Create My Signature - 50% Off
          </Button>
      </div>
    </div>
  );
}
