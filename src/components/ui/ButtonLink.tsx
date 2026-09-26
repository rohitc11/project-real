import Link from "next/link";

import { cn } from "@/lib/cn";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline" | "quiet";
  size?: "md" | "sm";
  className?: string;
};

const VARIANTS = {
  solid: "rounded-full bg-btn text-btn-fg hover:bg-btn-hover hover:text-btn-hover-fg",
  outline: "rounded-full ring-1 ring-inset ring-ink/25 hover:ring-ink",
  quiet: "",
};

const SIZES = {
  md: "px-6 py-3.5 text-[0.95rem]",
  sm: "px-5 py-2.5 text-[0.9rem]",
};

export function Arrow({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      className={cn("size-[0.9em] transition-transform duration-500 ease-(--ease-soft)", className)}
    >
      <path d="M2 8h11M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function ButtonLink({ href, children, variant = "solid", size = "md", className }: Props) {
  const external = /^(https?:|mailto:|tel:)/.test(href);
  const classes = cn(
    "group inline-flex items-center gap-2.5 font-medium transition-colors duration-300",
    variant !== "quiet" && SIZES[size],
    VARIANTS[variant],
    className,
  );

  const content =
    variant === "quiet" ? (
      <>
        <span className="bg-[linear-gradient(currentColor,currentColor)] bg-size-[0%_1px] bg-bottom-left bg-no-repeat pb-1 transition-[background-size] duration-500 ease-(--ease-soft) group-hover:bg-size-[100%_1px]">
          {children}
        </span>
        <Arrow className="group-hover:translate-x-1" />
      </>
    ) : (
      children
    );

  if (external) {
    const newTab = href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        {...(newTab && { target: "_blank", rel: "noopener noreferrer" })}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
