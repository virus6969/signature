
'use client';

import { useEffect, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Loader2 } from 'lucide-react';
import * as fpixel from '@/lib/fpixel'

function ThankYouContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const orderId = searchParams.get('order_id');

  useEffect(() => {
    if (orderId) {
      fpixel.event('Purchase', {
        value: 489, // Base price as a fallback
        currency: 'INR',
      })
    }
  }, [orderId]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white rounded-lg shadow-xl p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Payment Successful! 🎉
          </h1>
          
          <p className="text-gray-600 mb-6">
            Thank you for your purchase!
          </p>
          
          <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Order ID:</span>
              <span className="font-mono text-sm">{orderId || 'N/A'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Status:</span>
              <span className="font-semibold">Processing</span>
            </div>
          </div>
          
          <p className="text-sm text-gray-500 mb-6">
            You will receive a confirmation email with your order details shortly.
          </p>
          
          <button
            onClick={() => router.push('/')}
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}

function LoadingFallback() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50">
            <div className="text-center">
                <Loader2 className="mx-auto h-12 w-12 animate-spin text-green-600" />
                <p className="mt-4 text-lg text-gray-700">Loading your order details...</p>
            </div>
        </div>
    )
}

export default function ThankYouPage() {
    return (
        <Suspense fallback={<LoadingFallback />}>
            <ThankYouContent />
        </Suspense>
    )
}
