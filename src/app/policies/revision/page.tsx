import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RotateCcw } from 'lucide-react';

export default function RevisionPolicyPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <RotateCcw className="h-6 w-6" />
          Revision Policy
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-muted-foreground">
        <p>
          Your satisfaction is important to us. While our initial delivery includes multiple concepts to choose from, we understand that sometimes minor adjustments are needed.
        </p>
        <div>
          <h3 className="font-semibold text-foreground">Additional Revisions</h3>
          <p>
            Should you require further changes or new concepts beyond what is included in your package, extra changes will be charged at <strong className="text-foreground">₹500 per revision</strong>.
          </p>
        </div>
        <p>
          To request a revision, please contact our support team with your order number and specific feedback.
        </p>
      </CardContent>
    </Card>
  );
}
