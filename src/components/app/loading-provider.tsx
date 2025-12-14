'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import LoadingScreen from './loading-screen';

interface LoadingContextType {
  isLoading: boolean;
  progress: number;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export function useLoading() {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
}

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isLoading) return;

    const interval = setInterval(() => {
      setProgress(prevProgress => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prevProgress + Math.random() * 10;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [isLoading]);

  useEffect(() => {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
        if (isLoading) {
            mainContent.style.opacity = '0';
        } else {
            mainContent.style.opacity = '1';
            mainContent.style.transition = 'opacity 500ms';
        }
    }
  }, [isLoading])

  const value = { isLoading, progress };

  return (
    <LoadingContext.Provider value={value}>
      {isLoading && <LoadingScreen />}
      <div id="main-content" style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 500ms' }}>
        {children}
      </div>
    </LoadingContext.Provider>
  );
}
