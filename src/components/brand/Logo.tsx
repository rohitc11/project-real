import Link from "next/link";
import { BRAND } from "@/config/brand";
import { cn } from "@/lib/cn";

/**
 * The only place the wordmark is drawn. It renders `BRAND.name` verbatim —
 * renaming the company never touches this file.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={cn("size-[1.35em] shrink-0 text-accent", className)}
    >
      <circle cx="8" cy="8" r="4.4" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M11.2 11.2 19.8 19.8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M14.9 14.9 17.3 12.5M17 17l2-2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
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
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.375rem] tracking-[-0.01em] text-fg">
          {BRAND.name}
        </span>
        {showTagline && (
          <span className="mt-1.5 text-[0.625rem] uppercase tracking-[0.2em] text-subtle">
            {BRAND.tagline}
          </span>
        )}
      </span>
    </span>
  );

  if (!href) return content;

  return (
    <Link
      href={href}
      aria-label={`${BRAND.name} — home`}
      className="inline-flex rounded-sm transition-opacity duration-300 hover:opacity-80"
    >
      {content}
    </Link>
  );
}
