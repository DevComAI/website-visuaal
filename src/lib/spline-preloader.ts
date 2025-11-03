/**
 * Global preload manager for Spline scenes
 * Loads all scenes in the background with prioritization
 */

import { preloadAnalytics } from './analytics/preload-tracking';

export type PreloadPriority = 'high' | 'medium' | 'low' | 'very-low';

export interface SplineScene {
  name: string;
  url: string;
  priority: PreloadPriority;
  sizeEstimateMB: number;
}

export interface PreloadProgress {
  loaded: number;
  total: number;
  percentage: number;
  currentScene?: string;
  sceneStatuses: Map<string, 'pending' | 'loading' | 'loaded' | 'error'>;
}

export type ProgressCallback = (progress: PreloadProgress) => void;

class SplinePreloadManager {
  // All Spline scenes on the site (based on audit)
  private readonly scenes: SplineScene[] = [
    // Priority 1: Homepage critical (0.36 MB)
    { name: 'INFORM', url: 'https://prod.spline.design/1kfiH0yZ5dSGioTU/scene.splinecode', priority: 'high', sizeEstimateMB: 0.10 },
    { name: 'SUPPORT', url: 'https://prod.spline.design/YQnsevjGuljq6asJ/scene.splinecode', priority: 'high', sizeEstimateMB: 0.16 },
    { name: 'MODERNIZE', url: 'https://prod.spline.design/SdbEwI9-LUOY0hlb/scene.splinecode', priority: 'high', sizeEstimateMB: 0.10 },

    // Priority 2: Homepage secondary + About (0.51 MB)
    { name: 'AboutUs Section', url: 'https://prod.spline.design/Sj5w2qinD5unnyvb/scene.splinecode', priority: 'medium', sizeEstimateMB: 0.15 },
    { name: 'About Hero', url: 'https://prod.spline.design/X07icIhhYxWFwhO1/scene.splinecode', priority: 'medium', sizeEstimateMB: 0.14 },
    { name: 'About Content', url: 'https://prod.spline.design/b5QNjdMLUJW-blFk/scene.splinecode', priority: 'medium', sizeEstimateMB: 0.22 },

    // Priority 3: Products (0.52 MB)
    { name: 'Studio Hero', url: 'https://prod.spline.design/XihlwxPitjwHnwb9/scene.splinecode', priority: 'medium', sizeEstimateMB: 0.10 },
    { name: 'Studio Content', url: 'https://prod.spline.design/VhnOlUUBXyLXytif/scene.splinecode', priority: 'medium', sizeEstimateMB: 0.05 },
    { name: 'DOOH', url: 'https://prod.spline.design/K3MXxwuzrEPrTBi4/scene.splinecode', priority: 'low', sizeEstimateMB: 0.09 },
    { name: 'Holo', url: 'https://prod.spline.design/63D-bD0D4e6xHPvT/scene.splinecode', priority: 'low', sizeEstimateMB: 0.22 },
    { name: 'Screen', url: 'https://prod.spline.design/qDj32pWs0uTcm5kM/scene.splinecode', priority: 'low', sizeEstimateMB: 0.06 },

    // Priority 4: Footer (0.02 MB)
    { name: 'Footer Background', url: 'https://prod.spline.design/2pGj4e2pJIQVw8CK/scene.splinecode', priority: 'very-low', sizeEstimateMB: 0.02 },
  ];

  private scenePromises: Map<string, Promise<void>> = new Map();
  private sceneStatuses: Map<string, 'pending' | 'loading' | 'loaded' | 'error'> = new Map();
  private progressCallbacks: Set<ProgressCallback> = new Set();
  private isPreloading = false;
  private loadedCount = 0;

  constructor() {
    // Initialize all statuses to 'pending'
    this.scenes.forEach((scene) => {
      this.sceneStatuses.set(scene.url, 'pending');
    });
  }

  /**
   * Log current memory usage
   */
  private logMemory(context: string): void {
    if ('memory' in performance) {
      const memory = (performance as { memory?: { usedJSHeapSize: number; totalJSHeapSize: number; jsHeapSizeLimit: number } }).memory;
      if (!memory) return;
      console.log(`[Preloader] 💾 Memory (${context}):`, {
        usedJSHeapSize: `${(memory.usedJSHeapSize / 1048576).toFixed(2)} MB`,
        totalJSHeapSize: `${(memory.totalJSHeapSize / 1048576).toFixed(2)} MB`,
        limit: `${(memory.jsHeapSizeLimit / 1048576).toFixed(2)} MB`,
        usage: `${((memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100).toFixed(1)}%`,
      });
    }
  }

  /**
   * Preload all scenes in priority order
   */
  async preloadAll(startDelayMs = 2000): Promise<void> {
    if (this.isPreloading) {
      console.log('[Preloader] Preloading already in progress');
      return;
    }

    this.isPreloading = true;
    console.log('[Preloader] Starting preload in', startDelayMs, 'ms');
    this.logMemory('Before start');

    // Start tracking
    preloadAnalytics.startTracking();

    // Wait for initial delay to avoid impacting page load
    await new Promise((resolve) => setTimeout(resolve, startDelayMs));

    // Group scenes by priority
    const priorityGroups = this.groupByPriority();

    console.log('[Preloader] Preloading', this.scenes.length, 'scenes...');

    // Load each priority group sequentially
    for (const [priority, scenes] of priorityGroups) {
      console.log(`[Preloader] Loading group ${priority} (${scenes.length} scenes)...`);
      this.logMemory(`Before group ${priority}`);

      // Load all scenes in the group in parallel
      await Promise.allSettled(
        scenes.map((scene) => this.preloadScene(scene))
      );

      this.logMemory(`After group ${priority}`);

      // Small delay between groups to avoid saturating bandwidth
      if (priority !== 'very-low') {
        await new Promise((resolve) => setTimeout(resolve, 500));
      }
    }

    console.log('[Preloader] Preloading complete!');
    this.logMemory('After completion');
    this.isPreloading = false;

    // Stop tracking and generate report
    const metrics = await preloadAnalytics.stopTracking();
    console.log('[Preloader] Final metrics:', metrics);
  }

  /**
   * Preload a specific scene
   */
  async preloadScene(scene: SplineScene): Promise<void> {
    const url = scene.url;

    // If already loading or loaded, return existing promise
    if (this.scenePromises.has(url)) {
      return this.scenePromises.get(url)!;
    }

    this.sceneStatuses.set(url, 'loading');
    this.notifyProgress(scene.name);

    const startTime = performance.now();

    const promise = this.fetchScene(url)
      .then(() => {
        const duration = performance.now() - startTime;
        this.sceneStatuses.set(url, 'loaded');
        this.loadedCount++;
        console.log(`[Preloader] ✅ ${scene.name} loaded (${this.loadedCount}/${this.scenes.length})`);

        // Track success
        preloadAnalytics.trackSceneLoad(url, scene.name, true, duration, false);
        this.notifyProgress();
      })
      .catch((error) => {
        const duration = performance.now() - startTime;
        this.sceneStatuses.set(url, 'error');
        console.error(`[Preloader] ❌ Error ${scene.name}:`, error);

        // Track failure
        preloadAnalytics.trackSceneLoad(url, scene.name, false, duration, false, error.message);
        this.notifyProgress();
      });

    this.scenePromises.set(url, promise);
    return promise;
  }

  /**
   * Fetch a scene with retry
   */
  private async fetchScene(url: string, retries = 3): Promise<void> {
    const sceneName = url.split('/').pop()?.split('.')[0] || 'unknown';

    for (let attempt = 1; attempt <= retries; attempt++) {
      try {
        console.log(`[Preloader] 🌐 Fetch ${sceneName} (attempt ${attempt}/${retries})`);

        const response = await fetch(url, {
          mode: 'cors',
          cache: 'force-cache', // Use cache if available
        });

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        // Consume response (Service Worker will cache it)
        const blob = await response.blob();
        console.log(`[Preloader] ✅ Fetch ${sceneName} successful (${(blob.size / 1048576).toFixed(2)} MB)`);
        return;
      } catch (error) {
        console.error(`[Preloader] ❌ Fetch error ${sceneName} (attempt ${attempt}/${retries}):`, error);

        if (attempt === retries) {
          throw error;
        }
        // Wait before retrying (exponential backoff)
        const delayMs = attempt * 1000;
        console.log(`[Preloader] ⏳ Retry in ${delayMs}ms...`);
        await new Promise((resolve) => setTimeout(resolve, delayMs));
      }
    }
  }

  /**
   * Wait for a specific scene to be loaded
   */
  async waitForScene(url: string): Promise<void> {
    const scene = this.scenes.find((s) => s.url === url);
    if (!scene) {
      console.warn(`[Preloader] Unknown scene: ${url}`);
      return;
    }

    const status = this.sceneStatuses.get(url);

    // If already loaded, return immediately
    if (status === 'loaded') {
      return Promise.resolve();
    }

    // If loading, wait for existing promise
    if (this.scenePromises.has(url)) {
      return this.scenePromises.get(url)!;
    }

    // Otherwise, start preloading this scene
    return this.preloadScene(scene);
  }

  /**
   * Check if a scene is loaded
   */
  isSceneLoaded(url: string): boolean {
    return this.sceneStatuses.get(url) === 'loaded';
  }

  /**
   * Get the status of a scene
   */
  getSceneStatus(url: string): 'pending' | 'loading' | 'loaded' | 'error' {
    return this.sceneStatuses.get(url) || 'pending';
  }

  /**
   * Get overall progress
   */
  getProgress(): PreloadProgress {
    return {
      loaded: this.loadedCount,
      total: this.scenes.length,
      percentage: (this.loadedCount / this.scenes.length) * 100,
      sceneStatuses: new Map(this.sceneStatuses),
    };
  }

  /**
   * Subscribe to progress changes
   */
  onProgress(callback: ProgressCallback): () => void {
    this.progressCallbacks.add(callback);

    // Return unsubscribe function
    return () => {
      this.progressCallbacks.delete(callback);
    };
  }

  /**
   * Notify all progress callbacks
   */
  private notifyProgress(currentScene?: string): void {
    const progress: PreloadProgress = {
      loaded: this.loadedCount,
      total: this.scenes.length,
      percentage: (this.loadedCount / this.scenes.length) * 100,
      currentScene,
      sceneStatuses: new Map(this.sceneStatuses),
    };

    this.progressCallbacks.forEach((callback) => callback(progress));
  }

  /**
   * Group scenes by priority
   */
  private groupByPriority(): Map<PreloadPriority, SplineScene[]> {
    const groups = new Map<PreloadPriority, SplineScene[]>();

    // Priority order
    const priorities: PreloadPriority[] = ['high', 'medium', 'low', 'very-low'];

    priorities.forEach((priority) => {
      const scenes = this.scenes.filter((s) => s.priority === priority);
      if (scenes.length > 0) {
        groups.set(priority, scenes);
      }
    });

    return groups;
  }

  /**
   * Reset preloading
   */
  reset(): void {
    this.scenePromises.clear();
    this.sceneStatuses.clear();
    this.loadedCount = 0;
    this.isPreloading = false;

    this.scenes.forEach((scene) => {
      this.sceneStatuses.set(scene.url, 'pending');
    });

    this.notifyProgress();
  }
}

// Singleton instance
export const globalPreloader = new SplinePreloadManager();
