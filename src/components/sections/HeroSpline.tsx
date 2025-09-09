'use client'

import { ReactNode } from 'react'
import GradientText from '@/components/ui/GradientText'

interface HeroSplineProps {
  title: string | ReactNode
  subtitle?: string | ReactNode
  splineUrl: string
  showScrollIndicator?: boolean
  textPosition?: 'center' | 'right' | 'left'
}

const HeroSpline = ({ 
  title,
  subtitle,
  splineUrl,
  showScrollIndicator = false,
  textPosition = 'center'
}: HeroSplineProps) => {
  return (
    <section 
      id="hero-spline" 
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Spline Background - Interactive */}
      <div className="absolute inset-0 w-full h-full">
        <script type="module" src="https://unpkg.com/@splinetool/viewer@1.10.51/build/spline-viewer.js"></script>
        <spline-viewer 
          url={splineUrl}
          style={{ width: '100%', height: '100%' }}
        ></spline-viewer>
      </div>
      
      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 pointer-events-none">
        <div className={`flex flex-col h-full ${
          textPosition === 'right' 
            ? 'items-end justify-center text-right pr-16' 
            : textPosition === 'left'
            ? 'items-start justify-center text-left pl-16'
            : 'items-center justify-center text-center'
        }`}>
          {textPosition === 'center' ? (
            <>
              {/* Center Layout */}
              <div className="flex-1 flex items-center justify-center mt-40">
                <h1 className="font-semibold text-white leading-tight max-w-4xl" style={{fontSize: '48px'}}>
                  {title}
                </h1>
              </div>
              
              {subtitle && (
                <div className="flex-1 flex items-start justify-center pt-64">
                  <h2 className="font-semibold text-white leading-tight max-w-2xl" style={{fontSize: '32px'}}>
                    {subtitle}
                  </h2>
                </div>
              )}
            </>
          ) : (
            <>
              {/* Right/Left Layout */}
              <div className="space-y-8 max-w-2xl">
                <h1 className="font-semibold text-white leading-tight" style={{fontSize: '48px'}}>
                  {title}
                </h1>
                
                {subtitle && (
                  <h2 className="font-semibold text-white leading-tight" style={{fontSize: '32px'}}>
                    {subtitle}
                  </h2>
                )}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      )}
    </section>
  )
}

export default HeroSpline