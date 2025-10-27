'use client'

import { useEffect, useState, useCallback } from 'react'

interface SplinePreloaderOptions {
  priority?: 'high' | 'normal' | 'low'
  timeout?: number
  retries?: number
}

interface PreloadStatus {
  isLoading: boolean
  isLoaded: boolean
  error: Error | null
  progress: number
}

const preloadedScenes = new Map<string, boolean>()
const loadingScenes = new Map<string, Promise<void>>()

export function useSplinePreloader(
  sceneUrl: string,
  options: SplinePreloaderOptions = {}
): PreloadStatus {
  const { priority = 'normal', timeout = 30000, retries = 3 } = options
  const [status, setStatus] = useState<PreloadStatus>({
    isLoading: false,
    isLoaded: preloadedScenes.has(sceneUrl),
    error: null,
    progress: 0
  })

  const preloadScene = useCallback(async (url: string, attempt = 1): Promise<void> => {
    if (preloadedScenes.has(url)) {
      setStatus(prev => ({ ...prev, isLoaded: true, isLoading: false, progress: 100 }))
      return
    }

    if (loadingScenes.has(url)) {
      await loadingScenes.get(url)
      setStatus(prev => ({ ...prev, isLoaded: true, isLoading: false, progress: 100 }))
      return
    }

    const loadPromise = new Promise<void>(async (resolve, reject) => {
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), timeout)

      try {
        setStatus(prev => ({ ...prev, isLoading: true, progress: 0 }))

        // Simulate progress updates
        const progressInterval = setInterval(() => {
          setStatus(prev => ({
            ...prev,
            progress: Math.min(prev.progress + Math.random() * 30, 90)
          }))
        }, 500)

        const response = await fetch(url, {
          signal: controller.signal,
          priority: priority === 'high' ? 'high' : priority === 'low' ? 'low' : 'auto'
        } as RequestInit)

        clearInterval(progressInterval)
        clearTimeout(timeoutId)

        if (!response.ok) {
          throw new Error(`Failed to preload Spline scene: ${response.status}`)
        }

        // Cache the response
        await response.blob()

        preloadedScenes.set(url, true)
        setStatus({
          isLoading: false,
          isLoaded: true,
          error: null,
          progress: 100
        })

        resolve()
      } catch (error) {
        clearTimeout(timeoutId)

        if (attempt < retries) {
          console.log(`Retrying Spline preload (${attempt}/${retries})...`)
          await new Promise(resolve => setTimeout(resolve, 1000 * attempt))
          return preloadScene(url, attempt + 1)
        }

        const err = error as Error
        setStatus({
          isLoading: false,
          isLoaded: false,
          error: err,
          progress: 0
        })
        reject(err)
      }
    })

    loadingScenes.set(url, loadPromise)

    try {
      await loadPromise
    } finally {
      loadingScenes.delete(url)
    }
  }, [priority, timeout, retries])

  useEffect(() => {
    if (sceneUrl && !status.isLoaded && !status.isLoading) {
      preloadScene(sceneUrl)
    }
  }, [sceneUrl, status.isLoaded, status.isLoading, preloadScene])

  return status
}

// Utility function to preload multiple scenes
export async function preloadSplineScenes(urls: string[]): Promise<void> {
  const promises = urls.map(url => {
    if (!preloadedScenes.has(url)) {
      return fetch(url, { priority: 'low' as RequestPriority } as RequestInit)
        .then(response => response.blob())
        .then(() => {
          preloadedScenes.set(url, true)
        })
        .catch(error => {
          console.error(`Failed to preload ${url}:`, error)
        })
    }
    return Promise.resolve()
  })

  await Promise.all(promises)
}

// Clear cache utility
export function clearSplineCache(url?: string): void {
  if (url) {
    preloadedScenes.delete(url)
    loadingScenes.delete(url)
  } else {
    preloadedScenes.clear()
    loadingScenes.clear()
  }
}