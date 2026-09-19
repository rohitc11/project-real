/**
 * THEME SWITCH.
 *
 * The site's visual direction is "Site Plan" — the page is organised like an
 * architectural drawing set. Light is paper; dark is blueprint. Both palettes
 * live in `src/app/globals.css`; changing this one value flips the whole site.
 */
export const THEME: "light" | "dark" = "light";

/**
 * A small mirror of the palette for `next/og`, which renders outside the
 * browser and therefore cannot read CSS custom properties. These are the only
 * colour values duplicated anywhere; keep them in sync with globals.css.
 */
export const THEME_COLORS = {
  light: {
    background: "#e9ece6",
    paper: "#f2f4ef",
    foreground: "#16261e",
    muted: "#515d54",
    line: "#c1cabd",
    accent: "#c2471a",
    accentInk: "#ffffff",
    /* The favicon keeps a dark tile in both themes so it stays legible
       against light and dark browser chrome alike. */
    iconBackground: "#16261e",
    iconMark: "#e06a33",
  },
  dark: {
    background: "#0b1a24",
    paper: "#102431",
    foreground: "#e3edf3",
    muted: "#8ea7b5",
    line: "#23394a",
    accent: "#f2794c",
    accentInk: "#0b1a24",
    iconBackground: "#0b1a24",
    iconMark: "#f2794c",
  },
} as const;

export const themeColors = THEME_COLORS[THEME];
