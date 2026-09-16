# BeanBloom — Café & Bakery Website

A fully functional café website built with Next.js (App Router), React, TypeScript, Tailwind CSS, and lucide-react icons, matching the supplied reference design.

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

To build for production:

```bash
npm run build
npm run start
```

## Project structure

```
app/
  layout.tsx        Root layout, fonts, metadata
  page.tsx           Assembles all homepage sections
  globals.css        Tailwind base + small global styles
components/
  Header.tsx         Sticky header with desktop nav + mobile hamburger menu
  Hero.tsx           Hero section with headline, CTAs, café image
  About.tsx          "A Cozy Café for Everyone" split section
  SignaturePicks.tsx Menu category cards (Coffee, Pastries, Breakfast, Lunch, Desserts)
  News.tsx           "Stay Connected" news/blog section
  Statistics.tsx     "Our Story" stat counters
  Mission.tsx        Quote + mission split card
  Gallery.tsx        Photo gallery banner with carousel controls
  Footer.tsx         Footer with links, contact info, socials
  Button.tsx         Reusable CTA button (solid / outline / outline-light)
  Botanical.tsx       Reusable decorative line-art SVG
lib/
  data.ts            Navigation, menu, news, and stats data arrays
```

## Color palette — Green (Fresh & Natural)

A modern, fresh, and nature-inspired theme with soft green accents.

| Role | Hex |
|---|---|
| Primary Green | `#2E7D5B` |
| Light Green | `#EAF5EE` |
| Pale Green (section bg) | `#F3FAF4` |
| Cream | `#FAF8F5` |
| Terracotta (Accent) | `#C86F4A` |
| Dark Green | `#1F4D3A` |

This is a fixed, single-palette build — colors live directly in `tailwind.config.ts`. For the warm/original palette version, see the separate `beanbloom-warm` project.

## Notes

- Images are pulled from Unsplash (`images.unsplash.com`) via `next/image`. To use your own photography, drop files into `public/images/` and swap the `src` values in `lib/data.ts`, `Hero.tsx`, and `About.tsx` — the code is structured so this is a one-line change per image.
- The color palette (brown, light brown, beige, cream, terracotta, dark brown) is defined in `tailwind.config.ts` under `theme.extend.colors`, matching the supplied brand palette exactly.
- Headings use a serif stack (`Playfair Display`, falling back to Georgia/Times New Roman/serif) and body/UI text uses a clean sans-serif stack — no external font files are fetched at build time, so the project builds without any additional network access.
- All nav links (`Home`, `About`, `Menu`, `Gallery`, `Blog`, `Contact`) smooth-scroll to their matching section anchor.
- The mobile menu, gallery carousel, and hover states are implemented with plain React state — no extra UI libraries.
