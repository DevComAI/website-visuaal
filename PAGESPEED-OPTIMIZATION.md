# Guide d'Optimisation PageSpeed Insights

## 🚨 Pourquoi PageSpeed Insights crash ?

### Causes principales :
1. **Animations Spline 3D très lourdes** → Timeout lors de l'analyse
2. **Service Worker** → Peut interférer avec Lighthouse
3. **Site non déployé** → Test sur localhost ou domaine incorrect
4. **URL incorrecte** → Testez `visuaal.com` pas `visuaal.ai`

---

## ✅ SOLUTIONS IMMÉDIATES

### 1. Tester la bonne URL

**Assurez-vous de tester :**
```
https://visuaal.com
```

**PAS :**
```
https://visuaal.ai (si c'est pas votre domaine)
http://localhost:3000
```

---

### 2. Désactiver temporairement les animations lourdes

Pour tester PageSpeed sans crash, vous pouvez :

**Option A : Tester une page sans Spline**
- Testez `/contact` ou `/about` d'abord
- Ces pages sont plus légères

**Option B : Lazy load plus agressif**
Modifiez `OptimizedSplineViewer` pour charger uniquement au scroll.

---

### 3. Vérifier le Service Worker

Le Service Worker peut causer des problèmes avec PageSpeed.

**Testez sans Service Worker :**
1. Ouvrez Chrome DevTools (F12)
2. Application → Service Workers
3. Cliquez "Unregister" temporairement
4. Relancez le test PageSpeed

---

### 4. Optimisations recommandées

#### A. Preload des ressources critiques

Ajoutez dans `layout.tsx` :
```tsx
<head>
  <link rel="preconnect" href="https://prod.spline.design" />
  <link rel="dns-prefetch" href="https://prod.spline.design" />
  <link rel="preload" as="image" href="/og-image.jpg" />
</head>
```

#### B. Optimiser les images

Convertissez toutes les images en WebP/AVIF :
```bash
npm install sharp
```

#### C. Réduire le JavaScript

Vérifiez le bundle :
```bash
npm run build
```

Regardez les tailles dans le rapport de build.

---

## 🎯 SCORES ATTENDUS (après optimisations)

### Mobile
- **Performance** : 60-75 (acceptable avec Spline)
- **Accessibilité** : 95-100 ✅
- **Best Practices** : 95-100 ✅
- **SEO** : 95-100 ✅

### Desktop
- **Performance** : 85-95
- **Accessibilité** : 95-100 ✅
- **Best Practices** : 95-100 ✅
- **SEO** : 95-100 ✅

---

## 🔧 ALTERNATIVES À PAGESPEED INSIGHTS

Si PageSpeed continue de crasher, utilisez :

### 1. **WebPageTest**
https://www.webpagetest.org/
- Plus tolérant avec les animations
- Tests détaillés par région
- Waterfall charts

### 2. **GTmetrix**
https://gtmetrix.com/
- Interface plus simple
- Recommandations détaillées
- Tests réguliers gratuits

### 3. **Lighthouse CLI (local)**
```bash
npm install -g lighthouse
lighthouse https://visuaal.com --view
```

### 4. **Chrome DevTools Lighthouse**
1. F12 → Lighthouse tab
2. Cochez "Performance", "SEO", etc.
3. Click "Analyze page load"

---

## 📊 MÉTRIQUES IMPORTANTES

### Core Web Vitals
| Métrique | Bon | À améliorer | Mauvais |
|----------|-----|-------------|---------|
| **LCP** (Largest Contentful Paint) | < 2.5s | 2.5-4s | > 4s |
| **FID** (First Input Delay) | < 100ms | 100-300ms | > 300ms |
| **CLS** (Cumulative Layout Shift) | < 0.1 | 0.1-0.25 | > 0.25 |

---

## 🚀 OPTIMISATIONS AVANCÉES

### 1. Lazy load images

Toutes vos images Next.js sont déjà optimisées :
```tsx
<Image
  src="/img/..."
  loading="lazy" // ✅ Déjà fait automatiquement
/>
```

### 2. Code splitting

Next.js le fait automatiquement :
```bash
✓ Build réussi avec code splitting
✓ Chunks séparés pour Spline
```

### 3. Compression

Vérifiez que votre hébergeur active :
- **Gzip** ou **Brotli** compression
- **HTTP/2** ou **HTTP/3**

### 4. CDN

Utilisez un CDN pour :
- Images statiques
- Fichiers CSS/JS
- Fonts

---

## ⚡ QUICK WINS

### Déjà fait ✅
- [x] Next.js Image optimization (AVIF/WebP)
- [x] ETags activés
- [x] Compression activée
- [x] Headers de cache optimisés
- [x] Preconnect Spline CDN
- [x] Code splitting automatique

### À faire
- [ ] Créer `/public/og-image.jpg` (optimisé < 200KB)
- [ ] Tester avec WebPageTest
- [ ] Configurer Cloudflare CDN (optionnel)
- [ ] Ajouter `fetchpriority="high"` sur logo

---

## 🧪 COMMENT TESTER

### Méthode 1 : PageSpeed Insights (recommandé)
1. Allez sur https://pagespeed.web.dev/
2. Entrez : `https://visuaal.com`
3. Attendez 45-60 secondes
4. Si crash → Testez une page plus légère (`/contact`)

### Méthode 2 : Chrome DevTools
1. Ouvrez votre site en navigation privée
2. F12 → Lighthouse
3. Sélectionnez "Mobile" ou "Desktop"
4. Cliquez "Analyze page load"

### Méthode 3 : Lighthouse CLI
```bash
lighthouse https://visuaal.com \
  --only-categories=performance,seo,accessibility \
  --view
```

---

## 🎯 OBJECTIFS RÉALISTES

Avec Spline (animations 3D lourdes) :
- **Mobile Performance** : 60-70 (bon)
- **Desktop Performance** : 85-90 (excellent)
- **SEO** : 95-100 (parfait) ✅
- **Accessibilité** : 90-95 (bon)

**Note** : Les sites avec animations 3D ont rarement 90+ en performance mobile.
C'est un compromis accepté pour l'expérience utilisateur premium.

---

## 📞 SUPPORT

Si vous avez encore des problèmes :
1. Vérifiez que le site est en production
2. Testez `/contact` (page plus légère)
3. Utilisez WebPageTest ou GTmetrix
4. Vérifiez les Core Web Vitals dans Google Search Console

---

## ✅ CHECKLIST AVANT TEST

- [ ] Site déployé en production
- [ ] URL correcte (visuaal.com)
- [ ] Fichier `/public/og-image.jpg` créé
- [ ] Build réussi (`npm run build`)
- [ ] Cache navigateur vidé
- [ ] Tester en navigation privée

---

## 🎉 RÉSULTATS ATTENDUS

Une fois tout optimisé, vous devriez voir :
- ✅ **SEO** : 95-100 (grâce à nos optimisations !)
- ✅ **Accessibilité** : 90-95
- ⚠️ **Performance** : 60-85 (normal avec Spline)
- ✅ **Best Practices** : 95-100

**C'est excellent pour un site avec animations 3D !**
