# Images à ajouter pour remplacer Spline

Tous les composants Spline ont été supprimés et remplacés par des composants Next.js Image optimisés. Voici la liste complète des chemins d'images à créer :

## Pages Hero

### Page About
- `/public/img/about/about-hero.jpg` - Image hero de la page About (desktop)
- `/public/heromobileabout.png` - Image hero de la page About (mobile) - **Déjà existe**

### Page Studio
- `/public/img/studio/studio-hero.jpg` - Image hero de la page Studio

## Sections

### Section Working (Homepage Desktop + Mobile)
- `/public/img/working/inform.jpg` - Image INFORM
- `/public/img/working/support.jpg` - Image SUPPORT
- `/public/img/working/modernize.jpg` - Image MODERNIZE

### Section AboutUs (Homepage)
- `/public/img/about/about-section.jpg` - Image de la section AboutUs

### Section AboutContent (Page About)
- `/public/img/about/about-content.jpg` - Image de contenu About

## Pages Produits

### Page DOOH
- `/public/img/products/dooh-content.jpg` - Image de contenu DOOH

### Page Holo (Human Box)
- `/public/img/products/holo-content.jpg` - Image de contenu holographique

### Page Screen
- `/public/img/products/screen-content.jpg` - Image de contenu écran LED

## Résumé des modifications

### Composants supprimés
- `SplineViewer.tsx`
- `OptimizedSplineViewer.tsx`
- `SplinePlaceholder.tsx`
- `PageLoader.tsx`
- `PageLoadingScreen.tsx`
- `PreloadIndicator.tsx`
- `PageTransition.tsx`
- `SplinePreloadProvider.tsx`

### Hooks/Lib supprimés
- `useSplinePreloader.tsx`
- `useGlobalPreload.ts`
- `usePagePreload.ts`
- `spline-preloader.ts`
- `spline-route-map.ts`
- `preload-tracking.ts`
- `audit-spline-scenes.js`
- `spline.d.ts`

### Dépendances supprimées
- `@splinetool/react-spline`
- `@splinetool/runtime`

## Optimisations appliquées

1. **Tous les composants Spline remplacés** par Next.js Image avec :
   - Attribut `fill` pour les backgrounds
   - `priority={true}` pour les images above-the-fold
   - `sizes` appropriés pour le responsive
   - Alt text descriptifs pour l'accessibilité

2. **Suppression de tous les loaders** - Le site se charge instantanément sans attendre les scènes 3D

3. **Suppression du preloading complexe** - Plus besoin de système de préchargement

4. **Footer allégé** - Fond Spline décoratif supprimé

5. **Layout optimisé** - Suppression des preconnect vers Spline CDN

## Prochaines étapes

1. Créer/ajouter les 9 images listées ci-dessus
2. Tester le site en local avec `npm run dev`
3. Vérifier que toutes les images s'affichent correctement
4. Faire un test de performance avec PageSpeed Insights
5. Déployer

## Format recommandé pour les images

- **Format** : WebP ou AVIF pour une compression optimale (Next.js les optimise automatiquement)
- **Résolution** :
  - Images hero : 1920x1080px minimum
  - Images de contenu : 1200x800px minimum
  - Images mobile : 800x600px minimum
- **Qualité** : Haute qualité, Next.js optimisera automatiquement

## Notes importantes

- Next.js Image optimise automatiquement les images (format, taille, lazy loading)
- Les attributs `sizes` permettent un responsive optimal
- Les images avec `priority={true}` sont chargées immédiatement (above the fold)
- Les autres sont lazy-loadées automatiquement
