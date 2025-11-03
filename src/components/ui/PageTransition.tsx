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

    // Start exit transition (fade out)
    setIsTransitioning(true);

    const fadeOutTimer = setTimeout(() => {
      // Change content while opacity is 0
      setDisplayChildren(children);

      // Start entry transition (fade in) after a short delay
      const fadeInTimer = setTimeout(() => {
        setIsTransitioning(false);
      }, 50);

      return () => clearTimeout(fadeInTimer);
    }, 300); // Exit transition duration (must match CSS duration)

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
