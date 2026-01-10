
import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';
import { cn } from '@/lib/utils';
import Script from 'next/script';
import { Suspense } from 'react';
import FacebookPixel from '@/components/app/pixel-events';

export const metadata: Metadata = {
  title: 'Professional Handcrafted Digital Signatures',
  description: 'Transform your signature into a professional brand asset. Handcrafted designs delivered in 48 hours.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Inter:wght@400;700&family=Dancing+Script:wght@400;700&display=swap" rel="stylesheet" />
        <Script 
          src="https://sdk.cashfree.com/js/v3/cashfree.js"
          strategy="beforeInteractive"
        />
        <meta 
          httpEquiv="Permissions-Policy" 
          content="payment=(self 'https://api.cashfree.com' 'https://sandbox.cashfree.com'), accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), usb=()"
        />
      </head>
      <body className="font-body antialiased">
        <Suspense fallback={null}>
            <FacebookPixel />
        </Suspense>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
