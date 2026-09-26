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
| Colours, type, motion                  | `src/app/globals.css`         |
| Photos (graded, 2400px max)            | `src/assets/photos/`          |
| Logo on the site (key + name)          | `src/components/brand/`       |
| Favicon, app icon, share image         | `src/app/` (`icon.svg`, `favicon.ico`, `apple-icon.png`, `opengraph-image.jpg`) |
| Logo files for social media and print  | `logo/` (profile pictures, posts, transparent PNGs, SVG) |

## Before launch

- Replace every `PLACEHOLDER` contact detail in `src/config/site.ts`.
- Confirm the services and industries list.
- Set the env vars in `.env.example` so the contact form sends email
  (without them it logs in development and asks visitors to WhatsApp/email in production).
- Add a privacy policy — the contact form collects personal details.
