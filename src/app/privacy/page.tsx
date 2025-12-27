import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck, Database, Lock } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ShieldCheck className="h-6 w-6" />
          Privacy Policy
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-muted-foreground">
        <div>
          <h3 className="font-semibold text-foreground flex items-center gap-2 mb-1">
            <Database className="h-5 w-5" /> Data Collection
          </h3>
          <p>
            We only collect the personal details necessary to create and deliver your order. This includes your name, email address, and any specific details you provide for your signature design.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-foreground flex items-center gap-2 mb-1">
            <Lock className="h-5 w-5" /> Confidentiality
          </h3>
          <p>
            All personal information (names, dates, details) provided for your product remains strictly confidential. We respect your privacy and handle your information with the utmost care.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-foreground flex items-center gap-2 mb-1">
            <ShieldCheck className="h-5 w-5" /> Security
          </h3>
          <p>
            Your data is stored securely and will never be sold or shared with any third party. We employ industry-standard security measures to protect your information.
          </p>
        </div>
        <div className="border-t pt-4 mt-4">
            <p className="text-xs">
                By using our website, you agree to this privacy policy. If you have any questions, please contact us.
            </p>
        </div>
      </CardContent>
    </Card>
  );
}
