'use client';

import { useGlobalPreload } from '@/lib/hooks/useGlobalPreload';
import { useState, useEffect } from 'react';

interface PreloadIndicatorProps {
  /** Afficher l'indicateur même quand terminé (pour debug) */
  persistWhenComplete?: boolean;
  /** Position de l'indicateur */
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  /** Délai avant de masquer l'indicateur une fois terminé (ms) */
  hideDelay?: number;
}

/**
 * Indicateur visuel du préchargement des scènes Spline
 * Affiche une barre de progression discrète en bas à droite
 */
export default function PreloadIndicator({
  persistWhenComplete = false,
  position = 'bottom-right',
  hideDelay = 2000,
}: PreloadIndicatorProps) {
  const { progress, isComplete, isLoading } = useGlobalPreload();
  const [isVisible, setIsVisible] = useState(true);

  // Masquer l'indicateur après un délai quand le préchargement est terminé
  useEffect(() => {
    if (isComplete && !persistWhenComplete) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, hideDelay);

      return () => clearTimeout(timer);
    }
  }, [isComplete, persistWhenComplete, hideDelay]);

  // Ne pas afficher si pas de préchargement en cours et terminé
  if (!isVisible || (!isLoading && isComplete && !persistWhenComplete)) {
    return null;
  }

  // Calculer la position CSS
  const positionClasses = {
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4',
  };

  const percentage = Math.round(progress.percentage);
  const loadedScenes = progress.loaded;
  const totalScenes = progress.total;

  return (
    <div
      className={`fixed ${positionClasses[position]} z-[100] transition-all duration-500 ${
        isComplete ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
      }`}
    >
      <div className="bg-black/90 backdrop-blur-sm text-white px-4 py-3 rounded-lg shadow-2xl border border-white/10 min-w-[280px]">
        {/* Header */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            {isLoading && !isComplete && (
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            )}
            {isComplete && (
              <div className="w-2 h-2 bg-green-500 rounded-full" />
            )}
            <span className="text-xs font-medium">
              {isComplete ? 'Optimisation terminée' : 'Optimisation en cours'}
            </span>
          </div>
          <span className="text-xs text-white/60">
            {loadedScenes}/{totalScenes}
          </span>
        </div>

        {/* Barre de progression */}
        <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
          <div
            className={`h-full transition-all duration-300 rounded-full ${
              isComplete
                ? 'bg-gradient-to-r from-green-500 to-emerald-500'
                : 'bg-gradient-to-r from-blue-500 to-purple-500'
            }`}
            style={{ width: `${percentage}%` }}
          />
        </div>

        {/* Pourcentage */}
        <div className="text-right mt-1">
          <span className="text-xs text-white/80 font-mono">{percentage}%</span>
        </div>

        {/* Nom de la scène en cours (si disponible) */}
        {progress.currentScene && !isComplete && (
          <div className="mt-2 pt-2 border-t border-white/10">
            <span className="text-[10px] text-white/50 line-clamp-1">
              {progress.currentScene}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * Version minimaliste de l'indicateur (juste une barre)
 */
export function PreloadIndicatorMinimal() {
  const { progress, isComplete } = useGlobalPreload();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (isComplete) {
      const timer = setTimeout(() => setIsVisible(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [isComplete]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 h-1 bg-white/10 z-[100] transition-opacity duration-500 ${
        isComplete ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div
        className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300"
        style={{ width: `${progress.percentage}%` }}
      />
    </div>
  );
}
