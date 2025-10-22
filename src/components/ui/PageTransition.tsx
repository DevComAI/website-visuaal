'use client';

import { usePathname } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

/**
 * Composant de transition entre les pages
 * Masque le rechargement des composants Spline avec des transitions fluides
 */
export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Si c'est le premier rendu, ne pas faire de transition
    if (displayChildren === children) {
      return;
    }

    // Démarrer la transition de sortie (fade out)
    setIsTransitioning(true);

    const fadeOutTimer = setTimeout(() => {
      // Changer le contenu pendant que l'opacité est à 0
      setDisplayChildren(children);

      // Démarrer la transition d'entrée (fade in) après un court délai
      const fadeInTimer = setTimeout(() => {
        setIsTransitioning(false);
      }, 50);

      return () => clearTimeout(fadeInTimer);
    }, 300); // Durée de la transition de sortie (doit matcher la durée CSS)

    return () => clearTimeout(fadeOutTimer);
  }, [pathname, children, displayChildren]);

  return (
    <div
      className={`transition-opacity duration-300 ease-in-out ${
        isTransitioning ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {displayChildren}
    </div>
  );
}
