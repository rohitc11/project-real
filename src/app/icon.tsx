import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

/**
 * Favicon drawn from the same key mark as the logo. Colours are duplicated
 * here because next/og cannot read CSS custom properties — keep them in sync
 * with --brand-ink and --brand-accent in globals.css.
 */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#08080a",
          borderRadius: 12,
        }}
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
          <circle cx="8" cy="8" r="4.4" stroke="#c6a667" strokeWidth="1.8" />
          <path d="M11.2 11.2 19.8 19.8" stroke="#c6a667" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M14.9 14.9 17.3 12.5M17 17l2-2" stroke="#c6a667" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </div>
    ),
    size,
  );
}
