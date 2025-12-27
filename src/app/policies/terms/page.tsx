import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, User, Clock, FileType } from 'lucide-react';

export default function TermsAndConditionsPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="h-6 w-6" />
          Terms & Conditions
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-muted-foreground">
        <div>
          <h3 className="font-semibold text-foreground flex items-center gap-2 mb-1">
            <User className="h-5 w-5" /> For Personal Use Only
          </h3>
          <p>
            This product is for personal use and may not be resold, redistributed, or used commercially without explicit written permission from The Signature Studio.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-foreground flex items-center gap-2 mb-1">
            <Clock className="h-5 w-5" /> Delivery Commitment
          </h3>
          <p>
            While we aim to deliver all orders within 24–48 hours, delays may occasionally occur due to high demand or unforeseen circumstances. We will always communicate any expected delays.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-foreground flex items-center gap-2 mb-1">
            <FileType className="h-5 w-5" /> File Format
          </h3>
          <p>
            Products are delivered in high-resolution digital formats (JPEG, PNG, PDF) unless otherwise specified at the time of order.
          </p>
        </div>
        <div className="border-t pt-4 mt-4">
            <p className="text-xs">
                By making a purchase on our website, you agree to these terms and conditions.
            </p>
        </div>
      </CardContent>
    </Card>
  );
}
