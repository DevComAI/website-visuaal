'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

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

  // Créer un tableau infini en dupliquant les images
  const infiniteImages = [...images, ...images, ...images]
  const startIndex = images.length

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(startIndex + index)
  }

  // Gérer le défilement infini
  useEffect(() => {
    if (currentIndex >= images.length * 2) {
      setTimeout(() => setCurrentIndex(startIndex), 300)
    } else if (currentIndex < 0) {
      setTimeout(() => setCurrentIndex(startIndex + images.length - 1), 300)
    }
  }, [currentIndex, images.length, startIndex])

  useEffect(() => {
    if (!autoPlay) return

    const intervalId = setInterval(() => {
      goToNext()
    }, interval)

    return () => clearInterval(intervalId)
  }, [autoPlay, interval])

  // Calculer les indices des images visibles
  const getVisibleImages = () => {
    const prevIndex = currentIndex - 1
    const nextIndex = currentIndex + 1
    
    return [
      { index: prevIndex, position: 'left' },
      { index: currentIndex, position: 'center' },
      { index: nextIndex, position: 'right' }
    ]
  }

  const visibleImages = getVisibleImages()

  return (
    <div className="relative w-full mx-auto">
      {/* Bouton navigation gauche */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-black p-3 rounded-full transition-colors duration-200"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>

      {/* Container des images */}
      <div className="flex items-center justify-center gap-4 px-16" style={{height: '400px'}}>
        {visibleImages.map((item, idx) => (
          <div
            key={idx}
            className={`relative transition-all duration-300 ease-in-out rounded-lg ${
              item.position === 'center'
                ? 'scale-110 z-10'
                : 'scale-90 opacity-70'
            }`}
            style={{
              background: item.position === 'center' 
                ? 'linear-gradient(45deg, #1691B0, #59186A)'
                : item.position === 'left'
                  ? 'linear-gradient(to right, #211824 20%, transparent 100%)'
                  : 'linear-gradient(to left, #211824 20%, transparent 100%)',
              width: '602px',
              height: '339px',
              padding: '1px'
            }}
          >
            <div 
              className="w-full h-full rounded-lg overflow-hidden relative"
              style={{
                width: '600px',
                height: '337px'
              }}
            >
              <Image
                src={infiniteImages[item.index % infiniteImages.length]}
                alt={`Support image ${(item.index % images.length) + 1}`}
                width={600}
                height={337}
                className="w-full h-full object-cover"
                sizes="600px"
              />
              {item.position !== 'center' && (
                <div 
                  className="absolute inset-0"
                  style={{
                    background: item.position === 'left' 
                      ? 'linear-gradient(to right,  #211824 20%, transparent 100%)'
                      : 'linear-gradient(to left, #211824 20%, transparent 100%)'
                  }}
                />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Bouton navigation droite */}
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-black p-3 rounded-full transition-colors duration-200"
        aria-label="Next image"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      {/* Indicateurs */}
      <div className="flex justify-center mt-6 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              (currentIndex - startIndex + images.length) % images.length === index 
                ? 'bg-white' 
                : 'bg-white/40'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default ImageCarousel