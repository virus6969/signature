
'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const ThankYouContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [orderId, setOrderId] = useState('');
  
  useEffect(() => {
    const orderIdParam = searchParams.get('order_id');
    const statusParam = searchParams.get('status');
    
    if (orderIdParam) {
      setOrderId(orderIdParam);
      // You can save orderId to localStorage or context for future reference
      localStorage.setItem('lastOrderId', orderIdParam);
    }
    
    if (statusParam === 'failed') {
      // Handle failed payment
      alert('Payment failed. Please try again.');
      router.push('/checkout');
    }
  }, [searchParams, router]);
  
  return (
    <div className="thank-you-container" style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '20px',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    }}>
      <div className="thank-you-card" style={{
        background: 'white',
        padding: '40px',
        borderRadius: '15px',
        textAlign: 'center',
        maxWidth: '500px',
        width: '100%',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
      }}>
        <div className="success-icon" style={{ fontSize: '60px', marginBottom: '20px' }}>✅</div>
        <h1 style={{ color: '#4CAF50', marginBottom: '10px' }}>Payment Successful!</h1>
        <p>Thank you for your purchase.</p>
        
        {orderId && (
          <div className="order-details" style={{
            background: '#f0f8ff',
            padding: '15px',
            borderRadius: '8px',
            margin: '20px 0',
            textAlign: 'left'
          }}>
            <p><strong>Order ID:</strong> {orderId}</p>
            <p>We have sent a confirmation email with your order details.</p>
          </div>
        )}
        
        <div className="next-steps" style={{
          textAlign: 'left',
          margin: '25px 0',
          padding: '20px',
          background: '#f9f9f9',
          borderRadius: '8px'
        }}>
          <h3>What happens next?</h3>
          <ul style={{ paddingLeft: '20px', listStyle: 'none' }}>
            <li style={{ marginBottom: '10px' }}>✓ You will receive a confirmation email within 5 minutes</li>
            <li style={{ marginBottom: '10px' }}>✓ Our designer will contact you within 24 hours</li>
            <li style={{ marginBottom: '10px' }}>✓ You'll receive your custom signature within 3-5 business days</li>
            <li style={{ marginBottom: '10px' }}>✓ Practice sheets (if purchased) will be emailed separately</li>
          </ul>
        </div>
        
        <div className="contact-info" style={{
          margin: '20px 0',
          padding: '15px',
          background: '#e8f5e9',
          borderRadius: '8px'
        }}>
          <p>Need help? Contact us at:</p>
          <p>📧 orders@thesignaturestudios.in</p>
          <p>📞 +91 98765 43210</p>
        </div>
        
        <Link href="/" passHref>
          <Button style={{
            background: '#4CAF50',
            color: 'white',
            border: 'none',
            padding: '12px 30px',
            fontSize: '16px',
            borderRadius: '6px',
            cursor: 'pointer',
            marginTop: '20px',
            width: '100%'
          }}>
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ThankYouContent;
