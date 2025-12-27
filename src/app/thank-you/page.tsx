
import React, { Suspense } from 'react';
import ThankYouContent from './thank-you-content';
import { Loader2 } from 'lucide-react';

function ThankYouLoading() {
    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        }}>
            <div style={{ textAlign: 'center', color: 'white' }}>
                <Loader2 className="mx-auto h-12 w-12 animate-spin" />
                <p className="mt-4 text-lg">Loading your order details...</p>
            </div>
        </div>
    )
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={<ThankYouLoading />}>
      <ThankYouContent />
    </Suspense>
  );
}
