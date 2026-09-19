import { ImageResponse } from "next/og";
import { BRAND } from "@/config/brand";
import { themeColors } from "@/config/theme";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${BRAND.name} — ${BRAND.tagline}`;

/**
 * Social share card, laid out as a drawing sheet: metadata strip along the
 * top, title in the field, title block along the bottom. Text and palette both
 * come from config, so a rename or a theme flip updates it automatically.
 */
export default function OpengraphImage() {
  const note = {
    fontSize: 21,
    letterSpacing: 3,
    textTransform: "uppercase" as const,
    color: themeColors.muted,
  };

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: themeColors.background,
          fontFamily: "sans-serif",
          color: themeColors.foreground,
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 48,
            padding: "26px 64px",
            borderBottom: `1px solid ${themeColors.line}`,
            ...note,
          }}
        >
          <span>Sheet 01</span>
          <span>Scale 1:200</span>
          <span>Rev C</span>
          <span>{BRAND.address.city}</span>
        </div>

        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 64px",
          }}
        >
          <span style={{ ...note, color: themeColors.accent, marginBottom: 26 }}>
            {BRAND.tagline}
          </span>
          <span style={{ fontSize: 96, lineHeight: 1, letterSpacing: -3, fontWeight: 800 }}>
            Plotted to the
          </span>
          <span
            style={{
              fontSize: 96,
              lineHeight: 1.05,
              letterSpacing: -3,
              fontWeight: 800,
              color: themeColors.accent,
            }}
          >
            site visit.
          </span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "26px 64px",
            borderTop: `1px solid ${themeColors.line}`,
            ...note,
            color: themeColors.foreground,
          }}
        >
          <span>{BRAND.name}</span>
          <span style={{ color: themeColors.muted }}>{BRAND.domain}</span>
        </div>
      </div>
    ),
    size,
  );
}
