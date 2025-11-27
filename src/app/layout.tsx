import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';
import LoadingScreen from '@/components/app/loading-screen';
import { PenSquare } from 'lucide-react';

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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Inter:wght@400;700&family=Dancing+Script:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <LoadingScreen />
        <div id="main-content" className="opacity-0 transition-opacity duration-500">
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
