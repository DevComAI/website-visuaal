'use client'

import { useState, useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
import SplinePlaceholder from './SplinePlaceholder'

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false
})

interface OptimizedSplineViewerProps {
  scene: string
  className?: string
  style?: React.CSSProperties
  interactive?: boolean
  priority?: boolean
  placeholder?: string
  loadingDelay?: number
  placeholderVariant?: 'gradient' | 'blur' | 'skeleton'
}

export default function OptimizedSplineViewer({
  scene,
  className,
  style,
  interactive = false,
  priority = false,
  placeholder,
  loadingDelay = 100,
  placeholderVariant = 'gradient'
}: OptimizedSplineViewerProps) {
  const [isInteractive, setIsInteractive] = useState(interactive)
  const [shouldLoad, setShouldLoad] = useState(priority)
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority) return
    if (shouldLoad) return

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting) {
          setTimeout(() => setShouldLoad(true), loadingDelay)
        }
      },
      {
        rootMargin: '400px',
        threshold: 0.01
      }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [priority, shouldLoad, loadingDelay])

  // Interaction management
  useEffect(() => {
    if (!interactive || !isLoaded) return

    // Enable interactions immediately when loaded
    setIsInteractive(true)

    let scrollTimeout: NodeJS.Timeout
    let wheelTimeout: NodeJS.Timeout

    const disableInteractions = () => {
      setIsInteractive(false)
    }

    const enableInteractions = () => {
      clearTimeout(scrollTimeout)
      clearTimeout(wheelTimeout)
      scrollTimeout = setTimeout(() => {
        setIsInteractive(true)
      }, 50)
    }

    const handleScroll = () => {
      disableInteractions()
      enableInteractions()
    }

    const handleWheel = () => {
      disableInteractions()
      clearTimeout(wheelTimeout)
      wheelTimeout = setTimeout(() => {
        setIsInteractive(true)
      }, 30)
    }

    const handleTouchStart = () => {
      disableInteractions()
    }

    const handleTouchEnd = () => {
      enableInteractions()
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('wheel', handleWheel, { passive: true })
    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchend', handleTouchEnd, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchend', handleTouchEnd)
      clearTimeout(scrollTimeout)
      clearTimeout(wheelTimeout)
    }
  }, [interactive, isLoaded])

  const handleLoad = () => {
    setIsLoaded(true)
  }

  const handleError = () => {
    setHasError(true)
    console.error('Failed to load Spline scene:', scene)
  }

  // Preload scene URL
  useEffect(() => {
    if (shouldLoad && !isLoaded) {
      const link = document.createElement('link')
      link.rel = 'prefetch'
      link.href = scene
      document.head.appendChild(link)

      return () => {
        document.head.removeChild(link)
      }
    }
  }, [shouldLoad, scene, isLoaded])

  return (
    <div
      ref={containerRef}
      data-spline-container
      className={`w-full h-full flex items-center justify-center relative ${className || ''}`}
    >
      {!shouldLoad && <SplinePlaceholder variant={placeholderVariant} placeholder={placeholder} />}

      {shouldLoad && !hasError && (
        <>
          {!isLoaded && <SplinePlaceholder variant={placeholderVariant} placeholder={placeholder} showProgress progress={50} />}
          <div
            className={`w-full h-full transition-opacity duration-500 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Spline
              scene={scene}
              onLoad={handleLoad}
              onError={handleError}
              style={{
                ...style,
                pointerEvents: isInteractive ? 'auto' : 'none',
                transition: 'all 0.1s ease'
              }}
            />
          </div>
        </>
      )}

      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="text-red-400 text-4xl">⚠️</div>
            <p className="text-white/60 text-sm">Failed to load 3D content</p>
            <button
              onClick={() => {
                setHasError(false)
                setShouldLoad(true)
              }}
              aria-label="Retry loading 3D content"
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              Retry
            </button>
          </div>
        </div>
      )}
    </div>
  )
}