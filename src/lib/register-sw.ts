/**
 * Service Worker registration system
 * Handles installation, updates and monitoring
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
   * Register Service Worker
   */
  async register(): Promise<boolean> {
    // Check Service Worker support
    if (!('serviceWorker' in navigator)) {
      console.warn('[SW Manager] Service Worker not supported by this browser');
      this.notifyStatus({ registered: false, installing: false, waiting: false, active: false, error: 'Not supported' });
      return false;
    }

    try {
      console.log('[SW Manager] Registering Service Worker...');

      // Register SW
      this.registration = await navigator.serviceWorker.register('/sw.js', {
        scope: '/',
      });

      console.log('[SW Manager] Service Worker registered successfully');
      this.notifyStatus(this.getStatus());

      // Listen to state changes
      this.setupListeners();

      // Check if there's an update
      this.registration.addEventListener('updatefound', () => {
        console.log('[SW Manager] Service Worker update detected');
        this.notifyStatus(this.getStatus());
      });

      // Force update check every 5 minutes
      setInterval(() => {
        this.registration?.update();
      }, 5 * 60 * 1000);

      return true;
    } catch (error) {
      console.error('[SW Manager] Error during registration:', error);
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
   * Set up event listeners
   */
  private setupListeners(): void {
    if (!this.registration) return;

    // Listener for controller changes
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      console.log('[SW Manager] Nouveau contrôleur Service Worker actif');
      this.notifyStatus(this.getStatus());
    });

    // Listener for SW messages
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
   * Get current Service Worker status
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
   * Request cache status from Service Worker
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

      // Additional check for TypeScript
      const controller = navigator.serviceWorker.controller;
      if (controller) {
        controller.postMessage(
          { type: 'GET_CACHE_STATUS' },
          [messageChannel.port2]
        );
      } else {
        resolve(null);
      }

      // Timeout after 5 seconds
      setTimeout(() => resolve(null), 5000);
    });
  }

  /**
   * Force activation of waiting Service Worker
   */
  async skipWaiting(): Promise<void> {
    if (this.registration?.waiting) {
      console.log('[SW Manager] Activation du Service Worker en attente...');
      this.registration.waiting.postMessage({ type: 'SKIP_WAITING' });
    }
  }

  /**
   * Unregister Service Worker
   */
  async unregister(): Promise<boolean> {
    if (!this.registration) return false;

    try {
      const success = await this.registration.unregister();
      console.log('[SW Manager] Service Worker unregistered:', success);
      this.registration = null;
      this.notifyStatus(this.getStatus());
      return success;
    } catch (error) {
      console.error('[SW Manager] Error during unregistration:', error);
      return false;
    }
  }

  /**
   * Subscribe to status changes
   */
  onStatusChange(callback: (status: ServiceWorkerStatus) => void): () => void {
    this.statusCallbacks.add(callback);

    // Return unsubscribe function
    return () => {
      this.statusCallbacks.delete(callback);
    };
  }

  /**
   * Subscribe to cache status changes
   */
  onCacheStatusChange(callback: (status: CacheStatus) => void): () => void {
    this.cacheStatusCallbacks.add(callback);

    // Return unsubscribe function
    return () => {
      this.cacheStatusCallbacks.delete(callback);
    };
  }

  /**
   * Notify all status change callbacks
   */
  private notifyStatus(status: ServiceWorkerStatus): void {
    this.statusCallbacks.forEach((callback) => callback(status));
  }

  /**
   * Notify all cache status change callbacks
   */
  private notifyCacheStatus(status: CacheStatus): void {
    this.cacheStatusCallbacks.forEach((callback) => callback(status));
  }
}

// Instance singleton
export const serviceWorkerManager = new ServiceWorkerManager();

/**
 * Hook-like function to register Service Worker
 * To be called in a client-side useEffect
 */
export async function registerServiceWorker(): Promise<boolean> {
  // Wait for window to be completely loaded
  if (document.readyState !== 'complete') {
    await new Promise<void>((resolve) => {
      window.addEventListener('load', () => resolve());
    });
  }

  // 1 second delay to avoid impacting initial load
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return serviceWorkerManager.register();
}

/**
 * Utility function to check if SW is supported
 */
export function isServiceWorkerSupported(): boolean {
  return 'serviceWorker' in navigator;
}

/**
 * Utility function to check if SW is active
 */
export function isServiceWorkerActive(): boolean {
  return !!navigator.serviceWorker?.controller;
}
