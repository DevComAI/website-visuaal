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

// Fonction utilitaire pour logger avec horodatage et nom de scène
const logSplineDebug = (scene: string, stage: string, message: string, data?: unknown) => {
  const timestamp = new Date().toISOString().split('T')[1].slice(0, -1)
  const sceneName = scene.split('/').pop()?.split('.')[0] || 'unknown'
  console.log(`[${timestamp}] [Spline/${sceneName}] [${stage}] ${message}`, data || '')
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
  const mountTimeRef = useRef<number>(Date.now())
  const loadStartTimeRef = useRef<number | null>(null)

  // Log du montage du composant
  useEffect(() => {
    const mountTime = mountTimeRef.current
    logSplineDebug(scene, 'Lifecycle', '🟢 Composant monté', {
      interactive,
      priority,
      loadingDelay,
    })

    return () => {
      const lifetimeMs = Date.now() - mountTime
      logSplineDebug(scene, 'Lifecycle', '🔴 Composant démonté', {
        lifetimeMs: `${lifetimeMs}ms`,
        wasLoaded: isLoaded,
        hadError: hasError,
      })
    }
  }, [scene, interactive, priority, loadingDelay, isLoaded, hasError])

  // Charger toutes les scènes immédiatement (pas de lazy loading)
  // Le Service Worker + preloader gèrent déjà l'optimisation
  useEffect(() => {
    logSplineDebug(scene, 'Loading', `⏳ Chargement programmé dans ${loadingDelay}ms`)

    // Charger immédiatement avec un petit délai pour ne pas bloquer le rendu initial
    const timer = setTimeout(() => {
      logSplineDebug(scene, 'Loading', '▶️ Démarrage du chargement')
      loadStartTimeRef.current = Date.now()
      setShouldLoad(true)
    }, loadingDelay)

    return () => clearTimeout(timer)
  }, [loadingDelay, scene])

  // Interaction management
  useEffect(() => {
    if (!interactive || !isLoaded) return

    // Enable interactions immediately when loaded
    setIsInteractive(true)
    logSplineDebug(scene, 'Interaction', '🎮 Interactions activées')

    let scrollTimeout: NodeJS.Timeout
    let wheelTimeout: NodeJS.Timeout
    let eventCount = 0

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
      eventCount++
      if (eventCount % 50 === 0) {
        logSplineDebug(scene, 'Interaction', `📜 ${eventCount} événements scroll traités`)
      }
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
      logSplineDebug(scene, 'Interaction', '🎮 Nettoyage des interactions', {
        totalEvents: eventCount,
      })
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchend', handleTouchEnd)
      clearTimeout(scrollTimeout)
      clearTimeout(wheelTimeout)
    }
  }, [interactive, isLoaded, scene])

  const handleLoad = () => {
    const loadDuration = loadStartTimeRef.current ? Date.now() - loadStartTimeRef.current : 0
    logSplineDebug(scene, 'Loading', `✅ Chargement réussi en ${loadDuration}ms`)

    // Vérifier la mémoire après le chargement
    if ('memory' in performance) {
      const memory = (performance as { memory?: { usedJSHeapSize: number } }).memory
      if (memory) {
        logSplineDebug(scene, 'Memory', 'Après chargement', {
          usedJSHeapSize: `${(memory.usedJSHeapSize / 1048576).toFixed(2)} MB`,
        })
      }
    }

    setIsLoaded(true)
  }

  const handleError = (error?: unknown) => {
    const loadDuration = loadStartTimeRef.current ? Date.now() - loadStartTimeRef.current : 0
    logSplineDebug(scene, 'Loading', `❌ ERREUR de chargement après ${loadDuration}ms`, {
      error: error || 'Unknown error',
    })
    setHasError(true)
  }

  // Preload scene URL
  useEffect(() => {
    if (shouldLoad && !isLoaded) {
      logSplineDebug(scene, 'Prefetch', '🔗 Ajout du prefetch link')
      const link = document.createElement('link')
      link.rel = 'prefetch'
      link.href = scene
      document.head.appendChild(link)

      return () => {
        logSplineDebug(scene, 'Prefetch', '🗑️ Suppression du prefetch link')
        try {
          document.head.removeChild(link)
        } catch (e) {
          logSplineDebug(scene, 'Prefetch', '⚠️ Erreur lors de la suppression du prefetch', e)
        }
      }
    }
  }, [shouldLoad, scene, isLoaded])

  return (
    <div
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