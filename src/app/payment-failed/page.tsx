
'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, Suspense } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Loader2 } from 'lucide-react';

const BACKEND_URL = 'https://payment-server-production-2c18.up.railway.app/';

function PaymentFailedContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const orderIdParam = searchParams.get('order_id');
    
    if (orderIdParam) {
      // Send failed payment data to the backend
      fetch(`${BACKEND_URL}/api/log-payment-status`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ orderId: orderIdParam, status: 'FAILED' })
      }).catch(error => console.error("Failed to log failed payment:", error));
    }
  }, [searchParams]);
  
  return (
    <div className="failed-container" style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #ff6b6b 0%, #ff8e53 100%)',
      padding: '20px',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    }}>
      <div className="failed-card" style={{
        background: 'white',
        padding: '40px',
        borderRadius: '15px',
        textAlign: 'center',
        maxWidth: '500px',
        width: '100%',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
      }}>
        <div className="failed-icon" style={{ fontSize: '60px', marginBottom: '20px' }}>❌</div>
        <h1 style={{ color: '#e74c3c', marginBottom: '10px' }}>Payment Failed</h1>
        <p>We couldn't process your payment. Please try again.</p>
        
        <div className="possible-reasons" style={{
          textAlign: 'left',
          margin: '25px 0',
          padding: '20px',
          background: '#fff5f5',
          borderRadius: '8px'
        }}>
          <h3>Possible reasons:</h3>
          <ul style={{ paddingLeft: '20px', listStyle: 'none' }}>
            <li style={{ marginBottom: '10px' }}>• Insufficient funds in your account</li>
            <li style={{ marginBottom: '10px' }}>• Bank server is temporarily down</li>
            <li style={{ marginBottom: '10px' }}>• Card details entered incorrectly</li>
            <li style={{ marginBottom: '10px' }}>• Network connectivity issue</li>
          </ul>
        </div>
        
        <div className="action-buttons" style={{
          display: 'flex',
          gap: '15px',
          margin: '20px 0'
        }}>
          <Button 
            className="retry-button"
            onClick={() => router.push('/checkout')}
            style={{
              flex: '1',
              background: '#e74c3c',
              color: 'white',
              border: 'none',
              padding: '12px',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            Try Again
          </Button>
          <Link href="/" passHref style={{flex: 1}}>
            <Button 
              className="home-button"
              style={{
                background: '#95a5a6',
                color: 'white',
                border: 'none',
                padding: '12px',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '16px',
                width: '100%'
              }}
            >
              Back to Home
            </Button>
          </Link>
        </div>
        
        <div className="help-section" style={{
          marginTop: '20px',
          padding: '15px',
          background: '#f8f9fa',
          borderRadius: '8px'
        }}>
          <p>Still having trouble?</p>
          <p>Contact support: orders@thesignaturestudios.in</p>
        </div>
      </div>
    </div>
  );
};

function LoadingFallback() {
    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'linear-gradient(135deg, #ff6b6b 0%, #ff8e53 100%)',
            color: 'white',
            textAlign: 'center'
        }}>
            <Loader2 className="h-12 w-12 animate-spin" />
        </div>
    )
}

export default function PaymentFailedPage() {
    return (
        <Suspense fallback={<LoadingFallback />}>
            <PaymentFailedContent />
        </Suspense>
    )
}
