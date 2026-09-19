import Link from "next/link";
import { BRAND } from "@/config/brand";
import { cn } from "@/lib/cn";

/**
 * The only place the wordmark is drawn. It renders `BRAND.name` verbatim —
 * renaming the company never touches this file.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex size-7 shrink-0 items-center justify-center border border-ink text-accent",
        className,
      )}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" fill="none" className="size-[1.05rem]">
        <circle cx="8.5" cy="8.5" r="4" stroke="currentColor" strokeWidth="1.6" />
        <path d="M11.4 11.4 19.5 19.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" />
        <path
          d="M14.8 14.8 17 12.6M16.9 16.9 18.8 15"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="square"
        />
      </svg>
    </span>
  );
}

export function Logo({
  className,
  showTagline = false,
  href = "/",
}: {
  className?: string;
  showTagline?: boolean;
  href?: string | null;
}) {
  const content = (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span className="type-title text-[1.0625rem] uppercase tracking-[0.02em] text-ink">
          {BRAND.name}
        </span>
        {showTagline && (
          <span className="type-note mt-2 text-muted">{BRAND.tagline}</span>
        )}
      </span>
    </span>
  );

  if (!href) return content;

  return (
    <Link
      href={href}
      aria-label={`${BRAND.name} — home`}
      className="inline-flex transition-opacity duration-300 hover:opacity-70"
    >
      {content}
    </Link>
  );
}
