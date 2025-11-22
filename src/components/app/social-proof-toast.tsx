'use client';

import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Zap } from 'lucide-react';

const names = [
  'Aarav Sharma', 'Vivaan Singh', 'Aditya Kumar', 'Vihaan Patel', 'Arjun Gupta', 
  'Sai Joshi', 'Reyansh Reddy', 'Krishna Nair', 'Ishaan Iyer', 'Shaurya Pillai',
  'Diya Mehta', 'Saanvi Rao', 'Aanya Shah', 'Myra Choudhary', 'Anika Kumar',
  'Pari Desai', 'Kiara Menon', 'Zara Khan', 'Riya Kumar', 'Advika Prasad'
];

const cities = [
  'Jaipur', 'Lucknow', 'Nagpur', 'Indore', 'Patna', 'Bhopal', 'Ludhiana', 'Agra', 'Nashik', 
  'Vadodara', 'Ghaziabad', 'Coimbatore', 'Madurai', 'Jodhpur', 'Raipur', 'Allahabad', 
  'Gwalior', 'Jabalpur', 'Amritsar', 'Ranchi', 'Visakhapatnam', 'Varanasi', 'Aurangabad'
];

const getRandomItem = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];
const getRandomDelay = () => Math.random() * 5000 + 4000; // 4 to 9 seconds

export default function SocialProofToast() {
  const { toast } = useToast();

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const showRandomToast = () => {
      const name = getRandomItem(names);
      const city = getRandomItem(cities);

      toast({
        description: (
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-yellow-400 fill-yellow-400" />
            <p><span className="font-bold">{name}</span> from {city} just bought a signature!</p>
          </div>
        ),
        duration: 3000,
      });

      timeoutId = setTimeout(showRandomToast, getRandomDelay());
    };

    // Start the first toast after a short delay
    timeoutId = setTimeout(showRandomToast, 5000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [toast]);

  return null; // This component doesn't render anything itself
}
