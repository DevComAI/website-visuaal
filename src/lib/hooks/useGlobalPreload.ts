'use client';

import { useEffect, useState, useCallback } from 'react';
import { globalPreloader, type PreloadProgress } from '../spline-preloader';

interface UseGlobalPreloadOptions {
  /** Délai avant de démarrer le préchargement (ms) */
  startDelay?: number;
  /** Démarrer automatiquement le préchargement */
  autoStart?: boolean;
}

interface UseGlobalPreloadReturn {
  /** Progrès actuel du préchargement */
  progress: PreloadProgress;
  /** Préchargement terminé (100%) */
  isComplete: boolean;
  /** Préchargement en cours */
  isLoading: boolean;
  /** Démarre manuellement le préchargement */
  startPreload: () => Promise<void>;
  /** Réinitialise le préchargement */
  reset: () => void;
}

/**
 * Hook pour gérer le préchargement global des scènes Spline
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

  // Calculer si le préchargement est terminé
  const isComplete = progress.loaded === progress.total && progress.total > 0;

  /**
   * Démarre le préchargement
   */
  const startPreload = useCallback(async () => {
    if (isLoading) {
      console.log('[useGlobalPreload] Préchargement déjà en cours');
      return;
    }

    setIsLoading(true);

    try {
      await globalPreloader.preloadAll(startDelay);
    } catch (error) {
      console.error('[useGlobalPreload] Erreur lors du préchargement:', error);
    } finally {
      setIsLoading(false);
    }
  }, [isLoading, startDelay]);

  /**
   * Réinitialise le préchargement
   */
  const reset = useCallback(() => {
    globalPreloader.reset();
    setProgress(globalPreloader.getProgress());
    setIsLoading(false);
  }, []);

  /**
   * S'abonner aux changements de progrès
   */
  useEffect(() => {
    const unsubscribe = globalPreloader.onProgress((newProgress) => {
      setProgress(newProgress);
    });

    // Obtenir le progrès initial
    setProgress(globalPreloader.getProgress());

    return unsubscribe;
  }, []);

  /**
   * Démarrer automatiquement si demandé
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
 * Hook pour attendre qu'une scène spécifique soit chargée
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
    // Vérifier immédiatement si déjà chargée
    if (globalPreloader.isSceneLoaded(sceneUrl)) {
      setIsLoaded(true);
      return;
    }

    // Sinon, attendre le chargement
    globalPreloader.waitForScene(sceneUrl).then(() => {
      setIsLoaded(true);
    });

    // S'abonner aux changements de progrès pour détecter le chargement
    const unsubscribe = globalPreloader.onProgress(() => {
      if (globalPreloader.isSceneLoaded(sceneUrl)) {
        setIsLoaded(true);
      }
    });

    return unsubscribe;
  }, [sceneUrl]);

  return isLoaded;
}
