# Guide d'Optimisation Vidéo pour 100% de Qualité

## 📋 Prérequis

Installer FFmpeg (si pas déjà installé) :
```bash
# macOS
brew install ffmpeg

# Ubuntu/Debian
sudo apt install ffmpeg

# Windows
# Télécharger depuis https://ffmpeg.org/download.html
```

## 🎬 Paramètres Optimaux

### Paramètres CRF (Constant Rate Factor)
- **CRF 18-20** : Qualité visuelle parfaite (quasi lossless)
- **CRF 21-23** : Excellente qualité (recommandé pour le web)
- **CRF 24-28** : Bonne qualité (mobile)
- Plus le CRF est bas, meilleure est la qualité (mais fichier plus lourd)

## 🔧 Commandes d'Optimisation

### 1. Version WebM (VP9) - Meilleure Compression
```bash
# Haute qualité - Desktop
ffmpeg -i /Users/antoinecibick/Documents/Projets/Glowsoft/website-visuaal/public/screen.mp4 \
  -c:v libvpx-vp9 \
  -crf 30 \
  -b:v 0 \
  -cpu-used 0 \
  -row-mt 1 \
  -an \
  /Users/antoinecibick/Documents/Projets/Glowsoft/website-visuaal/public/screen.webm

# Si trop lent, utiliser cpu-used 2 pour un encodage plus rapide
```

### 2. Version MP4 (H.264) - Meilleure Compatibilité
```bash
# Haute qualité - Desktop (1080p)
ffmpeg -i /Users/antoinecibick/Documents/Projets/Glowsoft/website-visuaal/public/screen.mp4 \
  -c:v libx264 \
  -preset slow \
  -crf 20 \
  -pix_fmt yuv420p \
  -movflags +faststart \
  -vf "scale=1920:1080:flags=lanczos" \
  -an \
  /Users/antoinecibick/Documents/Projets/Glowsoft/website-visuaal/public/screen-optimized.mp4

# Remplacer l'original
mv /Users/antoinecibick/Documents/Projets/Glowsoft/website-visuaal/public/screen-optimized.mp4 \
   /Users/antoinecibick/Documents/Projets/Glowsoft/website-visuaal/public/screen.mp4
```

### 3. Version Mobile (720p) - Optionnel
```bash
# Pour mobile - Fichier plus léger
ffmpeg -i /Users/antoinecibick/Documents/Projets/Glowsoft/website-visuaal/public/screen.mp4 \
  -c:v libx264 \
  -preset slow \
  -crf 23 \
  -pix_fmt yuv420p \
  -movflags +faststart \
  -vf "scale=1280:720:flags=lanczos" \
  -an \
  /Users/antoinecibick/Documents/Projets/Glowsoft/website-visuaal/public/screen-mobile.mp4
```

### 4. Version 4K - Si source en 4K
```bash
# Ultra haute qualité - 4K
ffmpeg -i /Users/antoinecibick/Documents/Projets/Glowsoft/website-visuaal/public/screen.mp4 \
  -c:v libx264 \
  -preset slow \
  -crf 18 \
  -pix_fmt yuv420p \
  -movflags +faststart \
  -vf "scale=3840:2160:flags=lanczos" \
  -an \
  /Users/antoinecibick/Documents/Projets/Glowsoft/website-visuaal/public/screen-4k.mp4
```

## 🎯 Recommandations pour 100% Qualité

### Option 1 : Qualité Maximale (fichier plus lourd)
```bash
# WebM VP9 - CRF 20
ffmpeg -i screen.mp4 -c:v libvpx-vp9 -crf 20 -b:v 0 -cpu-used 0 -row-mt 1 -an screen.webm

# MP4 H.264 - CRF 18
ffmpeg -i screen.mp4 -c:v libx264 -preset veryslow -crf 18 -pix_fmt yuv420p -movflags +faststart -an screen.mp4
```

### Option 2 : Équilibre Qualité/Poids (recommandé)
```bash
# WebM VP9 - CRF 30
ffmpeg -i screen.mp4 -c:v libvpx-vp9 -crf 30 -b:v 0 -cpu-used 1 -row-mt 1 -an screen.webm

# MP4 H.264 - CRF 20
ffmpeg -i screen.mp4 -c:v libx264 -preset slow -crf 20 -pix_fmt yuv420p -movflags +faststart -an screen.mp4
```

## 📊 Explication des Paramètres

### Paramètres Vidéo
- `-c:v libx264` / `-c:v libvpx-vp9` : Codec vidéo (H.264 / VP9)
- `-crf 18-20` : Qualité constante (18 = quasi parfait, 23 = excellent web)
- `-preset slow/veryslow` : Temps d'encodage vs qualité (slow recommandé)
- `-pix_fmt yuv420p` : Format pixel compatible tous navigateurs
- `-movflags +faststart` : Optimise le streaming (lecture progressive)
- `-an` : Supprime l'audio (pas nécessaire pour vidéo décorative)

### Paramètres WebM VP9
- `-b:v 0` : Mode qualité constante (CRF)
- `-cpu-used 0-2` : Vitesse encodage (0 = lent mais meilleur, 2 = rapide)
- `-row-mt 1` : Active le multi-threading

### Scaling (Redimensionnement)
- `-vf "scale=1920:1080:flags=lanczos"` : Redimensionne avec algorithme Lanczos (meilleure qualité)

## 🚀 Script Automatisé

Créer un fichier `optimize-video.sh` :

```bash
#!/bin/bash

INPUT="/Users/antoinecibick/Documents/Projets/Glowsoft/website-visuaal/public/screen.mp4"
OUTPUT_DIR="/Users/antoinecibick/Documents/Projets/Glowsoft/website-visuaal/public"

echo "🎬 Optimisation vidéo en cours..."

# WebM (VP9) - Meilleure compression
echo "📦 Création du format WebM..."
ffmpeg -i "$INPUT" \
  -c:v libvpx-vp9 \
  -crf 30 \
  -b:v 0 \
  -cpu-used 1 \
  -row-mt 1 \
  -an \
  "$OUTPUT_DIR/screen.webm" -y

# MP4 (H.264) - Fallback
echo "📦 Optimisation du format MP4..."
ffmpeg -i "$INPUT" \
  -c:v libx264 \
  -preset slow \
  -crf 20 \
  -pix_fmt yuv420p \
  -movflags +faststart \
  -an \
  "$OUTPUT_DIR/screen-temp.mp4" -y

# Remplacer l'original
mv "$OUTPUT_DIR/screen-temp.mp4" "$INPUT"

echo "✅ Optimisation terminée !"
echo "📊 Fichiers créés :"
ls -lh "$OUTPUT_DIR"/screen.*
```

Rendre exécutable et lancer :
```bash
chmod +x optimize-video.sh
./optimize-video.sh
```

## 📈 Vérification de la Qualité

### Comparer les vidéos
```bash
# Voir les métadonnées
ffprobe -v error -show_format -show_streams screen.mp4

# Comparer les tailles
ls -lh screen.*

# Extraire une frame pour comparaison visuelle
ffmpeg -i screen.mp4 -ss 00:00:05 -vframes 1 frame-original.png
ffmpeg -i screen-optimized.mp4 -ss 00:00:05 -vframes 1 frame-optimized.png
```

## 🎨 Recommandations Finales

### Pour PageSpeed 100% :
1. **WebM + MP4** : Utiliser les deux formats (WebM chargé en priorité)
2. **CRF 20-23** : Meilleur équilibre qualité/poids
3. **Supprimer l'audio** : `-an` réduit la taille significativement
4. **Lazy loading** : Utiliser `loading="lazy"` si vidéo below the fold
5. **Compression serveur** : Activer gzip/brotli sur le serveur

### Tailles de Fichier Attendues
- **WebM (CRF 30)** : ~60-70% plus petit que MP4
- **MP4 (CRF 20)** : Haute qualité, ~500KB-2MB par seconde de vidéo
- **MP4 (CRF 23)** : Bonne qualité, ~300KB-1MB par seconde

### Performance Web
- **Vidéo < 5MB** : Excellent ✅
- **Vidéo 5-10MB** : Bon ⚠️
- **Vidéo > 10MB** : Considérer une version plus courte ou poster en lazy load

## 🔗 Ressources

- [FFmpeg Documentation](https://ffmpeg.org/documentation.html)
- [WebM Best Practices](https://developers.google.com/media/vp9)
- [H.264 Encoding Guide](https://trac.ffmpeg.org/wiki/Encode/H.264)
