
'use client';

import { useState, useEffect } from 'react';

const COUNTDOWN_MINUTES = 5;
const COUNTDOWN_INITIAL = COUNTDOWN_MINUTES * 60;
const STORAGE_KEY = 'signagenius_offer_end_time';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(COUNTDOWN_INITIAL);

  useEffect(() => {
    const getEndTime = (): number => {
      const storedEndTime = localStorage.getItem(STORAGE_KEY);
      if (storedEndTime) {
        const endTime = parseInt(storedEndTime, 10);
        // If the stored end time is in the past, create a new one
        if (endTime > Date.now()) {
          return endTime;
        }
      }
      
      const newEndTime = Date.now() + COUNTDOWN_INITIAL * 1000;
      localStorage.setItem(STORAGE_KEY, newEndTime.toString());
      return newEndTime;
    };

    const endTime = getEndTime();

    const calculateTimeLeft = () => {
      const now = Date.now();
      const difference = endTime - now;
      return difference > 0 ? Math.floor(difference / 1000) : 0;
    };
    
    setTimeLeft(calculateTimeLeft());

    const interval = setInterval(() => {
      let newTimeLeft = calculateTimeLeft();
      
      if (newTimeLeft <= 0) {
        // Timer expired, reset it
        const newEndTime = Date.now() + COUNTDOWN_INITIAL * 1000;
        localStorage.setItem(STORAGE_KEY, newEndTime.toString());
        newTimeLeft = COUNTDOWN_INITIAL;
      }
      
      setTimeLeft(newTimeLeft);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="flex flex-col items-center">
      <span className="text-base text-muted-foreground">Offer ends in:</span>
      <span className="font-bold text-2xl leading-tight tabular-nums">{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</span>
    </div>
  );
}
