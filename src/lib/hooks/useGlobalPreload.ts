'use client';

import { useEffect, useState, useCallback } from 'react';
import { globalPreloader, type PreloadProgress } from '../spline-preloader';

interface UseGlobalPreloadOptions {
  /** Delay before starting preload (ms) */
  startDelay?: number;
  /** Start preload automatically */
  autoStart?: boolean;
}

interface UseGlobalPreloadReturn {
  /** Current preload progress */
  progress: PreloadProgress;
  /** Preload complete (100%) */
  isComplete: boolean;
  /** Preload in progress */
  isLoading: boolean;
  /** Manually start preload */
  startPreload: () => Promise<void>;
  /** Reset preload */
  reset: () => void;
}

/**
 * Hook to manage global preloading of Spline scenes
 *
 * @example
 * ```tsx
 * const { progress, isComplete } = useGlobalPreload();
 *
 * return (
 *   <div>
 *     {!isComplete && (
 *       <div>Chargement: {progress.percentage.toFixed(0)}%</div>
 *     )}
 *   </div>
 * );
 * ```
 */
export function useGlobalPreload(options: UseGlobalPreloadOptions = {}): UseGlobalPreloadReturn {
  const { startDelay = 2000, autoStart = true } = options;

  const [progress, setProgress] = useState<PreloadProgress>(globalPreloader.getProgress());
  const [isLoading, setIsLoading] = useState(false);

  // Calculate if preloading is complete
  const isComplete = progress.loaded === progress.total && progress.total > 0;

  /**
   * Start preloading
   */
  const startPreload = useCallback(async () => {
    if (isLoading) {
      console.log('[useGlobalPreload] Preloading already in progress');
      return;
    }

    setIsLoading(true);

    try {
      await globalPreloader.preloadAll(startDelay);
    } catch (error) {
      console.error('[useGlobalPreload] Error during preload:', error);
    } finally {
      setIsLoading(false);
    }
  }, [isLoading, startDelay]);

  /**
   * Reset preloading
   */
  const reset = useCallback(() => {
    globalPreloader.reset();
    setProgress(globalPreloader.getProgress());
    setIsLoading(false);
  }, []);

  /**
   * Subscribe to progress changes
   */
  useEffect(() => {
    const unsubscribe = globalPreloader.onProgress((newProgress) => {
      setProgress(newProgress);
    });

    // Get initial progress
    setProgress(globalPreloader.getProgress());

    return unsubscribe;
  }, []);

  /**
   * Auto-start if requested
   */
  useEffect(() => {
    if (autoStart && !isLoading && !isComplete) {
      startPreload();
    }
  }, [autoStart, isLoading, isComplete, startPreload]);

  return {
    progress,
    isComplete,
    isLoading,
    startPreload,
    reset,
  };
}

/**
 * Hook to wait for a specific scene to be loaded
 *
 * @example
 * ```tsx
 * const isLoaded = useScenePreload('https://prod.spline.design/...');
 *
 * return isLoaded ? <SplineViewer /> : <Placeholder />;
 * ```
 */
export function useScenePreload(sceneUrl: string): boolean {
  const [isLoaded, setIsLoaded] = useState(globalPreloader.isSceneLoaded(sceneUrl));

  useEffect(() => {
    // Check immediately if already loaded
    if (globalPreloader.isSceneLoaded(sceneUrl)) {
      setIsLoaded(true);
      return;
    }

    // Otherwise, wait for loading
    globalPreloader.waitForScene(sceneUrl).then(() => {
      setIsLoaded(true);
    });

    // Subscribe to progress changes to detect loading
    const unsubscribe = globalPreloader.onProgress(() => {
      if (globalPreloader.isSceneLoaded(sceneUrl)) {
        setIsLoaded(true);
      }
    });

    return unsubscribe;
  }, [sceneUrl]);

  return isLoaded;
}
