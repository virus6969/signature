import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ChangePage() {
  return (
    <div className="container mx-auto py-8">
      <Card>
        <CardHeader>
          <CardTitle>Change Page</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This is a new page. You can add content here.</p>
        </CardContent>
      </Card>
    </div>
  );
}
