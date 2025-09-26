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

- **Next.js App Router** with TypeScript and strict mode
- **Tailwind CSS v4** for utility-first styling with custom theme
- **React Hook Form** with Zod validation for forms
- **Spline Tool** for 3D graphics with responsive scaling
- **Nodemailer** for contact form email functionality
- **Docker** deployment with multi-stage builds

### Directory Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes (contact, health, newsletter)
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── legal/             # Legal pages (CGV, mentions, etc.)
│   ├── products/          # Product pages (dooh, holo, studio, screen)
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Homepage with mobile/desktop variants
│   ├── robots.ts          # Robots.txt generation
│   └── sitemap.ts         # Sitemap generation
├── components/
│   ├── layout/            # Header, Footer
│   ├── sections/          # Page sections (Hero, About, Services, Contact)
│   └── ui/               # Reusable UI components
└── lib/
    ├── schema.ts          # Zod validation schemas & JSON-LD structured data
    └── utils.ts           # Utility functions including cn() for class merging
```

### Key Configuration

- **TypeScript** with strict mode and path aliases (`@/*` → `./src/*`)
- **ESLint** with Next.js recommended rules and flat config
- **Next.js config** includes Turbopack, image optimization (AVIF/WebP), security headers, and standalone output for Docker
- **Metadata** is centrally managed in `layout.tsx` with OpenGraph, Twitter Card, and structured data
- **Fonts**: Custom Chillax font with variable weights, optimized with `display: swap`

### API Endpoints

- **POST /api/contact** - Contact form with Zod validation and email sending via Nodemailer
- **GET /api/health** - Health check endpoint for monitoring
- **POST /api/newsletter** - Newsletter subscription endpoint

### Mobile Optimization

The homepage (`page.tsx`) includes separate mobile and desktop components with:
- Responsive Spline 3D graphics that scale based on screen resolution
- Mobile-specific gradient animations
- Touch-friendly navigation and interactions

### Deployment

- **Docker** multi-stage build with Node.js 18 Alpine
- **GitHub Actions** workflows for staging and production deployments
- **Health checks** and automated rollback capabilities
- French localization (lang="fr", locale="fr_FR") throughout

### Development Notes

- Uses Turbopack for faster development builds (`--turbopack` flag)
- No test framework is currently configured
- Contact form emails are sent to contact@visuaal.fr
- Custom animations use Tailwind's animation utilities with infinite scroll patterns