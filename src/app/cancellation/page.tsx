import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Ban } from 'lucide-react';

export default function CancellationPolicyPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Ban className="h-6 w-6" />
          Cancellation Policy
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-muted-foreground">
        <p>
          Cancellations are not possible once we have started creating your custom product.
        </p>
        <p>
          As each signature is a personalized, handcrafted item, the work begins shortly after your order is confirmed. Due to the custom nature of our digital products, we cannot accommodate cancellation requests after the design process has commenced.
        </p>
      </CardContent>
    </Card>
  );
}
