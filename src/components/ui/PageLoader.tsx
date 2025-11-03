'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

interface PageLoaderProps {
  onComplete?: () => void
  duration?: number
}

export default function PageLoader({ onComplete, duration = 2800 }: PageLoaderProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [animationPhase, setAnimationPhase] = useState<'appear' | 'grow' | 'pulse' | 'exit'>('grow')

  useEffect(() => {
    // Block scroll during loader
    document.body.style.overflow = 'hidden'

    // Phase 1: Logo grows immediately (1.2s)
    const growTimer = setTimeout(() => {
      setAnimationPhase('pulse')
    }, duration * 0.6)

    // Phase 2: Pulse rapide (400ms)
    const pulseTimer = setTimeout(() => {
      setAnimationPhase('exit')
    }, duration * 0.75)

    // Phase 3: Explosion and exit (700ms)
    const exitTimer = setTimeout(() => {
      setIsVisible(false)
      // Re-enable scroll
      document.body.style.overflow = 'auto'
      onComplete?.()
    }, duration)

    return () => {
      // Cleanup: re-enable scroll if component unmounts
      document.body.style.overflow = 'auto'
      clearTimeout(growTimer)
      clearTimeout(pulseTimer)
      clearTimeout(exitTimer)
    }
  }, [duration, onComplete])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
         style={{ backgroundColor: '#211824' }}
         onTouchMove={(e) => e.preventDefault()} // Prevent touch scroll on mobile
         onWheel={(e) => e.preventDefault()} // Prevent mouse wheel scroll
    >

      {/* Background avec effet subtle */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-blue-900/10 animate-pulse" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float-delayed" />
      </div>

      {/* Logo animé */}
      <div className={`relative transform transition-all ${
        animationPhase === 'grow'
          ? 'scale-100 opacity-100 duration-1200 ease-out'
        : animationPhase === 'pulse'
          ? 'scale-110 opacity-100 duration-300 ease-in-out animate-pulse'
          : 'scale-[15] opacity-0 duration-700 ease-in'
      }`}>
        <Image
          src="/logo/logo-full.svg"
          alt="Visuaal"
          width={400}
          height={300}
          className="w-auto h-auto max-w-[250px] md:max-w-[350px] lg:max-w-[400px]"
          priority
        />

        {/* Effet de glow dynamique autour du logo */}
        <div className={`absolute inset-0 transition-all duration-500 ${
          animationPhase === 'grow'
            ? 'opacity-30 scale-100'
          : animationPhase === 'pulse'
            ? 'opacity-60 scale-125 animate-pulse'
            : 'opacity-100 scale-150'
        }`}>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-full blur-2xl" />
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full blur-xl animate-spin-slow" />
        </div>

        {/* Particules qui explosent lors de la sortie */}
        {animationPhase === 'exit' && (
          <>
            <div className="absolute inset-0 animate-ping">
              <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-purple-500 rounded-full animate-bounce" />
              <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
              <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
            </div>
          </>
        )}
      </div>

      {/* Texte de chargement dynamique */}
      <div className={`absolute bottom-16 md:bottom-20 left-1/2 transform -translate-x-1/2 transition-all duration-500 ${
        animationPhase === 'exit'
          ? 'opacity-0 translate-y-4'
          : 'opacity-100 translate-y-0'
      }`}>
        <div className="text-white/70 text-sm md:text-base font-medium tracking-wider text-center">
          {animationPhase === 'grow' && (
            <span className="animate-pulse">LOADING EXPERIENCE...</span>
          )}
          {animationPhase === 'pulse' && (
            <span className="animate-bounce">READY TO LAUNCH</span>
          )}
        </div>
      </div>

      {/* Barre de progression stylée */}
      <div className={`absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 transition-all duration-500 ${
        animationPhase === 'exit'
          ? 'opacity-0 scale-75'
          : 'opacity-100 scale-100'
      }`}>
        <div className="w-64 md:w-80 h-1 bg-white/10 rounded-full overflow-hidden">
          <div className={`h-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full transition-all duration-1000 ${
            animationPhase === 'grow'
              ? 'w-0 animate-pulse'
            : animationPhase === 'pulse'
              ? 'w-full'
              : 'w-0'
          }`} />
        </div>
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-30px) translateX(10px);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-25px) translateX(-15px);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 7s ease-in-out infinite;
          animation-delay: 1s;
        }

        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
      `}</style>
    </div>
  )
}