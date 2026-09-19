import { ImageResponse } from "next/og";
import { themeColors } from "@/config/theme";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

/** Favicon: the key mark inside a drawn frame, coloured from the theme. */
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
          background: themeColors.iconBackground,
        }}
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
          <circle cx="8.5" cy="8.5" r="4" stroke={themeColors.iconMark} strokeWidth="2" />
          <path
            d="M11.4 11.4 19.5 19.5"
            stroke={themeColors.iconMark}
            strokeWidth="2"
            strokeLinecap="square"
          />
          <path
            d="M14.8 14.8 17 12.6M16.9 16.9 18.8 15"
            stroke={themeColors.iconMark}
            strokeWidth="2"
            strokeLinecap="square"
          />
        </svg>
      </div>
    ),
    size,
  );
}
