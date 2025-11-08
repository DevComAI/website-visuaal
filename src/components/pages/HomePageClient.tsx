'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import GradientButton from '@/components/ui/GradientButton'

interface MobileGradientTextProps {
  children: string
  className?: string
}

export function MobileGradientText({ children, className = "" }: MobileGradientTextProps) {
  const [animationDelay, setAnimationDelay] = useState(0)

  useEffect(() => {
    setAnimationDelay(Math.random() * 12)
  }, [])

  return (
    <>
      <style jsx>{`
        .gradient-text {
          background: linear-gradient(
            45deg,
            #473FB9,
            #4DA8D7,
            #9512B6,
            #473FB9,
            #158BBD,
            #C82EF0
          );
          background-size: 400% 400%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientFlow 12s ease-in-out infinite;
          animation-delay: ${animationDelay}s;
        }

        @keyframes gradientFlow {
          0%, 100% {
            background-position: 0% 50%;
          }
          25% {
            background-position: 100% 0%;
          }
          50% {
            background-position: 100% 100%;
          }
          75% {
            background-position: 0% 100%;
          }
        }
      `}</style>
      <span className={`gradient-text ${className}`}>
        {children}
      </span>
    </>
  )
}

export function MobileGradientButton({ href, text, className = "" }: { href: string; text: string; className?: string }) {
  return <GradientButton href={href} text={text} className={className} />
}

interface MobileTitleHomeProps {
  topText?: string | React.ReactNode
  bottomText: string | React.ReactNode
  backgroundImage?: string
  className?: string
}

export function MobileTitleHome({ topText, bottomText, backgroundImage, className = "" }: MobileTitleHomeProps) {
  return (
    <section className={`relative py-8 sm:py-12 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6">
        {backgroundImage && (
          <div className="flex items-center justify-center overflow-hidden">
            <div
              className="w-full h-[100px] sm:h-[200px] bg-no-repeat bg-center opacity-10"
              style={{
                backgroundImage: `url('/title/${backgroundImage}')`,
                backgroundSize: 'contain',
                maxWidth: '100%'
              }}
            />
          </div>
        )}

        <div className="text-center w-full text-[24px] -mt-12">
          {topText && (
            <div className="font-medium text-white leading-tight ">
              {topText}
            </div>
          )}
          {bottomText && (
            <h2 className="font-medium text-white leading-7">
              {bottomText}
            </h2>
          )}
        </div>
      </div>
    </section>
  )
}

interface WorkingCarouselProps {
  scenes: Array<{
    image: string
    alt: string
    title: string
    description: string
  }>
}

export function WorkingCarousel({ scenes }: WorkingCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <section className="py-8">
      <div className="relative">
        {/* Previous Button */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev === 0 ? 2 : prev - 1))}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        {/* Next Button */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1))}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>

        <div className="overflow-hidden">
          <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {scenes.map((scene, index) => (
              <div key={index} className="min-w-full flex flex-col items-center px-4">
                <div className="h-[280px] w-full relative flex items-center justify-center mb-6">
                  <Image
                    src={scene.image}
                    alt={scene.alt}
                    fill
                    className="object-contain mix-blend-plus-lighter"
                    sizes="100vw"
                    priority={currentSlide === index}
                  />
                </div>
                <div className="max-w-lg space-y-4 text-center px-6">
                  <h3 className="text-lg font-bold text-white">{scene.title}</h3>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    {scene.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-white w-8' : 'bg-white/30'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
