import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LifeBuoy, Mail, Clock, MessageSquare } from 'lucide-react';

export default function SupportPolicyPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <LifeBuoy className="h-6 w-6" />
          Support Policy
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-muted-foreground">
        <div>
          <h3 className="font-semibold text-foreground flex items-center gap-2 mb-1">
            <Mail className="h-5 w-5" /> Email Support
          </h3>
          <p>
            For any questions, issues, or inquiries, please contact our support team at:
            <br />
            <a href="mailto:orders@thesignaturestudios.in" className="text-primary font-semibold hover:underline">orders@thesignaturestudios.in</a>
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-foreground flex items-center gap-2 mb-1">
            <Clock className="h-5 w-5" /> Working Hours
          </h3>
          <p>
            Our support team is available from Monday–Saturday, 10:00 AM – 6:00 PM (IST).
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-foreground flex items-center gap-2 mb-1">
            <MessageSquare className="h-5 w-5" /> Response Time
          </h3>
          <p>
            We are committed to providing timely support. We respond to all inquiries within 24 hours. Urgent issues are prioritised to ensure a swift resolution.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
