/**
 * Système d'enregistrement du Service Worker
 * Gère l'installation, les mises à jour et le monitoring
 */

export interface ServiceWorkerStatus {
  registered: boolean;
  installing: boolean;
  waiting: boolean;
  active: boolean;
  error?: string;
}

export interface CacheStatus {
  total: number;
  cached: number;
  percentage: number;
  scenes: Array<{ url: string; cached: boolean }>;
}

class ServiceWorkerManager {
  private registration: ServiceWorkerRegistration | null = null;
  private statusCallbacks: Set<(status: ServiceWorkerStatus) => void> = new Set();
  private cacheStatusCallbacks: Set<(status: CacheStatus) => void> = new Set();

  /**
   * Enregistre le Service Worker
   */
  async register(): Promise<boolean> {
    // Vérifier le support du Service Worker
    if (!('serviceWorker' in navigator)) {
      console.warn('[SW Manager] Service Worker non supporté par ce navigateur');
      this.notifyStatus({ registered: false, installing: false, waiting: false, active: false, error: 'Not supported' });
      return false;
    }

    try {
      console.log('[SW Manager] Enregistrement du Service Worker...');

      // Enregistrer le SW
      this.registration = await navigator.serviceWorker.register('/sw.js', {
        scope: '/',
      });

      console.log('[SW Manager] Service Worker enregistré avec succès');
      this.notifyStatus(this.getStatus());

      // Écouter les changements d'état
      this.setupListeners();

      // Vérifier s'il y a une mise à jour
      this.registration.addEventListener('updatefound', () => {
        console.log('[SW Manager] Mise à jour du Service Worker détectée');
        this.notifyStatus(this.getStatus());
      });

      // Forcer la vérification des mises à jour toutes les 5 minutes
      setInterval(() => {
        this.registration?.update();
      }, 5 * 60 * 1000);

      return true;
    } catch (error) {
      console.error('[SW Manager] Erreur lors de l\'enregistrement:', error);
      this.notifyStatus({
        registered: false,
        installing: false,
        waiting: false,
        active: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      });
      return false;
    }
  }

  /**
   * Configure les listeners d'événements
   */
  private setupListeners(): void {
    if (!this.registration) return;

    // Listener pour les changements de contrôleur
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      console.log('[SW Manager] Nouveau contrôleur Service Worker actif');
      this.notifyStatus(this.getStatus());
    });

    // Listener pour les messages du SW
    navigator.serviceWorker.addEventListener('message', (event) => {
      if (event.data && event.data.type === 'CACHE_STATUS') {
        const cacheStatus: CacheStatus = {
          total: event.data.total,
          cached: event.data.cached,
          percentage: (event.data.cached / event.data.total) * 100,
          scenes: event.data.data,
        };
        this.notifyCacheStatus(cacheStatus);
      }
    });
  }

  /**
   * Obtient le statut actuel du Service Worker
   */
  getStatus(): ServiceWorkerStatus {
    if (!this.registration) {
      return { registered: false, installing: false, waiting: false, active: false };
    }

    return {
      registered: true,
      installing: !!this.registration.installing,
      waiting: !!this.registration.waiting,
      active: !!this.registration.active,
    };
  }

  /**
   * Demande le statut du cache au Service Worker
   */
  async getCacheStatus(): Promise<CacheStatus | null> {
    if (!navigator.serviceWorker.controller) {
      console.warn('[SW Manager] Pas de Service Worker actif');
      return null;
    }

    return new Promise((resolve) => {
      const messageChannel = new MessageChannel();

      messageChannel.port1.onmessage = (event) => {
        if (event.data && event.data.type === 'CACHE_STATUS') {
          resolve({
            total: event.data.total,
            cached: event.data.cached,
            percentage: (event.data.cached / event.data.total) * 100,
            scenes: event.data.data,
          });
        }
      };

      // Vérification supplémentaire pour TypeScript
      const controller = navigator.serviceWorker.controller;
      if (controller) {
        controller.postMessage(
          { type: 'GET_CACHE_STATUS' },
          [messageChannel.port2]
        );
      } else {
        resolve(null);
      }

      // Timeout après 5 secondes
      setTimeout(() => resolve(null), 5000);
    });
  }

  /**
   * Force l'activation d'un Service Worker en attente
   */
  async skipWaiting(): Promise<void> {
    if (this.registration?.waiting) {
      console.log('[SW Manager] Activation du Service Worker en attente...');
      this.registration.waiting.postMessage({ type: 'SKIP_WAITING' });
    }
  }

  /**
   * Désenregistre le Service Worker
   */
  async unregister(): Promise<boolean> {
    if (!this.registration) return false;

    try {
      const success = await this.registration.unregister();
      console.log('[SW Manager] Service Worker désenregistré:', success);
      this.registration = null;
      this.notifyStatus(this.getStatus());
      return success;
    } catch (error) {
      console.error('[SW Manager] Erreur lors du désenregistrement:', error);
      return false;
    }
  }

  /**
   * S'abonne aux changements de statut
   */
  onStatusChange(callback: (status: ServiceWorkerStatus) => void): () => void {
    this.statusCallbacks.add(callback);

    // Retourner une fonction de désabonnement
    return () => {
      this.statusCallbacks.delete(callback);
    };
  }

  /**
   * S'abonne aux changements de statut du cache
   */
  onCacheStatusChange(callback: (status: CacheStatus) => void): () => void {
    this.cacheStatusCallbacks.add(callback);

    // Retourner une fonction de désabonnement
    return () => {
      this.cacheStatusCallbacks.delete(callback);
    };
  }

  /**
   * Notifie tous les callbacks de changement de statut
   */
  private notifyStatus(status: ServiceWorkerStatus): void {
    this.statusCallbacks.forEach((callback) => callback(status));
  }

  /**
   * Notifie tous les callbacks de changement de statut du cache
   */
  private notifyCacheStatus(status: CacheStatus): void {
    this.cacheStatusCallbacks.forEach((callback) => callback(status));
  }
}

// Instance singleton
export const serviceWorkerManager = new ServiceWorkerManager();

/**
 * Hook-like function pour enregistrer le Service Worker
 * À appeler dans un useEffect côté client
 */
export async function registerServiceWorker(): Promise<boolean> {
  // Attendre que la fenêtre soit complètement chargée
  if (document.readyState !== 'complete') {
    await new Promise<void>((resolve) => {
      window.addEventListener('load', () => resolve());
    });
  }

  // Délai de 1 seconde pour ne pas impacter le chargement initial
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return serviceWorkerManager.register();
}

/**
 * Fonction utilitaire pour vérifier si le SW est supporté
 */
export function isServiceWorkerSupported(): boolean {
  return 'serviceWorker' in navigator;
}

/**
 * Fonction utilitaire pour vérifier si le SW est actif
 */
export function isServiceWorkerActive(): boolean {
  return !!navigator.serviceWorker?.controller;
}
