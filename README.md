# Ali Akbar — Portfolio

A premium, animated personal portfolio built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Design direction

- **Palette:** deep teal-ink background (`#0C1618`), "rank #1 gold" accent (`#D8A93E`), growth teal (`#4FD1C5`), soft sage-white for light text (`#EDEFEA`). Deliberately avoids the generic cream/serif/terracotta and near-black/neon-green looks — this palette is built around the idea of search rankings (gold = position #1).
- **Type:** Space Grotesk for display headings, Inter for body copy, IBM Plex Mono for data labels, eyebrows, and rank numbers (a nod to analytics dashboards and SERP data).
- **Signature element:** the hero's `RankTicker` — a scrolling ledger of keyword rankings climbing, and the top-of-page scroll bar is framed as a "crawling / indexed" progress indicator. Both motifs are grounded in real SEO vernacular rather than decorative gradients.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing content

Almost all copy and data lives in **`lib/data.ts`** — edit that file to update:
- Name, role, contact details (`profile`)
- About story and stats
- Services, skills, experience, achievements
- Projects, testimonials (see "Demo content" below)
- FAQ, process steps, tech stack

## Demo content — replace before publishing

A few sections use clearly-labeled **placeholder/demo content** so the layout can be reviewed immediately:

- **Projects** (`lib/data.ts` → `projects`): sample case-study titles/categories, each tagged `isDemo: true` and shown with a "Demo Placeholder" badge on the card. Replace every entry with your own real project work — do not present these as delivered projects.
- **Testimonials** (`lib/data.ts` → `testimonials`): placeholder quotes shown with dashed borders and a "Placeholder" tag. Replace with real client feedback.
- **Achievement numbers** (`lib/data.ts` → `achievements`) and a few experience entries are marked `// TODO` — replace with your verified numbers and real employer/client names.

## SEO

- Metadata, Open Graph, and Twitter Card tags are set in `app/layout.tsx`.
- A `ProfessionalService`/`Person` JSON-LD schema is injected in the same file.
- `public/robots.txt` and `public/sitemap.xml` are included — update the domain in both once deployed, and in `app/layout.tsx` (`siteUrl`).
- Replace `public/og-image.jpg` (1200×630) with a real social preview image.

## Deployment

Works out of the box on Vercel, Netlify, or any Node host:

```bash
npm run build
npm run start
```

## Accessibility & performance notes

- Respects `prefers-reduced-motion` (see `app/globals.css`).
- Visible focus rings on all interactive elements.
- Ticker/marquee elements are decorative and don't trap keyboard focus.
- Fonts are loaded via `next/font` for zero layout shift and no external requests.
