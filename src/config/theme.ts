import type { CSSProperties } from "react";

import themes from "./themes.json";

export type ThemeName = keyof typeof themes;

// ── The one line to change ───────────────────────────────────────────────
// "golden" = Golden Hour (orange) · "blue" = Open Sky (the original).
// After changing it, run `npm run brand` to recolour the photos, icons,
// share image and logo/ folder, then commit. Colours live in themes.json.
export const THEME: ThemeName = "golden";

export const PALETTE = themes[THEME];

type ColorName = keyof typeof PALETTE.colors;
const resolve = (value: string) =>
  value in PALETTE.colors ? PALETTE.colors[value as ColorName] : value;
const kebab = (key: string) => key.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`);

// Custom properties set on <html>; globals.css maps them to Tailwind colours.
export const themeStyle = Object.fromEntries([
  ...Object.entries(PALETTE.colors).map(([k, v]) => [`--${kebab(k)}`, v]),
  ...Object.entries(PALETTE.roles).map(([k, v]) => [`--${kebab(k)}`, resolve(v)]),
]) as CSSProperties;
