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
 * Hook pour gérer le préchargement des scènes de la page courante
 * Attend que toutes les scènes nécessaires soient en cache avant d'afficher la page
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
    // TOUJOURS afficher l'écran de chargement, même si pas de scènes
    // Cela masque la réinitialisation des composants et donne une UX cohérente
    setState((prev) => ({
      ...prev,
      isLoading: true,
      scenesTotal: scenes.length,
      scenesLoaded: 0,
      progress: 0,
      isReady: false,
    }));

    if (scenes.length === 0) {
      // Pas de scènes Spline, mais on affiche quand même l'écran pendant 500ms
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

    // Attendre que toutes les scènes soient prêtes
    let loadedCount = 0;
    let lastLoadedCount = 0;
    let hasTimedOut = false;
    let minDelayReached = false;
    let cleanupDone = false;

    const checkProgress = () => {
      if (hasTimedOut || cleanupDone) return;

      loadedCount = scenes.filter((url) => globalPreloader.isSceneLoaded(url)).length;

      // Ne mettre à jour que si le nombre de scènes chargées a changé
      if (loadedCount !== lastLoadedCount) {
        lastLoadedCount = loadedCount;
        const progress = (loadedCount / scenes.length) * 100;

        setState((prev) => ({
          ...prev,
          progress,
          scenesLoaded: loadedCount,
          isReady: false, // Toujours false tant que le délai minimum n'est pas écoulé
        }));
      }

      // Attendre que TOUTES les conditions soient remplies :
      // 1. Toutes les scènes sont chargées (ou en cache)
      // 2. Le délai minimum est écoulé (pour masquer la réinitialisation)
      if (loadedCount === scenes.length && minDelayReached) {
        // Tout est prêt !
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
        }, 300); // Petit délai supplémentaire pour la transition fade
      }
    };

    // Délai minimum de 1 seconde pour TOUTES les navigations
    // Cela masque complètement la réinitialisation des composants Spline
    const minDelay = setTimeout(() => {
      minDelayReached = true;
      checkProgress(); // Re-vérifier après le délai minimum
    }, 1000); // 1 seconde minimum pour une expérience cohérente

    // S'abonner aux changements de progression
    const unsubscribe = globalPreloader.onProgress(() => {
      checkProgress();
    });

    // Vérifier périodiquement au cas où
    const interval = setInterval(checkProgress, 200);

    // Timeout de sécurité : si après 15 secondes les scènes ne sont pas chargées, afficher quand même
    const timeout = setTimeout(() => {
      console.warn('[PagePreload] Timeout atteint, affichage de la page...');
      hasTimedOut = true;
      cleanupDone = true;
      setState((prev) => ({
        ...prev,
        isLoading: false,
        isReady: true,
      }));
    }, 15000); // 15 secondes

    // Vérifier immédiatement
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
    // Obtenir les scènes nécessaires pour cette route
    const scenes = getScenesForRoute(pathname);

    console.log(`[PagePreload] Route: ${pathname}, Scènes: ${scenes.length}`);

    // Vérifier si les scènes sont prêtes
    const cleanup = checkScenesReady(scenes);

    return cleanup;
  }, [pathname, checkScenesReady]);

  // Démarrer le préchargement global une seule fois au montage
  useEffect(() => {
    globalPreloader.preloadAll(500).catch((err) => {
      console.error('[PagePreload] Erreur préchargement:', err);
    });
  }, []); // Seulement au montage initial

  return state;
}
