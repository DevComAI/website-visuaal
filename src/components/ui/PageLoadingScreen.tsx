'use client';

import { useEffect, useState } from 'react';

interface PageLoadingScreenProps {
  isLoading: boolean;
  progress: number; // 0-100
  scenesLoaded?: number;
  scenesTotal?: number;
  currentScene?: string;
}

/**
 * Elegant loading screen displayed during page preparation
 */
export function PageLoadingScreen({
  isLoading,
}: PageLoadingScreenProps) {
  const [show, setShow] = useState(isLoading);

  useEffect(() => {
    if (isLoading) {
      setShow(true);
    } else {
      // Wait for animation to finish before hiding
      const timer = setTimeout(() => setShow(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-500 ${
        isLoading ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        background: 'radial-gradient(circle at center, rgba(33, 24, 36, 0.98) 0%, rgba(20, 15, 22, 0.98) 100%)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <div className="flex flex-col items-center justify-center space-y-8 max-w-md w-full px-6">
        {/* Logo or title */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-3 tracking-tight">Visuaal</h2>
          <p className="text-white/70 text-base">Preparing your experience</p>
        </div>

        {/* Elegant spinner */}
        <div className="relative w-24 h-24">
          <svg className="w-full h-full animate-spin" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray="70 200"
              className="opacity-80"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="50%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#c084fc" />
              </linearGradient>
            </defs>
          </svg>
        </div>

      
      </div>
    </div>
  );
}

