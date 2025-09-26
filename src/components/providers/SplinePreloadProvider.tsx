'use client'

import { createContext, useContext, useEffect, ReactNode } from 'react'
import { preloadSplineScenes } from '@/lib/hooks/useSplinePreloader'

interface SplinePreloadContextValue {
  preloadScene: (url: string) => void
  preloadScenes: (urls: string[]) => void
}

const SplinePreloadContext = createContext<SplinePreloadContextValue | null>(null)

interface SplinePreloadProviderProps {
  children: ReactNode
  initialScenes?: string[]
  preloadOnIdle?: boolean
}

export function SplinePreloadProvider({
  children,
  initialScenes = [],
  preloadOnIdle = true
}: SplinePreloadProviderProps) {

  // Preload initial scenes on mount
  useEffect(() => {
    if (initialScenes.length > 0) {
      // Priority preload for initial scenes
      preloadSplineScenes(initialScenes)
    }
  }, [initialScenes])

  // Preload additional scenes when browser is idle
  useEffect(() => {
    if (!preloadOnIdle) return

    const additionalScenes = [
      // Add common Spline scene URLs here
      // These will be preloaded when the browser is idle
    ]

    if (additionalScenes.length === 0) return

    let idleCallbackId: number

    const preloadOnIdleCallback = () => {
      preloadSplineScenes(additionalScenes)
    }

    if ('requestIdleCallback' in window) {
      idleCallbackId = window.requestIdleCallback(preloadOnIdleCallback, {
        timeout: 5000
      })
    } else {
      // Fallback for browsers that don't support requestIdleCallback
      const timeoutId = setTimeout(preloadOnIdleCallback, 2000)
      return () => clearTimeout(timeoutId)
    }

    return () => {
      if ('cancelIdleCallback' in window && idleCallbackId) {
        window.cancelIdleCallback(idleCallbackId)
      }
    }
  }, [preloadOnIdle])

  const contextValue: SplinePreloadContextValue = {
    preloadScene: (url: string) => preloadSplineScenes([url]),
    preloadScenes: (urls: string[]) => preloadSplineScenes(urls)
  }

  return (
    <SplinePreloadContext.Provider value={contextValue}>
      {children}
    </SplinePreloadContext.Provider>
  )
}

export function useSplinePreload() {
  const context = useContext(SplinePreloadContext)
  if (!context) {
    throw new Error('useSplinePreload must be used within SplinePreloadProvider')
  }
  return context
}