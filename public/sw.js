/**
 * Service Worker pour le cache des scènes Spline
 * Stratégie: Cache-First avec fallback réseau
 */

const CACHE_VERSION = 'v1';
const CACHE_NAME = `visuaal-spline-${CACHE_VERSION}`;

// Liste complète des scènes Spline (1.41 MB total)
const SPLINE_SCENES = [
  // Priority 1: Homepage critical (0.36 MB)
  'https://prod.spline.design/1kfiH0yZ5dSGioTU/scene.splinecode', // INFORM - 0.10 MB
  'https://prod.spline.design/YQnsevjGuljq6asJ/scene.splinecode', // SUPPORT - 0.16 MB
  'https://prod.spline.design/SdbEwI9-LUOY0hlb/scene.splinecode', // MODERNIZE - 0.10 MB

  // Priority 2: Homepage secondary + About (0.51 MB)
  'https://prod.spline.design/Sj5w2qinD5unnyvb/scene.splinecode', // AboutUs Section - 0.15 MB
  'https://prod.spline.design/X07icIhhYxWFwhO1/scene.splinecode', // About Hero - 0.14 MB
  'https://prod.spline.design/b5QNjdMLUJW-blFk/scene.splinecode', // About Content - 0.22 MB

  // Priority 3: Products (0.52 MB)
  'https://prod.spline.design/XihlwxPitjwHnwb9/scene.splinecode', // Studio Hero - 0.10 MB
  'https://prod.spline.design/VhnOlUUBXyLXytif/scene.splinecode', // Studio Content - 0.05 MB
  'https://prod.spline.design/K3MXxwuzrEPrTBi4/scene.splinecode', // DOOH - 0.09 MB
  'https://prod.spline.design/63D-bD0D4e6xHPvT/scene.splinecode', // Holo - 0.22 MB
  'https://prod.spline.design/qDj32pWs0uTcm5kM/scene.splinecode', // Screen - 0.06 MB

  // Priority 4: Footer (0.02 MB)
  'https://prod.spline.design/2pGj4e2pJIQVw8CK/scene.splinecode', // Footer Background - 0.02 MB
];

// Assets Spline supplémentaires (runtime, textures, etc.)
const SPLINE_ASSETS_PATTERNS = [
  /^https:\/\/prod\.spline\.design\/.*\.(wasm|js|json|bin|png|jpg|jpeg|webp|ktx2)$/,
];

/**
 * Installation du Service Worker
 * Précharge toutes les scènes Spline
 */
self.addEventListener('install', (event) => {
  console.log('[SW] Installation en cours...');

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[SW] Cache ouvert, préchargement des scènes...');

        // Précharger toutes les scènes en parallèle
        return Promise.allSettled(
          SPLINE_SCENES.map((url) =>
            cache.add(url).catch((err) => {
              console.warn(`[SW] Échec du préchargement: ${url}`, err);
              // Ne pas bloquer l'installation si une scène échoue
              return Promise.resolve();
            })
          )
        );
      })
      .then(() => {
        console.log('[SW] Préchargement terminé, activation immédiate...');
        // Activer immédiatement sans attendre
        return self.skipWaiting();
      })
      .catch((err) => {
        console.error('[SW] Erreur lors de l\'installation:', err);
      })
  );
});

/**
 * Activation du Service Worker
 * Nettoie les anciens caches
 */
self.addEventListener('activate', (event) => {
  console.log('[SW] Activation en cours...');

  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        // Supprimer tous les anciens caches
        return Promise.all(
          cacheNames
            .filter((name) => name.startsWith('visuaal-spline-') && name !== CACHE_NAME)
            .map((name) => {
              console.log(`[SW] Suppression de l'ancien cache: ${name}`);
              return caches.delete(name);
            })
        );
      })
      .then(() => {
        console.log('[SW] Activation terminée, prise de contrôle...');
        // Prendre le contrôle de tous les clients immédiatement
        return self.clients.claim();
      })
  );
});

/**
 * Interception des requêtes
 * Stratégie: Cache-First pour Spline, Network pour le reste
 */
self.addEventListener('fetch', (event) => {
  const url = event.request.url;

  // Vérifier si c'est une ressource Spline
  const isSplineScene = SPLINE_SCENES.includes(url);
  const isSplineAsset = SPLINE_ASSETS_PATTERNS.some((pattern) => pattern.test(url));

  if (isSplineScene || isSplineAsset) {
    event.respondWith(
      caches.open(CACHE_NAME)
        .then((cache) => {
          return cache.match(event.request)
            .then((cachedResponse) => {
              if (cachedResponse) {
                console.log(`[SW] Cache HIT: ${url}`);
                return cachedResponse;
              }

              // Pas en cache, fetch depuis le réseau
              console.log(`[SW] Cache MISS: ${url}`);
              return fetch(event.request)
                .then((networkResponse) => {
                  // Cloner la réponse pour la mettre en cache
                  if (networkResponse && networkResponse.status === 200) {
                    cache.put(event.request, networkResponse.clone());
                  }
                  return networkResponse;
                })
                .catch((err) => {
                  console.error(`[SW] Erreur réseau pour: ${url}`, err);
                  throw err;
                });
            });
        })
    );
  } else {
    // Pour les autres requêtes, utiliser la stratégie par défaut (Network-First)
    // Ne pas cacher les routes Next.js, API, etc.
    event.respondWith(fetch(event.request));
  }
});

/**
 * Message handler pour communications avec l'app
 */
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }

  if (event.data && event.data.type === 'GET_CACHE_STATUS') {
    caches.open(CACHE_NAME).then((cache) => {
      Promise.all(
        SPLINE_SCENES.map((url) =>
          cache.match(url).then((response) => ({ url, cached: !!response }))
        )
      ).then((statuses) => {
        event.ports[0].postMessage({
          type: 'CACHE_STATUS',
          data: statuses,
          total: SPLINE_SCENES.length,
          cached: statuses.filter((s) => s.cached).length,
        });
      });
    });
  }
});

console.log('[SW] Service Worker chargé - Version:', CACHE_VERSION);
