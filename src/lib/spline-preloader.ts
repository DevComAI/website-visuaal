/**
 * Gestionnaire de préchargement global des scènes Spline
 * Charge toutes les scènes en arrière-plan avec priorisation
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
  // Toutes les scènes Spline du site (basées sur l'audit)
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
    // Initialiser tous les statuts à 'pending'
    this.scenes.forEach((scene) => {
      this.sceneStatuses.set(scene.url, 'pending');
    });
  }

  /**
   * Précharge toutes les scènes par ordre de priorité
   */
  async preloadAll(startDelayMs = 2000): Promise<void> {
    if (this.isPreloading) {
      console.log('[Preloader] Préchargement déjà en cours');
      return;
    }

    this.isPreloading = true;
    console.log('[Preloader] Démarrage du préchargement dans', startDelayMs, 'ms');

    // Démarrer le tracking
    preloadAnalytics.startTracking();

    // Attendre le délai initial pour ne pas impacter le chargement de la page
    await new Promise((resolve) => setTimeout(resolve, startDelayMs));

    // Grouper les scènes par priorité
    const priorityGroups = this.groupByPriority();

    console.log('[Preloader] Préchargement de', this.scenes.length, 'scènes...');

    // Charger chaque groupe de priorité séquentiellement
    for (const [priority, scenes] of priorityGroups) {
      console.log(`[Preloader] Chargement groupe ${priority} (${scenes.length} scènes)...`);

      // Charger toutes les scènes du groupe en parallèle
      await Promise.allSettled(
        scenes.map((scene) => this.preloadScene(scene))
      );

      // Petit délai entre les groupes pour éviter de saturer la bande passante
      if (priority !== 'very-low') {
        await new Promise((resolve) => setTimeout(resolve, 500));
      }
    }

    console.log('[Preloader] Préchargement terminé!');
    this.isPreloading = false;

    // Arrêter le tracking et générer le rapport
    const metrics = await preloadAnalytics.stopTracking();
    console.log('[Preloader] Métriques finales:', metrics);
  }

  /**
   * Précharge une scène spécifique
   */
  async preloadScene(scene: SplineScene): Promise<void> {
    const url = scene.url;

    // Si déjà en cours de chargement ou chargée, retourner la promesse existante
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
        console.log(`[Preloader] ✅ ${scene.name} chargée (${this.loadedCount}/${this.scenes.length})`);

        // Track le succès
        preloadAnalytics.trackSceneLoad(url, scene.name, true, duration, false);
        this.notifyProgress();
      })
      .catch((error) => {
        const duration = performance.now() - startTime;
        this.sceneStatuses.set(url, 'error');
        console.error(`[Preloader] ❌ Erreur ${scene.name}:`, error);

        // Track l'échec
        preloadAnalytics.trackSceneLoad(url, scene.name, false, duration, false, error.message);
        this.notifyProgress();
      });

    this.scenePromises.set(url, promise);
    return promise;
  }

  /**
   * Fetch une scène avec retry
   */
  private async fetchScene(url: string, retries = 3): Promise<void> {
    for (let attempt = 1; attempt <= retries; attempt++) {
      try {
        const response = await fetch(url, {
          mode: 'cors',
          cache: 'force-cache', // Utiliser le cache si disponible
        });

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        // Consommer la réponse (le Service Worker la mettra en cache)
        await response.blob();
        return;
      } catch (error) {
        if (attempt === retries) {
          throw error;
        }
        // Attendre avant de réessayer (backoff exponentiel)
        await new Promise((resolve) => setTimeout(resolve, attempt * 1000));
      }
    }
  }

  /**
   * Attend qu'une scène spécifique soit chargée
   */
  async waitForScene(url: string): Promise<void> {
    const scene = this.scenes.find((s) => s.url === url);
    if (!scene) {
      console.warn(`[Preloader] Scène inconnue: ${url}`);
      return;
    }

    const status = this.sceneStatuses.get(url);

    // Si déjà chargée, retourner immédiatement
    if (status === 'loaded') {
      return Promise.resolve();
    }

    // Si en cours de chargement, attendre la promesse existante
    if (this.scenePromises.has(url)) {
      return this.scenePromises.get(url)!;
    }

    // Sinon, lancer le préchargement de cette scène
    return this.preloadScene(scene);
  }

  /**
   * Vérifie si une scène est chargée
   */
  isSceneLoaded(url: string): boolean {
    return this.sceneStatuses.get(url) === 'loaded';
  }

  /**
   * Obtient le statut d'une scène
   */
  getSceneStatus(url: string): 'pending' | 'loading' | 'loaded' | 'error' {
    return this.sceneStatuses.get(url) || 'pending';
  }

  /**
   * Obtient le progrès global
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
   * S'abonne aux changements de progrès
   */
  onProgress(callback: ProgressCallback): () => void {
    this.progressCallbacks.add(callback);

    // Retourner une fonction de désabonnement
    return () => {
      this.progressCallbacks.delete(callback);
    };
  }

  /**
   * Notifie tous les callbacks de progrès
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
   * Groupe les scènes par priorité
   */
  private groupByPriority(): Map<PreloadPriority, SplineScene[]> {
    const groups = new Map<PreloadPriority, SplineScene[]>();

    // Ordre de priorité
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
   * Réinitialise le préchargement
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

// Instance singleton
export const globalPreloader = new SplinePreloadManager();
