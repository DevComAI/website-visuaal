'use client';

import { ReactNode } from 'react';
import { usePagePreload } from '@/lib/hooks/usePagePreload';
import { PageLoadingScreen } from '../ui/PageLoadingScreen';

interface PageReadyProviderProps {
  children: ReactNode;
}

/**
 * Provider qui affiche un écran de chargement jusqu'à ce que
 * toutes les scènes Spline de la page soient prêtes
 */
export function PageReadyProvider({ children }: PageReadyProviderProps) {
  const { isLoading, progress, scenesLoaded, scenesTotal, currentScene, isReady } = usePagePreload();

  return (
    <>
      {/* Écran de chargement */}
      <PageLoadingScreen
        isLoading={isLoading}
        progress={progress}
        scenesLoaded={scenesLoaded}
        scenesTotal={scenesTotal}
        currentScene={currentScene}
      />

      {/* Contenu de la page - caché pendant le chargement */}
      <div
        className={`transition-opacity duration-500 ${
          isReady ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {children}
      </div>
    </>
  );
}
