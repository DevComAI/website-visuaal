'use client'

import { ReactNode } from 'react'
import Image from 'next/image'
import ScrollIndicator from '@/components/ui/ScrollIndicator'

interface HeroSplineProps {
  title: string | ReactNode
  subtitle?: string | ReactNode
  image: string
  showScrollIndicator?: boolean
  textPosition?: 'center' | 'right' | 'left'
  priority?: boolean
  mobileImage?: string
  alt?: string
}

const HeroSpline = ({
  title,
  subtitle,
  image,
  showScrollIndicator = false,
  textPosition = 'center',
  priority = true,
  mobileImage,
  alt = "Hero background"
}: HeroSplineProps) => {
  return (
    <section
      id="hero-spline"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Mobile Image */}
      <div className="md:hidden absolute inset-0 w-full h-full z-0 mix-blend-plus-lighter">
        <Image
          src={mobileImage || image}
          alt={alt}
          fill
          priority={priority}
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Desktop Image */}
      <div className="hidden md:block absolute inset-0 w-full h-full z-0 mix-blend-plus-lighter">
        <Image
          src={image}
          alt={alt}
          fill
          priority={priority}
          className="object-cover"
          sizes="100vw"
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