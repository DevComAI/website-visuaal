# Guide pour créer l'image Open Graph (og-image.jpg)

## 📐 Spécifications Techniques

- **Dimensions**: 1200 x 630 pixels (ratio 1.91:1)
- **Format**: JPG ou PNG
- **Taille max**: < 1 MB (idéalement 200-300 KB)
- **Emplacement**: `/public/og-image.jpg`

## 🎨 Éléments à inclure

### 1. Logo Visuaal
- Placer le logo en haut à gauche ou centré
- Utiliser le logo complet `/public/logo/logo-full.svg`
- Taille recommandée: 200-300px de largeur

### 2. Texte Principal
**Titre**: "Digital Signage & Visual Solutions"
- Police: Chillax ou similaire (moderne, bold)
- Taille: 60-80px
- Couleur: Blanc (#FFFFFF)
- Position: Centre ou légèrement en haut

**Sous-titre**: "DOOH • LED Screens • Holographic Displays"
- Police: Chillax Regular
- Taille: 30-40px
- Couleur: Gris clair ou gradient

### 3. Éléments Visuels
Ajouter des visuels de vos produits:
- Screenshot d'un écran DOOH
- Human Box hologramme
- LED Screen
- Utiliser les images de `/public/img/home/`

### 4. Fond
- Utiliser le dégradé de votre marque
- Ou fond sombre (#140F16 à #211824)
- Ajouter des formes geometriques de `/public/forme/`

### 5. Localisation (optionnel)
Ajouter en bas: "Dubai • Paris • Shenzhen"

## 🛠️ Outils pour créer l'image

### Option 1: Figma (Recommandé)
1. Créer un frame 1200x630
2. Importer les assets
3. Exporter en JPG qualité 90%

### Option 2: Canva
1. Créer un design personnalisé 1200x630
2. Télécharger les assets nécessaires
3. Exporter en JPG

### Option 3: Photoshop
1. Nouveau document 1200x630px, 72 DPI
2. Mode RVB
3. Exporter en JPG optimisé

### Option 4: Code (HTML/CSS to Image)
Utiliser un service comme:
- https://htmlcsstoimage.com/
- https://og-image.vercel.app/

## ✅ Checklist avant export

- [ ] Dimensions exactes 1200x630
- [ ] Texte lisible (pas trop petit)
- [ ] Logo Visuaal visible
- [ ] Contraste suffisant
- [ ] Taille < 1 MB
- [ ] Pas de texte tronqué
- [ ] Visuels de qualité (pas pixelisés)

## 📍 Placement final

Une fois créée, placer l'image ici:
```
/public/og-image.jpg
```

L'image sera automatiquement utilisée pour:
- Partages Facebook
- Partages Twitter/X
- Partages LinkedIn
- Aperçus Google

## 🎨 Exemple de structure visuelle

```
┌─────────────────────────────────────────────────┐
│  [LOGO VISUAAL]                                 │
│                                                 │
│           Digital Signage &                     │
│           Visual Solutions                      │
│                                                 │
│     DOOH • LED Screens • Holographic Displays   │
│                                                 │
│  [Image Produit 1] [Image Produit 2] [Produit3]│
│                                                 │
│           Dubai • Paris • Shenzhen              │
└─────────────────────────────────────────────────┘
```

## 🎨 Palette de couleurs à utiliser

Gradient principal:
- #473FB9 (Violet)
- #4DA8D7 (Bleu)
- #9512B6 (Violet foncé)

Fond:
- #140F16 (Noir violet)
- #211824 (Noir rosé)

Texte:
- #FFFFFF (Blanc)
- rgba(255, 255, 255, 0.8) (Blanc transparent)

## 💡 Conseils

1. **Gardez-le simple**: Ne surchargez pas l'image
2. **Texte en gros**: Doit être lisible sur mobile
3. **Branding fort**: Logo bien visible
4. **Call-to-action visuel**: Montrez vos produits phares
5. **Testez**: Vérifiez comment ça s'affiche sur différents réseaux

## 🧪 Tester l'image

Une fois uploadée, testez avec:
- **Facebook Debugger**: https://developers.facebook.com/tools/debug/
- **Twitter Card Validator**: https://cards-dev.twitter.com/validator
- **LinkedIn Post Inspector**: https://www.linkedin.com/post-inspector/

Collez l'URL: `https://visuaal.com`
