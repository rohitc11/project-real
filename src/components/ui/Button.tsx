import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

/* Rectangular, not pills. A drawing set has no rounded corners. */
const base =
  "group inline-flex items-center justify-center gap-2.5 whitespace-nowrap font-medium transition-colors duration-300 ease-[var(--brand-ease)] disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-accent-ink hover:bg-accent-deep",
  outline: "border border-ink text-ink hover:bg-ink hover:text-ground",
  ghost: "text-muted hover:text-accent-deep",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-[0.8125rem]",
  md: "h-11 px-6 text-sm",
  lg: "h-[3.125rem] px-7 text-[0.9375rem]",
};

export type ButtonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
  /** Internal path, or an absolute http/mailto/tel URL. Omit for a real button. */
  href?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  "aria-label"?: string;
};

const isExternal = (href: string) => /^(https?:|mailto:|tel:)/.test(href);

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  type = "button",
  disabled,
  onClick,
  ...aria
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (href && isExternal(href)) {
    const newTab = href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noopener noreferrer" : undefined}
        {...aria}
      >
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={classes} {...aria}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled} onClick={onClick} {...aria}>
      {children}
    </button>
  );
}

/** Leader arrow. Drawn, not animated into a slide. */
export function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={cn(
        "size-3.5 transition-transform duration-300 ease-[var(--brand-ease)] group-hover:translate-x-1",
        className,
      )}
    >
      <path
        d="M1 8h13m0 0-4.5-4.5M14 8l-4.5 4.5"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="square"
      />
    </svg>
  );
}

/** Annotation-style link: mono, uppercase, with a leader arrow. */
export function NoteLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const classes = cn(
    "type-note group inline-flex items-center gap-2.5 border-b border-accent/40 pb-1 text-accent-deep transition-colors duration-300 hover:border-accent",
    className,
  );

  return isExternal(href) ? (
    <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
      {children}
      <ArrowRight />
    </a>
  ) : (
    <Link href={href} className={classes}>
      {children}
      <ArrowRight />
    </Link>
  );
}
