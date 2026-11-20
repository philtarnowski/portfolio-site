# philtarnowski.com

The source for [philtarnowski.com](https://philtarnowski.com), my product portfolio. I'm an AI-native B2B product manager with 10+ years in B2B SaaS.

## What's on the site

- **[Home](https://philtarnowski.com)** · where I've built products, my experience, and how I build with AI
- **[Elate case study](https://philtarnowski.com/elate/)** · from $20K ARR to a Series A as the first product hire, including four AI modules built on Gemini models
- **[Endurance Grid case study](https://philtarnowski.com/endurance-grid/)** · from idea to $37K in race registrations, with a website and iOS and Android apps built with AI

## How I built it

I built this site the same way I build products: design first, then build with AI.

- **Designed first.** Every page started as a clickable design I iterated on before any code was written.
- **Built with Claude Code.** The site is [Astro](https://astro.build), built with an AI coding agent working from written design rules.
- **One design system.** A single spacing rule and type scale (below) keep every page consistent, and the colors and type match my brand.
- **Static and fast.** No database, no tracking, and no client-side framework. Every page is plain HTML and CSS.
- **Checked before shipping.** Each page was tested at phone, tablet, and desktop widths, with share images for LinkedIn and a sitemap for search.
- **Published automatically.** Every push to `main` builds and publishes the site with GitHub Actions and GitHub Pages.

## Run it locally

```bash
npm install
npm run dev
```

## Where things live

| What | Where |
|------|-------|
| Pages (home and each case study) | `src/pages/` |
| Shared layout, fonts, and page head | `src/layouts/Base.astro` |
| Nav with the Case Studies dropdown | `src/components/Nav.astro` |
| Footer | `src/components/Footer.astro` |
| Case study list (feeds the dropdown) | `src/data/caseStudies.ts` |
| Site-wide styles and colors | `src/styles/global.css` |
| Images and logos | `public/images/` |
| Share images for links (1200×630, one per page) | `public/og/` |
| Not-found page | `src/pages/404.astro` |
| Sitemap (home + every case study) | `src/pages/sitemap.xml.ts` |
| Custom domain | `public/CNAME` |

## Design rules

### Spacing

Every section uses the same rhythm, so a new section should copy it:

- **Section padding:** `clamp(40px, 5vw, 64px)` above and below the content (64px on desktop, 40px on phones), with 32px on the sides.
- **Heading straight into content:** 32px below the heading.
- **Heading with an intro line:** 12px below the heading, then 32px below the intro.

### Type scale

Headings are Barlow Condensed 800. Body text is DM Sans. Use these sizes instead of picking new ones:

| Role | Size |
|------|------|
| Page headline (H1) | `clamp(40px, 4.4vw, 56px)` |
| Section heading (H2) | `clamp(32px, 3.2vw, 40px)` |
| Pull quote | `clamp(26px, 2.8vw, 34px)` |
| Big stat number | 40px (32px inside cards) |
| Card title, large | 26px |
| Card title, small | 22px |
| Hero intro | 20px |
| Intro line under a section heading | 18px |
| Long-form paragraphs | 17px |
| Card and list text | 16px |
| Small text, captions, dates | 13–15px |
| Labels | 12px |

## Add a case study

1. Copy `src/pages/elate.astro` to a new file, like `src/pages/new-company.astro`, and replace the content.
2. Add an entry to `src/data/caseStudies.ts` so it shows up in the nav dropdown and the sitemap.
3. Put its images in `public/images/`.
4. Add a 1200×630 share image to `public/og/` and pass it to `<Base image="/og/new-company.png">`. If you change a page headline, update its share image too.
