/**
 * Script d'audit des scènes Spline
 * Mesure la taille et le temps de chargement de chaque scène
 *
 * Usage: node scripts/audit-spline-scenes.js
 */

/* eslint-disable @typescript-eslint/no-require-imports */
const https = require('https');

const SPLINE_SCENES = [
  { name: 'INFORM', url: 'https://prod.spline.design/1kfiH0yZ5dSGioTU/scene.splinecode' },
  { name: 'SUPPORT', url: 'https://prod.spline.design/YQnsevjGuljq6asJ/scene.splinecode' },
  { name: 'MODERNIZE', url: 'https://prod.spline.design/SdbEwI9-LUOY0hlb/scene.splinecode' },
  { name: 'Footer Background', url: 'https://prod.spline.design/2pGj4e2pJIQVw8CK/scene.splinecode' },
  { name: 'About Content', url: 'https://prod.spline.design/b5QNjdMLUJW-blFk/scene.splinecode' },
  { name: 'AboutUs Section', url: 'https://prod.spline.design/Sj5w2qinD5unnyvb/scene.splinecode' },
  { name: 'About Hero', url: 'https://prod.spline.design/X07icIhhYxWFwhO1/scene.splinecode' },
  { name: 'Studio Hero', url: 'https://prod.spline.design/XihlwxPitjwHnwb9/scene.splinecode' },
  { name: 'Studio Content', url: 'https://prod.spline.design/VhnOlUUBXyLXytif/scene.splinecode' },
  { name: 'DOOH', url: 'https://prod.spline.design/K3MXxwuzrEPrTBi4/scene.splinecode' },
  { name: 'Holo', url: 'https://prod.spline.design/63D-bD0D4e6xHPvT/scene.splinecode' },
  { name: 'Screen', url: 'https://prod.spline.design/qDj32pWs0uTcm5kM/scene.splinecode' },
];

function fetchSceneInfo(scene) {
  return new Promise((resolve) => {
    const startTime = Date.now();
    let totalSize = 0;

    https.get(scene.url, (res) => {
      res.on('data', (chunk) => {
        totalSize += chunk.length;
      });

      res.on('end', () => {
        const endTime = Date.now();
        const duration = endTime - startTime;

        resolve({
          name: scene.name,
          url: scene.url,
          sizeBytes: totalSize,
          sizeMB: (totalSize / 1024 / 1024).toFixed(2),
          durationMs: duration,
          durationS: (duration / 1000).toFixed(2),
        });
      });
    }).on('error', (err) => {
      resolve({
        name: scene.name,
        url: scene.url,
        error: err.message,
      });
    });
  });
}

async function auditAllScenes() {
  console.log('\n🔍 Audit des scènes Spline en cours...\n');
  console.log('═══════════════════════════════════════════════════════════════════════════\n');

  const results = [];

  for (const scene of SPLINE_SCENES) {
    process.stdout.write(`⏳ Chargement: ${scene.name.padEnd(20)} ... `);
    const result = await fetchSceneInfo(scene);

    if (result.error) {
      console.log(`❌ Erreur: ${result.error}`);
    } else {
      console.log(`✅ ${result.sizeMB} MB (${result.durationS}s)`);
    }

    results.push(result);
  }

  console.log('\n═══════════════════════════════════════════════════════════════════════════\n');
  console.log('📊 RAPPORT D\'AUDIT COMPLET\n');

  console.log('┌─────────────────────┬─────────────┬──────────────┬────────────────────────────┐');
  console.log('│ Scène               │ Taille (MB) │ Durée (s)    │ Priorité Recommandée       │');
  console.log('├─────────────────────┼─────────────┼──────────────┼────────────────────────────┤');

  results.forEach((r) => {
    if (r.error) {
      console.log(`│ ${r.name.padEnd(19)} │ ERROR       │ ERROR        │ N/A                        │`);
    } else {
      let priority = 'Low';
      if (['INFORM', 'SUPPORT', 'MODERNIZE'].includes(r.name)) priority = 'High (Homepage)';
      else if (['AboutUs Section', 'About Hero', 'About Content'].includes(r.name)) priority = 'Medium (About)';
      else if (r.name === 'Footer Background') priority = 'Very Low (Footer)';
      else priority = 'Medium (Products)';

      console.log(`│ ${r.name.padEnd(19)} │ ${r.sizeMB.padStart(11)} │ ${r.durationS.padStart(12)} │ ${priority.padEnd(26)} │`);
    }
  });

  console.log('└─────────────────────┴─────────────┴──────────────┴────────────────────────────┘\n');

  // Statistiques globales
  const validResults = results.filter(r => !r.error);
  const totalSize = validResults.reduce((sum, r) => sum + parseFloat(r.sizeMB), 0);
  const totalDuration = validResults.reduce((sum, r) => sum + parseFloat(r.durationS), 0);
  const avgSize = totalSize / validResults.length;
  const avgDuration = totalDuration / validResults.length;

  console.log('📈 STATISTIQUES GLOBALES\n');
  console.log(`   Total des scènes:     ${SPLINE_SCENES.length}`);
  console.log(`   Scènes chargées:      ${validResults.length}`);
  console.log(`   Taille totale:        ${totalSize.toFixed(2)} MB`);
  console.log(`   Taille moyenne:       ${avgSize.toFixed(2)} MB`);
  console.log(`   Durée totale:         ${totalDuration.toFixed(2)}s`);
  console.log(`   Durée moyenne:        ${avgDuration.toFixed(2)}s`);

  console.log('\n💡 RECOMMANDATIONS\n');
  if (totalSize > 30) {
    console.log(`   ⚠️  ATTENTION: Taille totale (${totalSize.toFixed(2)} MB) dépasse 30 MB`);
    console.log('   → Envisager une compression ou réduction des scènes');
  } else {
    console.log(`   ✅ Taille totale acceptable (${totalSize.toFixed(2)} MB < 30 MB)`);
  }

  const largestScenes = validResults.sort((a, b) => parseFloat(b.sizeMB) - parseFloat(a.sizeMB)).slice(0, 3);
  console.log('\n   🔝 3 scènes les plus lourdes:');
  largestScenes.forEach((scene, idx) => {
    console.log(`      ${idx + 1}. ${scene.name}: ${scene.sizeMB} MB`);
  });

  console.log('\n═══════════════════════════════════════════════════════════════════════════\n');
  console.log('✨ Audit terminé!\n');
}

auditAllScenes().catch(console.error);
