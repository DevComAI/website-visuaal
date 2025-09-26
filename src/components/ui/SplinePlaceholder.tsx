'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

interface SplinePlaceholderProps {
  variant?: 'gradient' | 'blur' | 'skeleton' | 'custom'
  placeholder?: string
  text?: string
  showProgress?: boolean
  progress?: number
}

export default function SplinePlaceholder({
  variant = 'gradient',
  placeholder,
  text = 'Loading 3D experience...',
  showProgress = false,
  progress = 0
}: SplinePlaceholderProps) {
  const [dots, setDots] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => (prev.length >= 3 ? '' : prev + '.'))
    }, 500)

    return () => clearInterval(interval)
  }, [])

  if (variant === 'blur' && placeholder) {
    return (
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={placeholder}
          alt="Loading preview"
          fill
          className="object-cover scale-110 blur-2xl opacity-30 animate-pulse"
          priority
        />
        <div className="absolute inset-0 " />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="w-12 h-12 border-3 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-white/80 text-sm font-medium">{text}{dots}</p>
          </div>
        </div>
      </div>
    )
  }

  if (variant === 'skeleton') {
    return (
      <div className="absolute inset-0">
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="text-white/60 text-sm">{text}{dots}</div>
            {showProgress && (
              <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }

  // Default gradient variant
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0  animate-gradient-shift">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float-delayed" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-float" />
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center space-y-6">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-purple-500/30 rounded-full animate-spin-slow mx-auto" />
            <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-purple-500 rounded-full animate-spin mx-auto" />
          </div>

          <div className="space-y-2">
            <p className="text-white/80 text-sm font-medium tracking-wide">{text}{dots}</p>
            {showProgress && (
              <div className="w-48 h-1.5 bg-white/10 rounded-full overflow-hidden mx-auto">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 transition-all duration-500 ease-out rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-30px) translateX(10px); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-25px) translateX(-15px); }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-gradient-shift {
          animation: gradient-shift 8s ease infinite;
          background-size: 200% 200%;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 7s ease-in-out infinite;
          animation-delay: 1s;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  )
}