# Spline Optimization System - Documentation

## 📋 Vue d'ensemble

Ce système optimise la navigation sur le site en préchargeant toutes les scènes Spline 3D et en les mettant en cache via un Service Worker. Résultat : **navigation quasi-instantanée** entre les pages.

### Résultats attendus

- ✅ **Navigation < 100ms** (vs 2-3s avant)
- ✅ **Cache persistant** entre les sessions
- ✅ **12 scènes Spline** (~1.41 MB total)
- ✅ **Fonctionne offline** après le premier chargement

---

## 🏗️ Architecture

```
User arrives on site
    ↓
Homepage loads + critical Spline scenes (priority)
    ↓
Background: Service Worker preloads ALL 12 scenes
    ↓
Scenes cached in CacheStorage API
    ↓
Navigation = Instant (served from cache)
```

### Composants créés

#### 1. **Service Worker** (`public/sw.js`)
- Cache toutes les scènes Spline
- Stratégie: Cache-First avec fallback réseau
- Gère l'installation et les mises à jour

#### 2. **Preload Manager** (`src/lib/spline-preloader.ts`)
- Gère le préchargement priorisé des scènes
- 4 niveaux de priorité: high, medium, low, very-low
- Retry automatique en cas d'échec

#### 3. **Service Worker Manager** (`src/lib/register-sw.ts`)
- Enregistre et gère le Service Worker
- Monitoring du statut et du cache
- Communication avec le SW

#### 4. **UI Components**
- `PreloadIndicator.tsx` - Affiche la progression du préchargement
- `ServiceWorkerProvider.tsx` - Enregistre le SW au chargement

#### 5. **Analytics** (`src/lib/analytics/preload-tracking.ts`)
- Track les performances de préchargement
- Mesure le taux de succès et la durée
- Envoi à Google Analytics (si configuré)

---

## 🚀 Comment ça fonctionne

### 1. Premier chargement (Homepage)

```typescript
// layout.tsx charge automatiquement :
<ServiceWorkerProvider />  // Enregistre le SW
<PreloadIndicator />       // Affiche la progression
```

**Timeline :**
1. **0ms** : Page commence à charger
2. **1000ms** : Service Worker s'enregistre
3. **2000ms** : Préchargement démarre (priorité high)
4. **2000-4000ms** : Scènes homepage (0.36 MB)
5. **4000-6000ms** : Scènes About (0.51 MB)
6. **6000-8000ms** : Scènes Products (0.52 MB)
7. **8000-9000ms** : Footer (0.02 MB)
8. **9000ms** : ✅ Tout est en cache !

### 2. Navigation suivante

```typescript
// OptimizedSplineViewer vérifie le cache :
if (globalPreloader.isSceneLoaded(scene)) {
  setShouldLoad(true)  // Charge immédiatement !
}
```

**Timeline :**
1. **0ms** : User clique sur un lien
2. **0-50ms** : Next.js charge la page
3. **50ms** : Spline scene se charge depuis le cache
4. **100ms** : ✅ Page complètement interactive !

### 3. Sessions suivantes

Le Service Worker garde le cache, donc même après fermeture du navigateur :
- **Pas de rechargement** nécessaire
- **Navigation instantanée** dès la première page

---

## 🔍 Vérifier que ça fonctionne

### Dans Chrome DevTools

#### 1. Vérifier le Service Worker

```
DevTools > Application > Service Workers
```

Vous devriez voir :
- ✅ Status: **activated and running**
- ✅ Source: `/sw.js`

#### 2. Vérifier le Cache

```
DevTools > Application > Cache Storage > visuaal-spline-v1
```

Vous devriez voir **12 entrées** :
- `https://prod.spline.design/1kfiH0yZ5dSGioTU/scene.splinecode`
- `https://prod.spline.design/YQnsevjGuljq6asJ/scene.splinecode`
- ... (10 autres scènes)

#### 3. Vérifier les performances

```
DevTools > Console
```

Recherchez :
```
[Preloader] Préchargement terminé!
[Preloader] Métriques finales: {...}
```

Exemple de métriques :
```javascript
{
  totalScenes: 12,
  loadedScenes: 12,
  failedScenes: 0,
  totalDurationMs: 7020,
  averageSceneDurationMs: 585,
  serviceWorkerActive: true,
  cacheHitRate: 0  // 0% au premier chargement, 100% ensuite
}
```

#### 4. Tester la navigation

1. Ouvrez `DevTools > Network`
2. Naviguez vers `/about`
3. Filtrez par "splinecode"
4. Vous devriez voir :
   - Size: **(from ServiceWorker)**
   - Time: **< 50ms**

---

## 📊 Scripts de test

### Auditer les scènes Spline

```bash
node scripts/audit-spline-scenes.js
```

Résultat :
```
📊 RAPPORT D'AUDIT COMPLET

┌─────────────────────┬─────────────┬──────────────┬────────────────────────────┐
│ Scène               │ Taille (MB) │ Durée (s)    │ Priorité Recommandée       │
├─────────────────────┼─────────────┼──────────────┼────────────────────────────┤
│ INFORM              │        0.10 │         0.71 │ High (Homepage)            │
│ SUPPORT             │        0.16 │         0.58 │ High (Homepage)            │
...
```

### Tester le build production

```bash
npm run build
npm run start
```

Ouvrez `http://localhost:3000` et vérifiez le Service Worker.

---

## 🐛 Debugging

### Le Service Worker ne s'enregistre pas

**Causes possibles :**
1. **Pas en HTTPS** - Les SW nécessitent HTTPS (ou localhost)
2. **Fichier sw.js introuvable** - Vérifiez que `/sw.js` existe dans `public/`
3. **Browser non supporté** - Vérifiez `navigator.serviceWorker`

**Solution :**
```javascript
// Console
if ('serviceWorker' in navigator) {
  console.log('✅ Service Worker supporté')
} else {
  console.log('❌ Service Worker NON supporté')
}
```

### Les scènes ne se préchargent pas

**Causes possibles :**
1. **CORS errors** - Spline bloque les requêtes
2. **Network timeout** - Connexion trop lente
3. **SW pas encore activé** - Attendre l'activation

**Solution :**
```javascript
// Console
globalPreloader.getProgress()
// Devrait retourner le progrès actuel
```

### Le cache ne persiste pas

**Causes possibles :**
1. **Navigation privée** - Le cache est effacé à la fermeture
2. **Quota dépassé** - Limite de stockage atteinte
3. **SW désactivé** - Paramètres navigateur

**Solution :**
```javascript
// Vérifier le quota
navigator.storage.estimate().then(estimate => {
  console.log(`Utilisé: ${estimate.usage / 1024 / 1024} MB`)
  console.log(`Quota: ${estimate.quota / 1024 / 1024} MB`)
})
```

### Les scènes se rechargent quand même

**Causes possibles :**
1. **Cache invalidé** - Version du SW changée
2. **Intersection Observer** - Scène pas encore détectée
3. **globalPreloader pas synchronisé** - Race condition

**Solution :**
```javascript
// Forcer le chargement immédiat
<OptimizedSplineViewer
  scene="..."
  priority={true}  // ← Charge immédiatement
/>
```

---

## ⚙️ Configuration

### Désactiver le préchargement

```typescript
// src/lib/hooks/useGlobalPreload.ts
export function useGlobalPreload(options = {}) {
  const { autoStart = false } = options  // ← Passer à false
}
```

### Changer le délai de préchargement

```typescript
// src/components/ui/PreloadIndicator.tsx
const { progress, isComplete } = useGlobalPreload({
  startDelay: 5000  // ← 5 secondes au lieu de 2
})
```

### Masquer l'indicateur de progression

```typescript
// src/app/layout.tsx
// Commenter cette ligne :
// <PreloadIndicator />
```

Ou utiliser la version minimaliste :
```typescript
import { PreloadIndicatorMinimal } from '@/components/ui/PreloadIndicator'

<PreloadIndicatorMinimal />  // Juste une barre en bas
```

### Changer l'ordre de priorité

```typescript
// src/lib/spline-preloader.ts
private readonly scenes: SplineScene[] = [
  {
    name: 'DOOH',
    url: '...',
    priority: 'high',  // ← Changer la priorité
    sizeEstimateMB: 0.09
  },
]
```

### Forcer la mise à jour du cache

Changez la version dans `public/sw.js` :

```javascript
const CACHE_VERSION = 'v2'  // ← Incrémenter
const CACHE_NAME = `visuaal-spline-${CACHE_VERSION}`
```

L'ancien cache sera automatiquement supprimé.

---

## 📈 Monitoring en production

### Google Analytics 4

Le système envoie automatiquement des événements à GA4 :

```javascript
// Événement: spline_preload_complete
{
  event_category: 'Performance',
  total_scenes: 12,
  loaded_scenes: 12,
  failed_scenes: 0,
  total_duration_ms: 7020,
  cache_hit_rate: 100
}
```

### Métriques recommandées à suivre

1. **Taux de succès du préchargement** (`loaded_scenes / total_scenes`)
2. **Durée moyenne de préchargement** (`total_duration_ms`)
3. **Taux de cache hit** (`cache_hit_rate`)
4. **Taux d'activation du SW** (`service_worker_active`)

### Créer un dashboard

Utilisez Google Analytics 4 pour créer un rapport personnalisé :

1. **Événements** > `spline_preload_complete`
2. **Dimensions** : date, device, browser
3. **Métriques** : avg duration, success rate, cache hit rate

---

## 🔄 Mises à jour

### Mettre à jour une scène Spline

1. Changez l'URL dans `spline-preloader.ts`
2. Incrémentez la version du SW dans `sw.js`
3. Rebuild et redéployez

Le Service Worker détectera la nouvelle version et mettra à jour le cache automatiquement.

### Ajouter une nouvelle scène

```typescript
// src/lib/spline-preloader.ts
private readonly scenes: SplineScene[] = [
  // ... scènes existantes
  {
    name: 'Nouvelle Scene',
    url: 'https://prod.spline.design/NEW_ID/scene.splinecode',
    priority: 'medium',
    sizeEstimateMB: 0.15  // Estimez la taille
  },
]
```

N'oubliez pas de l'ajouter aussi dans `public/sw.js` :

```javascript
const SPLINE_SCENES = [
  // ... scènes existantes
  'https://prod.spline.design/NEW_ID/scene.splinecode',
]
```

---

## 📱 Compatibilité

### Navigateurs supportés

| Navigateur | Service Worker | Cache API | Support |
|------------|----------------|-----------|---------|
| Chrome 40+ | ✅ | ✅ | ✅ Full |
| Firefox 44+ | ✅ | ✅ | ✅ Full |
| Safari 11.1+ | ✅ | ✅ | ✅ Full |
| Edge 17+ | ✅ | ✅ | ✅ Full |
| iOS Safari 11.3+ | ✅ | ✅ | ⚠️ Limité (50MB quota) |
| Android Chrome | ✅ | ✅ | ✅ Full |

### Fallback pour navigateurs non supportés

Le système détecte automatiquement si le Service Worker est supporté :

```typescript
if (!('serviceWorker' in navigator)) {
  console.warn('Service Worker non supporté')
  // Le site fonctionne normalement, sans cache
}
```

---

## 🎯 Performance attendue

### Première visite

- **FCP** : ~1.5s (First Contentful Paint)
- **LCP** : ~2.5s (Largest Contentful Paint)
- **Préchargement complet** : ~7-9s en arrière-plan

### Visites suivantes

- **FCP** : ~0.8s
- **LCP** : ~1.2s
- **Navigation** : < 100ms
- **Cache hit rate** : 100%

### Économies de bande passante

Après le premier chargement :
- **0 requêtes réseau** pour les scènes Spline
- **~1.41 MB économisés** par navigation
- **Fonctionne offline**

---

## 🤝 Contribution

### Tester localement

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer le dev server
npm run dev

# 3. Ouvrir http://localhost:3000

# 4. Vérifier le Service Worker dans DevTools
```

**Note :** En mode dev, le Service Worker peut ne pas fonctionner correctement. Testez en production :

```bash
npm run build
npm run start
```

### Rapporter un bug

Créez un issue avec :
- Navigateur et version
- Logs de la console
- Screenshots du DevTools
- Steps to reproduce

---

## 📚 Références

- [Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)
- [Cache Storage API](https://developer.mozilla.org/en-US/docs/Web/API/CacheStorage)
- [Spline Runtime](https://docs.spline.design/runtime)
- [Next.js Caching](https://nextjs.org/docs/app/building-your-application/caching)

---

## ✅ Checklist de déploiement

Avant de déployer en production :

- [ ] Tests sur tous les navigateurs principaux
- [ ] Vérification du cache en navigation privée
- [ ] Tests de performance (Lighthouse)
- [ ] Vérification que le SW s'active correctement
- [ ] Tests de navigation offline
- [ ] Monitoring configuré (GA4)
- [ ] Logs de console propres (pas d'erreurs)
- [ ] Tests sur mobile (iOS + Android)

---

**Système créé le 2025-10-22**
**Version : 1.0**
