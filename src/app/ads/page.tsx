import AdHeader from '@/components/app/ad-header';
import AdFooter from '@/components/app/ad-footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Star } from 'lucide-react';

export default function AdsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AdHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground text-center py-20">
          <div className="container mx-auto">
            <h1 className="text-5xl font-headline font-bold mb-4">
              Express Your Personality with an Exclusive Signature
            </h1>
            <p className="text-xl mb-8">
              Crafted by professional calligraphers. Sign like a pro.
            </p>
            <Button size="lg" variant="secondary" className="text-lg">
              Get Your Signature Now
            </Button>
            <p className="text-sm mt-4">50% off until the end of the month!</p>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-headline font-bold mb-4">
              Trusted by Thousands Worldwide
            </h2>
            <div className="flex justify-center items-center gap-8 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Star className="w-6 h-6 text-yellow-400" />
                <p>1,000+ 5-Star Reviews</p>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <p>20,500+ Clients Served</p>
              </div>
              <p>Since 2017</p>
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

        {/* CTA Section */}
        <section className="bg-accent text-accent-foreground text-center py-20">
          <div className="container mx-auto">
            <h2 className="text-4xl font-headline font-bold mb-4">
              Ready for your new signature?
            </h2>
            <p className="text-lg mb-8">
              Join thousands of professionals who have elevated their brand with SignaGenius.
            </p>
            <Button size="lg" variant="default" className="text-lg bg-primary hover:bg-primary/90 text-primary-foreground">
              Create Your Signature
            </Button>
          </div>
        </section>
      </main>
      <AdFooter />
    </div>
  );
}
