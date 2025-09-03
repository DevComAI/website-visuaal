# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Development with Turbopack
npm run dev

# Production build with Turbopack  
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Architecture Overview

This is a Next.js 15 website for Visuaal, a French digital agency. The application uses:

- **Next.js App Router** with TypeScript
- **Tailwind CSS v4** for styling  
- **React Hook Form** with Zod validation for forms
- **Lucide React** for icons
- **SEO optimization** with next-seo and comprehensive metadata

### Directory Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page  
│   ├── legal/             # Legal pages (CGV, mentions, etc.)
│   ├── products/          # Product pages (dooh, holo, studio, screen)
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Homepage
│   ├── robots.ts          # Robots.txt generation
│   └── sitemap.ts         # Sitemap generation
├── components/
│   ├── layout/            # Header, Footer
│   ├── sections/          # Page sections (Hero, About, Services, Contact)
│   └── ui/               # Reusable UI components
└── lib/
    ├── schema.ts          # Zod validation schemas
    └── utils.ts           # Utility functions
```

### Key Configuration

- **TypeScript** with strict mode and path aliases (`@/*` → `./src/*`)
- **ESLint** with Next.js recommended rules
- **Next.js config** includes image optimization, security headers, and Turbopack support
- **Metadata** is centrally managed in `layout.tsx` with OpenGraph and Twitter Card support
- **Fonts**: Inter (main) and JetBrains Mono (monospace) with `display: swap`

### Development Notes

- Uses Turbopack for faster development builds (`--turbopack` flag)
- No test framework is currently configured
- French localization (lang="fr", locale="fr_FR")
- Optimized for SEO with comprehensive meta tags and structured data