import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Info, AlertTriangle, Clock } from 'lucide-react';

export default function RefundPolicyPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Info className="h-6 w-6" />
          Refund Policy
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-muted-foreground">
        <div>
          <h3 className="font-semibold text-foreground mb-1">All Sales Final</h3>
          <p>
            As this is a custom-made digital product, all sales are final once the product has been delivered. We dedicate significant time and effort to create a personalized product just for you.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-foreground flex items-center gap-2 mb-1">
            <AlertTriangle className="h-5 w-5" /> Refund Exceptions
          </h3>
          <p>
            Refunds will only be issued under the following circumstances:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>We fail to deliver your order within 48 hours of purchase.</li>
            <li>There is a proven technical issue or defect in the delivered file that we are unable to resolve.</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-foreground flex items-center gap-2 mb-1">
            <Clock className="h-5 w-5" /> Refund Timeline
          </h3>
          <p>
            Approved refunds will be processed within 5–7 business days via your original payment method.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
