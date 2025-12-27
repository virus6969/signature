import Link from 'next/link';
import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const policies = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Refund Policy', href: '/refund' },
    { name: 'Shipping', href: '/shipping' },
    { name: 'Terms & Conditions', href: '/terms' },
    { name: 'Contact Us', href: '/support' },
  ];

  return (
    <footer className="w-full py-8 border-t bg-background">
      <div className="container mx-auto text-center text-sm text-muted-foreground">
        <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4 mb-4">
          <p>&copy; {currentYear} The Signature Studio. All Rights Reserved.</p>
        </div>
        <div className="flex justify-center flex-wrap gap-x-4 gap-y-2">
          {policies.map((policy, index) => (
            <React.Fragment key={policy.name}>
              <Link href={policy.href} passHref>
                <span className="hover:text-foreground cursor-pointer">{policy.name}</span>
              </Link>
              {index < policies.length - 1 && <span className="text-muted-foreground/50 hidden md:inline">•</span>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </footer>
  );
}
