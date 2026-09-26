import { cn } from "@/lib/cn";

// The key: ring, shaft and two equal teeth with a short tail below.
// Keep in sync with src/app/icon.svg and the files in logo/.
export const KEY_RING = { cx: 15, cy: 12, r: 9, strokeWidth: 6 };
export const KEY_BODY = "M11.75 20h6.5V42H26v6h-7.75v5H26v6h-7.75V64h-6.5z";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 30 64" aria-hidden="true" className={cn("h-[1.7em] w-auto shrink-0", className)}>
      <circle
        cx={KEY_RING.cx}
        cy={KEY_RING.cy}
        r={KEY_RING.r}
        fill="none"
        stroke="currentColor"
        strokeWidth={KEY_RING.strokeWidth}
      />
      <path d={KEY_BODY} fill="currentColor" />
    </svg>
  );
}
