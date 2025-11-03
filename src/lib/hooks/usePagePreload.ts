'use client';

import { useEffect, useState, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { getScenesForRoute } from '../spline-route-map';
import { globalPreloader } from '../spline-preloader';

interface PagePreloadState {
  isLoading: boolean;
  progress: number;
  scenesLoaded: number;
  scenesTotal: number;
  currentScene?: string;
  isReady: boolean;
}

/**
 * Hook to manage preloading of current page scenes
 * Waits for all necessary scenes to be cached before displaying page
 */
export function usePagePreload() {
  const pathname = usePathname();
  const [state, setState] = useState<PagePreloadState>({
    isLoading: true,
    progress: 0,
    scenesLoaded: 0,
    scenesTotal: 0,
    currentScene: undefined,
    isReady: false,
  });

  const checkScenesReady = useCallback((scenes: string[]) => {
    // ALWAYS show loading screen, even if no scenes
    // This hides component reset and provides consistent UX
    setState((prev) => ({
      ...prev,
      isLoading: true,
      scenesTotal: scenes.length,
      scenesLoaded: 0,
      progress: 0,
      isReady: false,
    }));

    if (scenes.length === 0) {
      // No Spline scenes, but still show screen for 500ms
      const timer = setTimeout(() => {
        setState({
          isLoading: false,
          progress: 100,
          scenesLoaded: 0,
          scenesTotal: 0,
          isReady: true,
        });
      }, 500);

      return () => clearTimeout(timer);
    }

    // Wait until all scenes are ready
    let loadedCount = 0;
    let lastLoadedCount = 0;
    let hasTimedOut = false;
    let minDelayReached = false;
    let cleanupDone = false;

    const checkProgress = () => {
      if (hasTimedOut || cleanupDone) return;

      loadedCount = scenes.filter((url) => globalPreloader.isSceneLoaded(url)).length;

      // Only update if the number of loaded scenes has changed
      if (loadedCount !== lastLoadedCount) {
        lastLoadedCount = loadedCount;
        const progress = (loadedCount / scenes.length) * 100;

        setState((prev) => ({
          ...prev,
          progress,
          scenesLoaded: loadedCount,
          isReady: false, // Always false until minimum delay has elapsed
        }));
      }

      // Wait until ALL conditions are met:
      // 1. All scenes are loaded (or cached)
      // 2. Minimum delay has elapsed (to hide reset)
      if (loadedCount === scenes.length && minDelayReached) {
        // Everything is ready!
        cleanupDone = true;
        unsubscribe();
        clearInterval(interval);
        clearTimeout(timeout);
        clearTimeout(minDelay);

        setTimeout(() => {
          setState((prev) => ({
            ...prev,
            isLoading: false,
            isReady: true,
          }));
        }, 300); // Small additional delay for fade transition
      }
    };

    // Minimum 1 second delay for ALL navigations
    // This completely hides the reset of Spline components
    const minDelay = setTimeout(() => {
      minDelayReached = true;
      checkProgress(); // Re-check after minimum delay
    }, 1000); // 1 second minimum for consistent experience

    // Subscribe to progress changes
    const unsubscribe = globalPreloader.onProgress(() => {
      checkProgress();
    });

    // Check periodically just in case
    const interval = setInterval(checkProgress, 200);

    // Safety timeout: if after 15 seconds scenes aren't loaded, show anyway
    const timeout = setTimeout(() => {
      console.warn('[PagePreload] Timeout reached, displaying page...');
      hasTimedOut = true;
      cleanupDone = true;
      setState((prev) => ({
        ...prev,
        isLoading: false,
        isReady: true,
      }));
    }, 15000); // 15 seconds

    // Check immediately
    checkProgress();

    // Cleanup
    return () => {
      unsubscribe();
      clearInterval(interval);
      clearTimeout(timeout);
      clearTimeout(minDelay);
    };
  }, []);

  useEffect(() => {
    // Get necessary scenes for this route
    const scenes = getScenesForRoute(pathname);

    console.log(`[PagePreload] Route: ${pathname}, Scènes: ${scenes.length}`);

    // Check if scenes are ready
    const cleanup = checkScenesReady(scenes);

    return cleanup;
  }, [pathname, checkScenesReady]);

  // Start global preloading once on mount
  useEffect(() => {
    globalPreloader.preloadAll(500).catch((err) => {
      console.error('[PagePreload] Preload error:', err);
    });
  }, []); // Only on initial mount

  return state;
}
