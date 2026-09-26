# Keyturn Media — website

Next.js 16 · Tailwind CSS 4. Design brief: [DESIGN_PROMPT.md](DESIGN_PROMPT.md).

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Where things live

| What                                   | File                          |
|----------------------------------------|-------------------------------|
| Brand name, contact details, nav       | `src/config/site.ts`          |
| Services and industries                | `src/config/services.ts`      |
| Colour themes (Golden Hour, Open Sky)  | `src/config/themes.json`, switch in `src/config/theme.ts` |
| Type, motion, layout utilities         | `src/app/globals.css`         |
| Photos used by the site (generated)    | `src/assets/photos/`          |
| Original photos, fonts for the logo    | `brand/`                      |
| Logo on the site (key + name)          | `src/components/brand/`       |
| Favicon, app icon, share image         | `src/app/` (`icon.svg`, `favicon.ico`, `apple-icon.png`, `opengraph-image.jpg`) |
| Logo files for social media and print  | `logo/` (profile pictures, posts, transparent PNGs, SVG) |

## Switching the colour theme

The site has two themes: **Golden Hour** (orange, current) and **Open Sky** (the original blue).

1. In `src/config/theme.ts`, change `THEME` to `"golden"` or `"blue"`.
2. Run `npm run brand`. It recolours the photos, the favicon/app icon, the share image
   and every file in `logo/` (about 5 seconds).
3. Commit and push. Vercel redeploys automatically.

The original blue site is also bookmarked in git as the tag `theme-blue`.

## Before launch

- Replace every `PLACEHOLDER` contact detail in `src/config/site.ts`.
- Confirm the services and industries list.
- Set the env vars in `.env.example` so the contact form sends email
  (without them it logs in development and asks visitors to WhatsApp/email in production).
- Add a privacy policy — the contact form collects personal details.
