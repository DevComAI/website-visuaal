module.exports = {
  ci: {
    collect: {
      numberOfRuns: 3,
      settings: {
        // Augmenter les timeouts pour Spline
        maxWaitForLoad: 45000,
        maxWaitForFcp: 30000,
        // Désactiver certains audits problématiques temporairement
        skipAudits: ['uses-http2'],
      },
    },
    assert: {
      assertions: {
        'categories:performance': ['warn', { minScore: 0.7 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:best-practices': ['warn', { minScore: 0.9 }],
        'categories:seo': ['error', { minScore: 0.95 }],
      },
    },
  },
};
