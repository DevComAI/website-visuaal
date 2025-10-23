'use client'

import { ReactNode, useEffect } from 'react'
import OptimizedSplineViewer from '@/components/ui/OptimizedSplineViewer'
import ScrollIndicator from '@/components/ui/ScrollIndicator'
import { useSplinePreloader } from '@/lib/hooks/useSplinePreloader'

interface HeroSplineProps {
  title: string | ReactNode
  subtitle?: string | ReactNode
  splineUrl: string
  showScrollIndicator?: boolean
  textPosition?: 'center' | 'right' | 'left'
  splinePosition?: 'fullscreen' | 'right'
  priority?: boolean
  placeholder?: string
}

const logHero = (message: string, data?: unknown) => {
  const timestamp = new Date().toISOString().split('T')[1].slice(0, -1)
  console.log(`[${timestamp}] [HeroSpline] ${message}`, data || '')
}

const HeroSpline = ({
  title,
  subtitle,
  splineUrl,
  showScrollIndicator = false,
  textPosition = 'center',
  splinePosition = 'fullscreen',
  priority = false,
  placeholder
}: HeroSplineProps) => {
  const { progress } = useSplinePreloader(splineUrl, { priority: priority ? 'high' : 'normal' })

  useEffect(() => {
    logHero('🟢 HeroSpline monté', {
      splineUrl,
      priority,
      textPosition,
      splinePosition,
    })

    return () => {
      logHero('🔴 HeroSpline démonté', { splineUrl })
    }
  }, [splineUrl, priority, textPosition, splinePosition])

  useEffect(() => {
    logHero(`📊 Progression du preloader: ${progress}%`, { splineUrl })
  }, [progress, splineUrl])

  return (
    <section 
      id="hero-spline" 
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Spline Background - Interactive */}
      {/* Mobile Spline */}
      <div className="md:hidden absolute inset-0 w-full h-full z-0 mix-blend-plus-lighter overflow-hidden pointer-events-none">
        <OptimizedSplineViewer
          scene={splineUrl}
          style={{
            width: '100%',
            height: '100%',
            minHeight: '100vh',
            minWidth: '100vw',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            objectFit: 'cover'
          }}
          interactive={false}
          priority={priority}
          placeholder={placeholder}
          loadingDelay={200}
        />
      </div>

      {/* Desktop Spline */}
      <div
        className={
          splinePosition === 'right'
            ? "hidden md:block absolute left-100   z-0 mix-blend-plus-lighter"
            : "hidden md:block absolute inset-0 w-full h-full z-0 mix-blend-plus-lighter overflow-hidden spline-responsive-scale"
        }
        style={{
          transformOrigin: 'center center'
        }}
      >
        <OptimizedSplineViewer
          scene={splineUrl}
          style={{
            width: '100%',
            height: '100%',
            minHeight: '100vh',
            minWidth: '100vw',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            objectFit: 'cover'
          }}
          interactive={true}
          priority={priority}
          placeholder={placeholder}
          loadingDelay={100}
        />
      </div>
      
      {/* Content */}
      <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8 pointer-events-none">
        <div className={`flex flex-col h-full ${
          textPosition === 'right'
            ? 'items-end justify-center text-right pr-4 sm:pr-8 lg:pr-16'
            : textPosition === 'left'
            ? 'items-start justify-center text-left pl-4 sm:pl-8 lg:pl-16'
            : 'items-center justify-center text-center'
        }`}>
          {textPosition === 'center' ? (
            <>
              {/* Center Layout */}
              <div className="flex flex-col items-center justify-center space-y-6 sm:space-y-8 lg:space-y-12 min-h-screen px-4">
                <h1 className="font-semibold text-white leading-tight max-w-4xl 2xl:max-w-6xl text-center text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
                  {title}
                </h1>

                {subtitle && (
                  <h2 className="font-semibold text-white leading-tight max-w-2xl 2xl:max-w-4xl text-center text-lg sm:text-xl lg:text-2xl xl:text-3xl">
                    {subtitle}
                  </h2>
                )}
              </div>
            </>
          ) : (
            <>
              {/* Right/Left Layout */}
              <div className="space-y-6 lg:space-y-8 max-w-6xl 2xl:max-w-8xl">
                <h1 className="font-semibold text-white leading-tight text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
                  {title}
                </h1>

                {subtitle && (
                  <h2 className="font-semibold text-white leading-tight text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
                    {subtitle}
                  </h2>
                )}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      {showScrollIndicator && <ScrollIndicator />}
    </section>
  )
}

export default HeroSpline