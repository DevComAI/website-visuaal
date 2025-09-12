'use client'

import { ReactNode } from 'react'
import SplineViewer from '@/components/ui/SplineViewer'

interface HeroSplineProps {
  title: string | ReactNode
  subtitle?: string | ReactNode
  splineUrl: string
  showScrollIndicator?: boolean
  textPosition?: 'center' | 'right' | 'left'
  splinePosition?: 'fullscreen' | 'right'
  titleSize?: string
  subtitleSize?: string
}

const HeroSpline = ({ 
  title,
  subtitle,
  splineUrl,
  showScrollIndicator = false,
  textPosition = 'center',
  splinePosition = 'fullscreen',
  titleSize = '48px',
  subtitleSize = '32px'
}: HeroSplineProps) => {
  return (
    <section 
      id="hero-spline" 
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Spline Background - Interactive */}
      <div 
        className={
          splinePosition === 'right' 
            ? "absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-2/3 z-0 mix-blend-plus-lighter" 
            : "absolute inset-0 w-full h-full z-0 mix-blend-plus-lighter"
        }
      >
        <SplineViewer 
          scene={splineUrl}
          style={{ width: '100%', height: '100%' }}
          interactive={true}
        />
      </div>
      
      {/* Content */}
      <div className="container relative z-20 mx-auto px-4 pointer-events-none">
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
                <h1 className="font-semibold text-white leading-tight max-w-4xl" style={{fontSize: titleSize}}>
                  {title}
                </h1>
              </div>
              
              {subtitle && (
                <div className="flex-1 flex items-start justify-center pt-64">
                  <h2 className="font-semibold text-white leading-tight max-w-2xl" style={{fontSize: subtitleSize}}>
                    {subtitle}
                  </h2>
                </div>
              )}
            </>
          ) : (
            <>
              {/* Right/Left Layout */}
              <div className="space-y-8 max-w-6xl">
                <h1 className="font-semibold text-white leading-tight" style={{fontSize: titleSize}}>
                  {title}
                </h1>
                
                {subtitle && (
                  <h2 className="font-semibold text-white leading-tight" style={{fontSize: subtitleSize}}>
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