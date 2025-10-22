/**
 * Mapping des scènes Spline par route
 * Permet d'identifier quelles scènes sont nécessaires pour chaque page
 */

export interface RouteSplineMap {
  route: string;
  scenes: string[];
  priority: 'high' | 'medium' | 'low';
}

/**
 * Configuration complète des scènes par route
 */
export const ROUTE_SPLINE_MAP: RouteSplineMap[] = [
  // Homepage
  {
    route: '/',
    scenes: [
      'https://prod.spline.design/1kfiH0yZ5dSGioTU/scene.splinecode', // INFORM
      'https://prod.spline.design/YQnsevjGuljq6asJ/scene.splinecode', // SUPPORT
      'https://prod.spline.design/SdbEwI9-LUOY0hlb/scene.splinecode', // MODERNIZE
      'https://prod.spline.design/Sj5w2qinD5unnyvb/scene.splinecode', // AboutUs
      'https://prod.spline.design/2pGj4e2pJIQVw8CK/scene.splinecode', // Footer
    ],
    priority: 'high',
  },

  // About Page
  {
    route: '/about',
    scenes: [
      'https://prod.spline.design/X07icIhhYxWFwhO1/scene.splinecode', // About Hero
      'https://prod.spline.design/b5QNjdMLUJW-blFk/scene.splinecode', // About Content
      'https://prod.spline.design/2pGj4e2pJIQVw8CK/scene.splinecode', // Footer
    ],
    priority: 'high',
  },

  // Studio Page
  {
    route: '/studio',
    scenes: [
      'https://prod.spline.design/XihlwxPitjwHnwb9/scene.splinecode', // Studio Hero
      'https://prod.spline.design/VhnOlUUBXyLXytif/scene.splinecode', // Studio Content
      'https://prod.spline.design/2pGj4e2pJIQVw8CK/scene.splinecode', // Footer
    ],
    priority: 'medium',
  },

  // DOOH Page
  {
    route: '/products/dooh',
    scenes: [
      'https://prod.spline.design/K3MXxwuzrEPrTBi4/scene.splinecode', // DOOH
      'https://prod.spline.design/2pGj4e2pJIQVw8CK/scene.splinecode', // Footer
    ],
    priority: 'medium',
  },

  // Holo Page
  {
    route: '/products/holo',
    scenes: [
      'https://prod.spline.design/63D-bD0D4e6xHPvT/scene.splinecode', // Holo
      'https://prod.spline.design/2pGj4e2pJIQVw8CK/scene.splinecode', // Footer
    ],
    priority: 'medium',
  },

  // Screen Page
  {
    route: '/products/screen',
    scenes: [
      'https://prod.spline.design/qDj32pWs0uTcm5kM/scene.splinecode', // Screen
      'https://prod.spline.design/2pGj4e2pJIQVw8CK/scene.splinecode', // Footer
    ],
    priority: 'medium',
  },

  // Contact Page (pas de Spline)
  {
    route: '/contact',
    scenes: [],
    priority: 'low',
  },
];

/**
 * Obtient les scènes nécessaires pour une route donnée
 */
export function getScenesForRoute(pathname: string): string[] {
  // Trouver la route correspondante
  const routeConfig = ROUTE_SPLINE_MAP.find((config) => {
    // Correspondance exacte
    if (config.route === pathname) return true;

    // Correspondance avec wildcard pour les sous-routes
    if (config.route.endsWith('/*')) {
      const baseRoute = config.route.slice(0, -2);
      return pathname.startsWith(baseRoute);
    }

    return false;
  });

  return routeConfig?.scenes || [];
}

/**
 * Obtient toutes les scènes uniques du site
 */
export function getAllUniqueScenes(): string[] {
  const allScenes = ROUTE_SPLINE_MAP.flatMap((config) => config.scenes);
  return Array.from(new Set(allScenes));
}

/**
 * Vérifie si une route a des scènes Spline
 */
export function routeHasSpline(pathname: string): boolean {
  const scenes = getScenesForRoute(pathname);
  return scenes.length > 0;
}
