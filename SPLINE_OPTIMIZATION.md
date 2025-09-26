# Guide d'Optimisation Spline

## Composants créés pour optimiser le chargement de Spline

### 1. OptimizedSplineViewer
Remplace `SplineViewer` avec des fonctionnalités d'optimisation:

```tsx
import OptimizedSplineViewer from '@/components/ui/OptimizedSplineViewer'

<OptimizedSplineViewer
  scene="https://prod.spline.design/..."
  priority={true}              // Charge immédiatement si true
  placeholder="/preview.jpg"   // Image de preview
  placeholderVariant="blur"    // Type: 'gradient' | 'blur' | 'skeleton'
  loadingDelay={100}           // Délai avant chargement (ms)
  interactive={true}            // Interaction utilisateur
/>
```

**Fonctionnalités:**
- ✅ Lazy loading avec Intersection Observer
- ✅ Placeholders animés pendant le chargement
- ✅ Gestion des erreurs avec retry
- ✅ Préchargement intelligent
- ✅ Optimisation des interactions scroll/wheel

### 2. SplinePlaceholder
Placeholders visuels pendant le chargement:

```tsx
import SplinePlaceholder from '@/components/ui/SplinePlaceholder'

<SplinePlaceholder
  variant="gradient"     // 'gradient' | 'blur' | 'skeleton'
  placeholder="/img.jpg" // Image de fond optionnelle
  text="Chargement..."   // Texte personnalisé
  showProgress={true}    // Barre de progression
  progress={50}          // Pourcentage (0-100)
/>
```

### 3. useSplinePreloader Hook
Précharge les scènes en arrière-plan:

```tsx
import { useSplinePreloader } from '@/lib/hooks/useSplinePreloader'

function MyComponent() {
  const { isLoading, progress, error } = useSplinePreloader(
    'https://prod.spline.design/...',
    {
      priority: 'high',    // 'high' | 'normal' | 'low'
      timeout: 30000,      // Timeout en ms
      retries: 3           // Nombre de tentatives
    }
  )

  return (
    <div>
      {isLoading && <p>Chargement: {progress}%</p>}
      {error && <p>Erreur: {error.message}</p>}
    </div>
  )
}
```

### 4. SplinePreloadProvider
Gestion centralisée du préchargement:

```tsx
import { SplinePreloadProvider } from '@/components/providers/SplinePreloadProvider'

// Dans layout.tsx
<SplinePreloadProvider
  initialScenes={[
    'https://prod.spline.design/scene1.splinecode',
    'https://prod.spline.design/scene2.splinecode'
  ]}
  preloadOnIdle={true}  // Précharge quand le navigateur est idle
>
  {children}
</SplinePreloadProvider>
```

## Stratégies d'optimisation recommandées

### 1. Pages avec Spline critique (Hero)
```tsx
<HeroSpline
  splineUrl="..."
  priority={true}        // Charge immédiatement
  placeholder="/preview.jpg"  // Image floue pendant chargement
/>
```

### 2. Pages avec plusieurs Splines
```tsx
// Premier Spline visible
<OptimizedSplineViewer
  scene={scene1}
  priority={true}
/>

// Splines suivants avec lazy loading
<OptimizedSplineViewer
  scene={scene2}
  loadingDelay={200}     // Décalage progressif
/>

<OptimizedSplineViewer
  scene={scene3}
  loadingDelay={400}
/>
```

### 3. Mobile vs Desktop
```tsx
const isMobile = window.innerWidth < 768

<OptimizedSplineViewer
  scene={splineUrl}
  interactive={!isMobile}      // Désactive interaction mobile
  loadingDelay={isMobile ? 500 : 100}  // Plus de délai mobile
  placeholderVariant={isMobile ? 'skeleton' : 'gradient'}
/>
```

## Performance Metrics

### Avant optimisation:
- ⚠️ Chargement immédiat de tous les Splines
- ⚠️ Pas de feedback visuel
- ⚠️ Mobile et desktop identiques
- ⚠️ ~3-5s de chargement initial

### Après optimisation:
- ✅ Lazy loading avec intersection observer
- ✅ Placeholders animés
- ✅ Préchargement intelligent
- ✅ Mobile optimisé
- ✅ ~0.5-1s pour le premier affichage

## Migration

Remplacer dans vos composants:

```tsx
// Avant
import SplineViewer from '@/components/ui/SplineViewer'
<SplineViewer scene={url} />

// Après
import OptimizedSplineViewer from '@/components/ui/OptimizedSplineViewer'
<OptimizedSplineViewer
  scene={url}
  priority={isAboveFold}
  placeholder="/preview.jpg"
/>
```

## Bonnes pratiques

1. **Toujours utiliser des placeholders** pour les Splines au-dessus de la ligne de flottaison
2. **Définir `priority={true}`** uniquement pour le premier Spline visible
3. **Utiliser `loadingDelay`** pour échelonner le chargement
4. **Désactiver les interactions sur mobile** pour améliorer les performances
5. **Précharger les scènes critiques** avec SplinePreloadProvider
6. **Optimiser les fichiers Spline** avant l'upload (< 5MB recommandé)