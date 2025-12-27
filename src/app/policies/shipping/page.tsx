import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Truck, Mail, Clock, AlertCircle } from 'lucide-react';

export default function ShippingPolicyPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Truck className="h-6 w-6" />
          Shipping and Delivery Policy
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-muted-foreground">
        <div>
          <h3 className="font-semibold text-foreground flex items-center gap-2 mb-1">
            <Clock className="h-5 w-5" /> Processing Time
          </h3>
          <p>
            All orders are processed after payment confirmation. Our designers begin working on your custom signature once the payment is successfully verified.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-foreground flex items-center gap-2 mb-1">
            <Mail className="h-5 w-5" /> Delivery Method
          </h3>
          <p>
            Your custom digital product will be delivered directly to the email address you provided at checkout. Please ensure your email is correct to avoid delays.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-foreground flex items-center gap-2 mb-1">
            <Clock className="h-5 w-5" /> Delivery Time
          </h3>
          <p>
            Orders are typically delivered within 24–48 hours. We strive to deliver as quickly as possible while maintaining the highest quality standards.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-foreground flex items-center gap-2 mb-1">
            <AlertCircle className="h-5 w-5" /> Non-Delivery
          </h3>
          <p>
            If you do not receive your product within 48 hours, please check your spam or junk folder first. If it's not there, contact us immediately at <a href="mailto:orders@thesignaturestudio.in" className="text-primary hover:underline">orders@thesignaturestudio.in</a> with your order number so we can resolve the issue promptly.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
