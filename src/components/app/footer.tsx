
import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full py-6 border-t">
      <div className="container mx-auto text-center text-sm text-muted-foreground flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4">
        <p>&copy; {currentYear} Easy Soul. All rights reserved.</p>
        <div className="flex gap-4">
            <a href="#" className="hover:text-foreground">Privacy Policy</a>
            <span className="text-muted-foreground/50">•</span>
            <a href="#" className="hover:text-foreground">Contact Us</a>
        </div>
      </div>
    </footer>
  );
}
