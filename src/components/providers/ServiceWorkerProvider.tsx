'use client';

import { useEffect, useState } from 'react';
import { registerServiceWorker, serviceWorkerManager, type ServiceWorkerStatus } from '@/lib/register-sw';

/**
 * Provider to manage Service Worker
 * Registers automatically on app load
 */
export default function ServiceWorkerProvider() {
  const [status, setStatus] = useState<ServiceWorkerStatus>({
    registered: false,
    installing: false,
    waiting: false,
    active: false,
  });

  useEffect(() => {
    // Subscribe to status changes
    const unsubscribe = serviceWorkerManager.onStatusChange(setStatus);

    // Register Service Worker
    registerServiceWorker()
      .then((success) => {
        if (success) {
          console.log('[App] Service Worker registered successfully');
        } else {
          console.warn('[App] Service Worker not registered');
        }
      })
      .catch((error) => {
        console.error('[App] Error registering SW:', error);
      });

    // Cleanup on unmount
    return unsubscribe;
  }, []);

  // Show message if update is available
  useEffect(() => {
    if (status.waiting) {
      console.log('[App] Service Worker update available');
      // Optional: Show notification to user
      // For now, we automatically activate the update
      serviceWorkerManager.skipWaiting();
    }
  }, [status.waiting]);

  // This component renders nothing visually
  return null;
}
