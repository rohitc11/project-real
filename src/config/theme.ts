/**
 * THEME SWITCH.
 *
 * Both palettes live in `src/app/globals.css`. Light is the default `:root`
 * set; dark is defined under `[data-theme="dark"]`. Changing this one value
 * flips the entire site — the layout writes it onto <html>.
 */
export const THEME: "light" | "dark" = "light";

/**
 * A small mirror of the palette for `next/og`, which renders outside the
 * browser and therefore cannot read CSS custom properties. These are the only
 * colour values duplicated anywhere; keep them in sync with the matching block
 * in globals.css.
 */
export const THEME_COLORS = {
  light: {
    background: "#faf9f7",
    surface: "#ffffff",
    foreground: "#15140f",
    muted: "#5c594f",
    subtle: "#6f6a61",
    line: "#cec7ba",
    accent: "#8a6320",
    /* The favicon keeps a dark tile in both themes so it stays legible
       against light and dark browser chrome alike. */
    iconBackground: "#15140f",
    iconMark: "#c6a667",
  },
  dark: {
    background: "#08080a",
    surface: "#0e0e11",
    foreground: "#f3f1ec",
    muted: "#a3a09a",
    subtle: "#6f6c67",
    line: "#26262d",
    accent: "#c6a667",
    iconBackground: "#08080a",
    iconMark: "#c6a667",
  },
} as const;

export const themeColors = THEME_COLORS[THEME];
