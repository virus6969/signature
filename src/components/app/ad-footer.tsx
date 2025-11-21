
import { ShieldCheck, Lock, RefreshCcw } from 'lucide-react';
import React from 'react';

export default function AdFooter() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full py-6 mt-8 bg-muted text-muted-foreground">
      <div className="container mx-auto text-center text-sm">
        <div className="flex justify-center items-center gap-6 mb-6 text-foreground">
            <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5" />
                <span>SSL Secured</span>
            </div>
             <div className="flex items-center gap-2">
                <Lock className="w-5 h-5" />
                <span>GDPR Compliant</span>
            </div>
            <div className="flex items-center gap-2">
                <RefreshCcw className="w-5 h-5" />
                <span>Money-Back Guarantee</span>
            </div>
        </div>
        <p className="mb-2">&copy; {currentYear} SignaGenius. All rights reserved.</p>
        <div className="flex justify-center gap-4 text-xs">
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Contact Us</a>
        </div>
      </div>
    </footer>
  );
}

    