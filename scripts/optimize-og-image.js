// Script to optimize Open Graph image
// Run with: node scripts/optimize-og-image.js

const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const inputPath = path.join(__dirname, '../public/og-image.png');
const outputPath = path.join(__dirname, '../public/og-image.jpg');

async function optimizeImage() {
  try {
    console.log('🖼️  Optimizing Open Graph image...');
    console.log(`📂 Input: ${inputPath}`);

    // Check if input exists
    if (!fs.existsSync(inputPath)) {
      console.error('❌ og-image.png not found!');
      process.exit(1);
    }

    // Get original file size
    const originalStats = fs.statSync(inputPath);
    const originalSize = (originalStats.size / 1024 / 1024).toFixed(2);
    console.log(`📦 Original size: ${originalSize} MB`);

    // Optimize image
    await sharp(inputPath)
      .resize(1200, 630, {
        fit: 'cover',
        position: 'center'
      })
      .jpeg({
        quality: 85,
        progressive: true,
        mozjpeg: true
      })
      .toFile(outputPath);

    // Get new file size
    const newStats = fs.statSync(outputPath);
    const newSize = (newStats.size / 1024).toFixed(2);
    const reduction = ((1 - newStats.size / originalStats.size) * 100).toFixed(1);

    console.log(`✅ Optimized successfully!`);
    console.log(`📦 New size: ${newSize} KB`);
    console.log(`📉 Reduction: ${reduction}%`);
    console.log(`📂 Output: ${outputPath}`);

    if (newStats.size > 300 * 1024) {
      console.warn(`⚠️  Image is still > 300 KB. Consider reducing quality further.`);
    } else {
      console.log(`🎉 Perfect! Image is under 300 KB.`);
    }

  } catch (error) {
    console.error('❌ Error optimizing image:', error.message);
    process.exit(1);
  }
}

optimizeImage();
