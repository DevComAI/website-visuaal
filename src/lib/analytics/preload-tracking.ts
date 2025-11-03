/**
 * Tracking and monitoring tools for Spline preloading
 */

export interface PreloadMetrics {
  totalScenes: number;
  loadedScenes: number;
  failedScenes: number;
  totalDurationMs: number;
  averageSceneDurationMs: number;
  serviceWorkerActive: boolean;
  cacheHitRate: number;
  timestamp: number;
}

export interface SceneLoadMetric {
  sceneUrl: string;
  sceneName: string;
  startTime: number;
  endTime: number;
  durationMs: number;
  success: boolean;
  fromCache: boolean;
  error?: string;
}

class PreloadAnalytics {
  private startTime: number = 0;
  private sceneMetrics: Map<string, SceneLoadMetric> = new Map();
  private isTracking = false;

  /**
   * Start preload tracking
   */
  startTracking(): void {
    this.startTime = performance.now();
    this.isTracking = true;
    this.sceneMetrics.clear();

    console.log('[Analytics] Tracking started');
  }

  /**
   * Track scene loading
   */
  trackSceneLoad(
    sceneUrl: string,
    sceneName: string,
    success: boolean,
    durationMs: number,
    fromCache = false,
    error?: string
  ): void {
    if (!this.isTracking) return;

    const metric: SceneLoadMetric = {
      sceneUrl,
      sceneName,
      startTime: performance.now() - durationMs,
      endTime: performance.now(),
      durationMs,
      success,
      fromCache,
      error,
    };

    this.sceneMetrics.set(sceneUrl, metric);

    console.log(
      `[Analytics] Scene ${sceneName}: ${success ? '✅' : '❌'} ${durationMs}ms ${fromCache ? '(cache)' : '(network)'}`
    );
  }

  /**
   * Stop tracking and generate metrics
   */
  async stopTracking(): Promise<PreloadMetrics> {
    if (!this.isTracking) {
      throw new Error('Tracking not started');
    }

    const totalDurationMs = performance.now() - this.startTime;
    const metrics = Array.from(this.sceneMetrics.values());

    const loadedScenes = metrics.filter((m) => m.success).length;
    const failedScenes = metrics.filter((m) => !m.success).length;
    const cacheHits = metrics.filter((m) => m.fromCache).length;
    const totalScenes = metrics.length;

    const averageSceneDurationMs =
      loadedScenes > 0
        ? metrics.filter((m) => m.success).reduce((sum, m) => sum + m.durationMs, 0) / loadedScenes
        : 0;

    const serviceWorkerActive = typeof navigator !== 'undefined' && !!navigator.serviceWorker?.controller;

    const preloadMetrics: PreloadMetrics = {
      totalScenes,
      loadedScenes,
      failedScenes,
      totalDurationMs,
      averageSceneDurationMs,
      serviceWorkerActive,
      cacheHitRate: totalScenes > 0 ? (cacheHits / totalScenes) * 100 : 0,
      timestamp: Date.now(),
    };

    this.isTracking = false;

    console.log('[Analytics] Tracking terminé:', preloadMetrics);

    // Send to Google Analytics if available
    this.sendToAnalytics(preloadMetrics);

    return preloadMetrics;
  }

  /**
   * Get metrics for a specific scene
   */
  getSceneMetric(sceneUrl: string): SceneLoadMetric | undefined {
    return this.sceneMetrics.get(sceneUrl);
  }

  /**
   * Get all scene metrics
   */
  getAllSceneMetrics(): SceneLoadMetric[] {
    return Array.from(this.sceneMetrics.values());
  }

  /**
   * Send metrics to Google Analytics
   */
  private sendToAnalytics(metrics: PreloadMetrics): void {
    if (typeof window === 'undefined') return;

    // Google Analytics 4
    if (window.gtag) {
      window.gtag('event', 'spline_preload_complete', {
        event_category: 'Performance',
        event_label: 'Spline Preload',
        total_scenes: metrics.totalScenes,
        loaded_scenes: metrics.loadedScenes,
        failed_scenes: metrics.failedScenes,
        total_duration_ms: Math.round(metrics.totalDurationMs),
        average_scene_duration_ms: Math.round(metrics.averageSceneDurationMs),
        service_worker_active: metrics.serviceWorkerActive,
        cache_hit_rate: Math.round(metrics.cacheHitRate),
      });
    }

    // Console log for development
    console.table({
      'Total Scenes': metrics.totalScenes,
      'Loaded': metrics.loadedScenes,
      'Failed': metrics.failedScenes,
      'Total Duration': `${(metrics.totalDurationMs / 1000).toFixed(2)}s`,
      'Avg Scene Duration': `${metrics.averageSceneDurationMs.toFixed(0)}ms`,
      'SW Active': metrics.serviceWorkerActive ? 'Yes' : 'No',
      'Cache Hit Rate': `${metrics.cacheHitRate.toFixed(1)}%`,
    });
  }

  /**
   * Track Core Web Vitals
   */
  trackWebVitals(): void {
    if (typeof window === 'undefined' || !window.performance) return;

    // LCP (Largest Contentful Paint)
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];

      if (window.gtag) {
        window.gtag('event', 'web_vitals', {
          event_category: 'Web Vitals',
          event_label: 'LCP',
          value: Math.round(lastEntry.startTime),
          metric_id: 'LCP',
        });
      }

      console.log('[Analytics] LCP:', Math.round(lastEntry.startTime), 'ms');
    });

    try {
      observer.observe({ type: 'largest-contentful-paint', buffered: true });
    } catch {
      // LCP not supported
    }
  }

  /**
   * Generate performance report
   */
  generateReport(): string {
    const metrics = this.getAllSceneMetrics();
    const successRate = metrics.length > 0
      ? (metrics.filter((m) => m.success).length / metrics.length) * 100
      : 0;

    let report = '# Spline Preload Performance Report\n\n';
    report += `Generated: ${new Date().toISOString()}\n\n`;
    report += `## Summary\n`;
    report += `- Total Scenes: ${metrics.length}\n`;
    report += `- Success Rate: ${successRate.toFixed(1)}%\n`;
    report += `- Cache Hits: ${metrics.filter((m) => m.fromCache).length}\n\n`;
    report += `## Scene Details\n\n`;

    metrics.forEach((metric) => {
      report += `### ${metric.sceneName}\n`;
      report += `- Status: ${metric.success ? '✅ Success' : '❌ Failed'}\n`;
      report += `- Duration: ${metric.durationMs}ms\n`;
      report += `- Source: ${metric.fromCache ? 'Cache' : 'Network'}\n`;
      if (metric.error) {
        report += `- Error: ${metric.error}\n`;
      }
      report += `\n`;
    });

    return report;
  }
}

// Instance singleton
export const preloadAnalytics = new PreloadAnalytics();

/**
 * Types for Google Analytics
 */
declare global {
  interface Window {
    gtag?: (
      command: string,
      eventName: string,
      params?: Record<string, string | number | boolean>
    ) => void;
  }
}
