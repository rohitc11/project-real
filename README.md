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
| Paper or blueprint palette | `THEME` in `src/config/theme.ts` |
| Colours, fonts, radii, motion | the `:root` block in `src/app/globals.css` |
| Navigation and footer links | `src/config/site.ts` |
| Service catalogue | `src/config/services.ts` |
| Stats, process, case studies, testimonials, FAQs, industries | `src/config/content.ts` |

Nothing outside `src/config/brand.ts` hardcodes the company name. Renaming the
company is a one-file edit; the logo, metadata, sitemap, JSON-LD, OG image,
legal pages and every CTA follow automatically.

## Design direction — "Site Plan"

The site is organised like an architectural drawing set, and the structure
carries meaning rather than decorating it:

- **Sheet references.** Every page and section carries one (`A-03`, `B-00`).
  The reference in the services menu is the same one on that service's page.
- **The drawing schedule.** Services are a schedule table with a scope column
  and a drawing column, not a grid of cards.
- **Dimension lines.** `<DimensionLine>` draws a before/after claim to scale —
  a 96% cut in response time renders as a line 6% as long. Only use it for
  comparisons that genuinely have a unit and a baseline; anywhere else it is
  decoration and should be deleted.
- **The programme bar.** Process stages carry a bar whose offset and length
  match when they run, so the overlap between building and scaling is visible.
- **The title block.** The footer is a ruled grid of labelled cells — practice,
  contact, studio, revision — the way a drawing sheet carries that information.
- **The survey grid.** A 48px grid, masked to fade downward so it reads as
  drawing ground rather than a texture stamped over everything.

Type is Archivo and IBM Plex Mono. Archivo carries a width axis, and the
display roles expand it to 118% — that width is what makes headings read as
drafted rather than merely large. Every annotation, dimension, sheet reference
and label uses the mono face. Three type roles are defined as classes in
`globals.css`: `.type-display`, `.type-title`, `.type-note`, `.type-data`.

## Theming

Two complete palettes ship. Light is **paper** (`#e9ece6` ground, survey orange);
dark is **blueprint** (`#0b1a24` ground, warm orange). Light is the default
`:root` set in `globals.css`; dark lives under `[data-theme="dark"]`. Flipping
`THEME` in `src/config/theme.ts` writes the attribute onto `<html>` and switches
everything, including the `theme-color` meta tag, the favicon and the OG card.

Token naming is deliberate: `ink` means the drawn line, not the page. The page
ground is `ground` and raised surfaces are `paper`.

The accent is split in two because one orange could not do both jobs
accessibly. `--brand-accent` (`#c2471a`) is for display type, rules and marks,
where WCAG's 3:1 large-text threshold applies. `--brand-accent-deep`
(`#a83a11`) is for anything set small, where 4.5:1 applies. Both were measured
against the ground, the paper surface and the hover wash.

Components never reference a colour literal. Effects that differ between themes
go through semantic tokens: `--brand-tint` (hover), `--brand-shadow`,
`--brand-scrim` (translucent header), `--brand-grid` (survey grid).

`src/config/theme.ts` mirrors a handful of hex values because `next/og` renders
outside the browser and cannot read CSS custom properties. That file is the only
place any colour is duplicated, and it says so in a comment.

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

## Deploying to Vercel

The repo is already pushed to `origin`, so the import path is the simplest.

1. At [vercel.com/new](https://vercel.com/new), import `rohitc11/project-real`.
   Next.js is detected automatically — do not override build or output settings.
2. Add environment variables before the first deploy (Settings → Environment
   Variables), for Production and Preview:

   | Variable | Needed | Notes |
   | --- | --- | --- |
   | `RESEND_API_KEY` | Yes, before launch | Without it the contact form returns a visible error in production rather than dropping leads silently |
   | `CONTACT_TO_EMAIL` | Optional | Defaults to `BRAND.email.general` |
   | `CONTACT_FROM_EMAIL` | Optional | Must be a sender verified in Resend |
   | `NEXT_PUBLIC_SITE_URL` | Only once a domain is attached | e.g. `https://keyturnmedia.com` |

3. Deploy. Every push to `main` ships to production; every other branch gets a
   preview URL.

CLI alternative, from the project root: `npx vercel` for a preview,
`npx vercel --prod` for production. `npx vercel env add RESEND_API_KEY`
adds variables without the dashboard.

### About the site URL

Absolute URLs — `metadataBase`, `sitemap.xml`, `robots.txt` and the JSON-LD —
resolve through `siteUrl` in `src/config/brand.ts`, in this order:

1. `NEXT_PUBLIC_SITE_URL`
2. Vercel's production domain, injected automatically
3. `BRAND.url`

So a deployment is correct on `*.vercel.app` before any domain exists, and
correct again the moment one is attached. `BRAND.url` stays the canonical
value and does not need editing to deploy.

### Attaching a domain

Add it under Settings → Domains, point the registrar at Vercel's nameservers
(or add the `A` / `CNAME` records it shows), then set `NEXT_PUBLIC_SITE_URL` to
the final origin and redeploy so the sitemap and OG tags follow.

### Before going live

- Replace every `PLACEHOLDER` in `src/config/brand.ts`
- Replace the sample figures, client names and testimonials in
  `src/config/content.ts` — they are invented
- Have `/privacy` and `/terms` reviewed by a lawyer
- Set `RESEND_API_KEY` and send one test enquiry

## Notes

- Scroll animation uses `IntersectionObserver` and CSS transitions rather than an
  animation library, and respects `prefers-reduced-motion`.
- The contact form is a React server action that posts to the Resend REST API.
  There is no email SDK in the bundle.
- Case study metrics, testimonials and stats in `src/config/content.ts` are
  placeholders. Replace them with verified figures before launch.
