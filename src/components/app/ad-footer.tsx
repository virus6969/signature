import React from 'react';

export default function AdFooter() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full py-6 mt-8 bg-muted text-muted-foreground">
      <div className="container mx-auto text-center text-sm">
        <p className="mb-2">&copy; {currentYear} SignaGenius. All rights reserved.</p>
        <div className="flex justify-center gap-4 text-xs">
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Refund Policy</a>
        </div>
      </div>
    </footer>
  );
}
