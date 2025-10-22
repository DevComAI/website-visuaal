'use client';

import { useEffect, useState } from 'react';
import { registerServiceWorker, serviceWorkerManager, type ServiceWorkerStatus } from '@/lib/register-sw';

/**
 * Provider pour gérer le Service Worker
 * S'enregistre automatiquement au chargement de l'app
 */
export default function ServiceWorkerProvider() {
  const [status, setStatus] = useState<ServiceWorkerStatus>({
    registered: false,
    installing: false,
    waiting: false,
    active: false,
  });

  useEffect(() => {
    // S'abonner aux changements de statut
    const unsubscribe = serviceWorkerManager.onStatusChange(setStatus);

    // Enregistrer le Service Worker
    registerServiceWorker()
      .then((success) => {
        if (success) {
          console.log('[App] Service Worker enregistré avec succès');
        } else {
          console.warn('[App] Service Worker non enregistré');
        }
      })
      .catch((error) => {
        console.error('[App] Erreur lors de l\'enregistrement du SW:', error);
      });

    // Nettoyer à la destruction
    return unsubscribe;
  }, []);

  // Afficher un message si une mise à jour est disponible
  useEffect(() => {
    if (status.waiting) {
      console.log('[App] Mise à jour du Service Worker disponible');
      // Optionnel : Afficher une notification à l'utilisateur
      // Pour l'instant, on active automatiquement la mise à jour
      serviceWorkerManager.skipWaiting();
    }
  }, [status.waiting]);

  // Ce composant ne rend rien visuellement
  return null;
}
