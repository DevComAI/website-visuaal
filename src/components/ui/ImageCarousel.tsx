'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import AnimatedBorder from '@/components/ui/AnimatedBorder'

interface ImageCarouselProps {
  images: string[]
  autoPlay?: boolean
  interval?: number
}

const ImageCarousel = ({ 
  images, 
  autoPlay = true, 
  interval = 4000 
}: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const goToPrevious = () => {
    if (isTransitioning) return
    
    setIsTransitioning(true)
    setCurrentIndex(prev => prev === 0 ? images.length - 1 : prev - 1)
    
    setTimeout(() => setIsTransitioning(false), 800)
  }

  const goToNext = useCallback(() => {
    if (isTransitioning) return
    
    setIsTransitioning(true)
    setCurrentIndex(prev => (prev + 1) % images.length)
    
    setTimeout(() => setIsTransitioning(false), 800)
  }, [isTransitioning, images.length])

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return
    
    setIsTransitioning(true)
    setCurrentIndex(index)
    
    setTimeout(() => setIsTransitioning(false), 800)
  }

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay) return

    const intervalId = setInterval(() => {
      if (!isTransitioning) {
        goToNext()
      }
    }, interval)

    return () => clearInterval(intervalId)
  }, [autoPlay, interval, isTransitioning, goToNext])

  // Calculate image positions for visible images
  const getImageStyle = (imageIndex: number) => {
    const distance = imageIndex - currentIndex
    // const absDistance = Math.abs(distance) // Removed unused variable
    
    // Show 3 images: prev, current, next (handle wrapping)
    let adjustedDistance = distance
    
    // Handle wrap-around for previous image
    if (distance > images.length / 2) {
      adjustedDistance = distance - images.length
    } else if (distance < -images.length / 2) {
      adjustedDistance = distance + images.length
    }
    
    // Only show images that are within 1 position of current
    if (Math.abs(adjustedDistance) > 1) {
      return { display: 'none' }
    }

    let translateX = 0
    let scale = 1
    let opacity = 1
    let zIndex = 1

    if (adjustedDistance === 0) {
      // Current image (center)
      translateX = 0
      scale = 1.1
      zIndex = 10
      opacity = 1
    } else if (adjustedDistance === 1) {
      // Next image (right)
      translateX = 105  // Increased spacing between images
      scale = 0.9
      opacity = 0.7
      zIndex = 5
    } else if (adjustedDistance === -1) {
      // Previous image (left)
      translateX = -105  // Increased spacing between images
      scale = 0.9
      opacity = 0.7
      zIndex = 5
    }

    return {
      transform: `translateX(${translateX}%) scale(${scale}) translateZ(0)`,
      opacity,
      zIndex,
      transition: isTransitioning 
        ? 'all 800ms cubic-bezier(0.25, 0.8, 0.25, 1)' 
        : 'all 400ms ease-out',
      willChange: 'transform, opacity'
    }
  }

  return (
    <div className="relative w-full mx-auto overflow-hidden py-4">
      {/* Bouton navigation gauche */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 z-20">
        <div 
          className="relative p-[1px] rounded-full w-12 h-12 transition-transform duration-300 ease-out hover:scale-110"
          style={{
            background: 'linear-gradient(45deg, #473FB9, #4DA8D7, #9512B6)',
            backgroundSize: '100% 100%'
          }}
        >
          <button
            onClick={goToPrevious}
            disabled={isTransitioning}
            className="w-full h-full rounded-full bg-[#372F39] text-white disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shadow-lg"
            style={{
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden'
            }}
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Container principal des images */}
      <div className="relative h-[400px] flex items-center justify-center px-8">
        {images.map((image, index) => {
          const style = getImageStyle(index)
          if (style.display === 'none') return null
          
          return (
            <div
              key={index}
              className="absolute flex items-center justify-center"
              style={{
                ...style,
                width: '600px',
                height: '337px',
                left: '50%',
                top: '50%',
                marginLeft: '-300px',
                marginTop: '-168.5px'
              }}
            >
            {/* Container pour l'image */}
            <AnimatedBorder className="w-full h-full" borderRadius="0.5rem">
                <Image
                  src={image}
                  alt={`Support image ${index + 1}`}
                  width={600}
                  height={337}
                  className="w-full h-full object-cover rounded-lg"
                  style={{
                    transform: 'translateZ(0)',
                    backfaceVisibility: 'hidden'
                  }}
                  priority={index === currentIndex}
                  sizes="600px"
                />
                
                {/* Overlay pour les images non centrales */}
                {index !== currentIndex && (
                  <>
                    {/* Calculer la position relative pour les dégradés */}
                    {(() => {
                      const distance = index - currentIndex
                      let adjustedDistance = distance
                      
                      // Handle wrap-around
                      if (distance > images.length / 2) {
                        adjustedDistance = distance - images.length
                      } else if (distance < -images.length / 2) {
                        adjustedDistance = distance + images.length
                      }
                      
                      if (adjustedDistance === -1) {
                        // Image de gauche : dégradé de gauche vers transparent
                        return (
                          <div 
                            className="absolute inset-0 bg-gradient-to-r from-[#211824] to-transparent"
                            style={{
                              transition: 'opacity 800ms cubic-bezier(0.25, 0.8, 0.25, 1)'
                            }}
                          />
                        )
                      } else if (adjustedDistance === 1) {
                        // Image de droite : dégradé de droite vers transparent
                        return (
                          <div 
                            className="absolute inset-0 bg-gradient-to-l from-[#211824] to-transparent"
                            style={{
                              transition: 'opacity 800ms cubic-bezier(0.25, 0.8, 0.25, 1)'
                            }}
                          />
                        )
                      }
                      return null
                    })()}
                    
                    {/* Overlay général pour assombrir légèrement */}
                    <div 
                      className="absolute inset-0 bg-[#211824]/20"
                      style={{
                        transition: 'opacity 800ms cubic-bezier(0.25, 0.8, 0.25, 1)'
                      }}
                    />
                  </>
                )}
            </AnimatedBorder>
            </div>
          )
        })}
      </div>

      {/* Bouton navigation droite */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 z-20">
        <div 
          className="relative p-[1px] rounded-full w-12 h-12 transition-transform duration-300 ease-out hover:scale-110"
          style={{
            background: 'linear-gradient(45deg, #473FB9, #4DA8D7, #9512B6)',
            backgroundSize: '100% 100%'
          }}
        >
          <button
            onClick={goToNext}
            disabled={isTransitioning}
            className="w-full h-full rounded-full bg-[#372F39] text-white disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shadow-lg"
            style={{
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden'
            }}
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Indicateurs */}
      <div className="flex justify-center mt-6 space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isTransitioning}
            className={`w-3 h-3 rounded-full transition-all duration-500 ease-out disabled:cursor-not-allowed ${
              currentIndex === index 
                ? 'bg-white scale-125 shadow-md' 
                : 'bg-white/40 hover:bg-white/70 hover:scale-110'
            }`}
            style={{
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden'
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </div>
  )
}

export default ImageCarousel