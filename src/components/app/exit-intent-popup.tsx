
'use client';

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
} from '@/components/ui/alert-dialog';
import CountdownTimer from './countdown-timer';
import { Button } from '../ui/button';
import Link from 'next/link';

type ExitIntentPopupProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function ExitIntentPopup({ open, onOpenChange }: ExitIntentPopupProps) {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="max-w-md text-center p-8 w-[90vw] rounded-lg">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-2xl md:text-3xl font-headline">
            Wait! Your 90% Discount Is Waiting
          </AlertDialogTitle>
          <AlertDialogDescription className="text-base md:text-lg text-muted-foreground pt-2">
            Don't miss out on the chance to get a premium, handcrafted signature for a massive discount. This special offer expires soon!
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="py-4 my-4 border-y">
            <CountdownTimer />
        </div>
        <AlertDialogFooter className="flex-col gap-2 sm:flex-col sm:space-x-0">
          <AlertDialogAction asChild>
            <Link href="/checkout" passHref>
              <Button size="lg" className="w-full h-12 text-base bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                Claim My 90% Discount
              </Button>
            </Link>
          </AlertDialogAction>
          <AlertDialogCancel asChild>
              <Button variant="ghost" size="lg" className="w-full h-12 text-base text-muted-foreground">
                No, thanks. I'll pay full price later.
              </Button>
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
