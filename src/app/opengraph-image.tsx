import { ImageResponse } from "next/og";
import { BRAND } from "@/config/brand";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${BRAND.name} — ${BRAND.tagline}`;

/** Social share card, generated from BRAND so a rename updates it automatically. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#08080a",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
            <circle cx="8" cy="8" r="4.4" stroke="#c6a667" strokeWidth="1.6" />
            <path d="M11.2 11.2 19.8 19.8" stroke="#c6a667" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M14.9 14.9 17.3 12.5M17 17l2-2" stroke="#c6a667" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
          <span style={{ fontSize: 34, color: "#f3f1ec" }}>{BRAND.name}</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: 84, lineHeight: 1.05, color: "#f3f1ec", letterSpacing: -2 }}>
            We turn listings
          </span>
          <span style={{ fontSize: 84, lineHeight: 1.05, color: "#c6a667", letterSpacing: -2 }}>
            into pipeline.
          </span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid #26262d",
            paddingTop: 28,
            fontSize: 22,
            color: "#6f6c67",
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          <span>{BRAND.tagline}</span>
          <span>{BRAND.domain}</span>
        </div>
      </div>
    ),
    size,
  );
}
