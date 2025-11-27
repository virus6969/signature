'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { PenSquare } from 'lucide-react';

export default function LoadingScreen() {
    const [progress, setProgress] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prevProgress => {
                if (prevProgress >= 100) return 100;
                return prevProgress + Math.random() * 5;
            });
        }, 100);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (progress >= 100) {
            setTimeout(() => {
                const loadingScreen = document.getElementById('loading-screen');
                const mainContent = document.getElementById('main-content');
                if (loadingScreen) {
                    loadingScreen.style.opacity = '0';
                }
                if (mainContent) {
                    mainContent.style.opacity = '1';
                }
                setTimeout(() => {
                    setVisible(false);
                }, 500); // Wait for fade out transition
            }, 500); // Short delay at 100%
        }
    }, [progress]);


    const circumference = 2 * Math.PI * 85; // ~534
    const offset = circumference - (Math.min(progress, 100) / 100) * circumference;

    if (!visible) {
      return null;
    }

    return (
        <div id="loading-screen" className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-white via-[#FFD700]/5 to-white transition-opacity duration-500 opacity-100">

            {/* Background Ambient Orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-32 sm:w-48 md:w-64 lg:w-96 h-32 sm:h-48 md:h-64 lg:h-96 bg-[#FFD700]/10 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute top-3/4 right-1/4 w-40 sm:w-60 md:w-80 lg:w-96 h-40 sm:h-60 md:h-80 lg:h-96 bg-[#FFD700]/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
            </div>

            {/* Main Content */}
            <div className="relative text-center z-10 px-4 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">

                {/* Logo */}
                <div className="flex items-center justify-center mb-8 sm:mb-10">
                     <PenSquare className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-gold-dark" />
                </div>

                {/* Circular Progress Indicator */}
                <div className="relative mb-6 sm:mb-8">
                    <svg className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 transform -rotate-90 mx-auto" viewBox="0 0 200 200">
                        {/* Background Circle */}
                        <circle cx="100" cy="100" r="85" stroke="rgba(255,215,0,0.2)" strokeWidth="2" fill="none"></circle>
                        
                        {/* Progress Circle (Animated) */}
                        <circle id="progress-circle" className="transition-all duration-150 ease-out" cx="100" cy="100" r="85"
                                stroke="url(#goldGradient)" strokeWidth="3" fill="none" strokeLinecap="round"
                                strokeDasharray={circumference} strokeDashoffset={offset}
                                style={{ filter: 'drop-shadow(rgba(255, 215, 0, 0.4) 0px 0px 12px)' }}></circle>
                        
                        {/* Definitions for Gradients and Text Path */}
                        <defs>
                            <path id="circle-text" d="M 100, 100 m -85, 0 a 85,85 0 1,1 170,0 a 85,85 0 1,1 -170,0"></path>
                            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#FFD700"></stop>
                                <stop offset="50%" stopColor="#FFA500"></stop>
                                <stop offset="100%" stopColor="#DAA520"></stop>
                            </linearGradient>
                            <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#B8860B"></stop>
                                <stop offset="50%" stopColor="#FFD700"></stop>
                                <stop offset="100%" stopColor="#DAA520"></stop>
                            </linearGradient>
                        </defs>

                        {/* Rotating Text Ring */}
                        <text className="text-xs sm:text-sm md:text-base font-headline font-bold animate-spin-slow" style={{ transformOrigin: '100px 100px' }}>
                            <textPath href="#circle-text" startOffset="0%">
                                <tspan fill="url(#textGradient)" className="tracking-wider">SIGNA GENIUS • HANDCRAFTED SIGNATURES • PREMIUM •</tspan>
                            </textPath>
                        </text>
                    </svg>

                    {/* Center Percentage & Spinner */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                            <div id="loading-percentage" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gold mb-2 sm:mb-3 md:mb-4">{Math.round(Math.min(progress, 100))}%</div>
                            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto">
                                <div className="w-full h-full rounded-full border-2 border-transparent border-t-gold border-r-gold-dark animate-spin"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Brand Name with Shimmer */}
                <div className="relative mb-6 sm:mb-8">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-headline font-bold mb-3 sm:mb-4 relative leading-tight">
                        {/* Blur Layer */}
                        <span className="absolute inset-0 text-gold animate-pulse blur-sm opacity-50">SignaGenius</span>
                        {/* Main Text */}
                        <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-gold-dark via-gold to-gold-dark bg-[length:200%_auto] animate-shimmer">SignaGenius</span>
                    </h1>
                </div>

                {/* Tagline */}
                <p className="text-gold-dark font-body text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 opacity-0 animate-fadeInUp">
                    <span className="text-gold">Handcrafted Digital Signatures</span>
                </p>

                {/* Bouncing Dots */}
                <div className="flex justify-center items-center space-x-2 sm:space-x-3">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gold animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gold/80 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gold/60 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
            </div>
        </div>
    );
}
