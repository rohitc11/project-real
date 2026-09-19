# Keyturn Media — website

Marketing site for a real estate growth marketing agency. Built with Next.js 16
(App Router), TypeScript and Tailwind CSS v4.

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in RESEND_API_KEY before going live
npm run dev                  # http://localhost:3000
```

Other scripts: `npm run build`, `npm run start`, `npm run lint`.

## Changing the brand

The brand is a constant, not a string scattered through components.

| To change | Edit |
| --- | --- |
| Company name, tagline, contact details, socials, address | `src/config/brand.ts` |
| Light or dark theme | `THEME` in `src/config/theme.ts` |
| Colours, fonts, radii, motion | the `:root` block in `src/app/globals.css` |
| Navigation and footer links | `src/config/site.ts` |
| Service catalogue | `src/config/services.ts` |
| Stats, process, case studies, testimonials, FAQs, industries | `src/config/content.ts` |

Nothing outside `src/config/brand.ts` hardcodes the company name. Renaming the
company is a one-file edit; the logo, metadata, sitemap, JSON-LD, OG image,
legal pages and every CTA follow automatically.

## Theming

The site ships two complete palettes. Light is the default `:root` set in
`globals.css`; dark lives under `[data-theme="dark"]` in the same file. Flipping
`THEME` in `src/config/theme.ts` writes the attribute onto `<html>` and switches
everything — including the `theme-color` meta tag, the generated favicon and the
OG card.

Components never reference a white or black literal. Effects that have to differ
between themes go through semantic tokens instead: `--brand-tint` for hover
overlays, `--brand-shadow` / `--brand-shadow-strong` for elevation,
`--brand-scrim` for the translucent header, `--brand-aura-*` for the section
washes, and `--brand-grain-blend` / `--brand-grain-opacity` for the paper
texture.

`src/config/theme.ts` mirrors a handful of hex values because `next/og` renders
outside the browser and cannot read CSS custom properties. That file is the only
place any colour is duplicated, and it says so in a comment.

The light palette was checked against WCAG AA: every text token clears 4.5:1 on
the page background, on cards and on the hover surface.

## Architecture

```
src/config/      brand + content data, the only place copy and constants live
src/components/
  brand/         logo and marks
  layout/        header, footer, floating contact, JSON-LD
  sections/      composable page sections
  ui/            container, button, section, scroll reveal
src/app/         routes, sitemap, robots, generated icon and OG image
src/lib/         small helpers
```

Sections are composed, not duplicated: `ServicesOverview`, `SelectedWork`,
`ProcessOverview` and `CtaBand` each appear on several pages.

## Notes

- Scroll animation uses `IntersectionObserver` and CSS transitions rather than an
  animation library, and respects `prefers-reduced-motion`.
- The contact form is a React server action that posts to the Resend REST API.
  There is no email SDK in the bundle.
- Case study metrics, testimonials and stats in `src/config/content.ts` are
  placeholders. Replace them with verified figures before launch.
