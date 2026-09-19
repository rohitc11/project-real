"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Logo } from "@/components/brand/Logo";
import { Button, ArrowRight } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { NAV, PRIMARY_CTA } from "@/config/site";
import { BRAND, telHref } from "@/config/brand";
import { cn } from "@/lib/cn";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close everything on navigation. Derived during render rather than in an
  // effect, which is React's recommended way to reset state on a prop change.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setMenuOpen(false);
    setOpenDropdown(null);
  }

  // Lock scroll behind the mobile overlay.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setOpenDropdown(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[var(--brand-ease)]",
        scrolled || menuOpen
          ? "border-b border-line-soft bg-ink/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-[4.5rem] items-center justify-between gap-6 lg:h-20">
        <Logo />

        {/* Desktop navigation */}
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV.map((item) => (
              <li
                key={item.href}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.href)}
                onMouseLeave={() => item.children && setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  aria-expanded={item.children ? openDropdown === item.href : undefined}
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm transition-colors duration-300",
                    isActive(item.href) ? "text-fg" : "text-muted hover:text-fg",
                  )}
                >
                  {item.label}
                  {item.children && (
                    <svg
                      viewBox="0 0 10 6"
                      className={cn(
                        "size-2 transition-transform duration-300",
                        openDropdown === item.href && "rotate-180",
                      )}
                      aria-hidden="true"
                    >
                      <path
                        d="M1 1l4 4 4-4"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        fill="none"
                        strokeLinecap="round"
                      />
                    </svg>
                  )}
                </Link>

                {item.children && (
                  <div
                    className={cn(
                      "absolute left-1/2 top-full w-[30rem] -translate-x-1/2 pt-3 transition-all duration-300 ease-[var(--brand-ease)]",
                      openDropdown === item.href
                        ? "pointer-events-auto translate-y-0 opacity-100"
                        : "pointer-events-none translate-y-1 opacity-0",
                    )}
                  >
                    <div className="overflow-hidden rounded-lg border border-line bg-surface-2/95 p-2 shadow-2xl shadow-black/60 backdrop-blur-xl">
                      <ul className="grid gap-0.5">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className="group flex flex-col gap-0.5 rounded-sm px-3.5 py-2.5 transition-colors duration-200 hover:bg-white/[0.04]"
                            >
                              <span className="text-sm text-fg transition-colors group-hover:text-accent">
                                {child.label}
                              </span>
                              {child.description && (
                                <span className="text-xs leading-snug text-subtle">
                                  {child.description}
                                </span>
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={telHref}
            className="text-sm text-muted transition-colors hover:text-fg"
          >
            {BRAND.phone.display}
          </a>
          <Button href={PRIMARY_CTA.href} size="sm">
            {PRIMARY_CTA.label}
            <ArrowRight />
          </Button>
        </div>

        {/* Mobile trigger */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="-mr-2 flex size-11 items-center justify-center rounded-full text-fg lg:hidden"
        >
          <span className="relative block h-3 w-5">
            <span
              className={cn(
                "absolute left-0 block h-px w-full bg-current transition-all duration-300 ease-[var(--brand-ease)]",
                menuOpen ? "top-1.5 rotate-45" : "top-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 block h-px w-full bg-current transition-all duration-300 ease-[var(--brand-ease)]",
                menuOpen ? "top-1.5 -rotate-45" : "top-3",
              )}
            />
          </span>
        </button>
      </Container>

      {/* Mobile overlay */}
      <div
        id="mobile-menu"
        className={cn(
          "overflow-hidden border-t border-line-soft bg-ink/95 backdrop-blur-xl transition-[max-height,opacity] duration-500 ease-[var(--brand-ease)] lg:hidden",
          menuOpen ? "max-h-[calc(100dvh-4.5rem)] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <Container className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto py-6">
          <nav aria-label="Mobile">
            <ul className="flex flex-col">
              {NAV.map((item) => (
                <li key={item.href} className="border-b border-line-soft py-1">
                  <Link
                    href={item.href}
                    className="block py-3 font-display text-2xl text-fg"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <ul className="mb-3 flex flex-col gap-2 pl-1">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link href={child.href} className="text-sm text-muted">
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-8 flex flex-col gap-3 pb-4">
            <Button href={PRIMARY_CTA.href} size="lg" className="w-full">
              {PRIMARY_CTA.label}
              <ArrowRight />
            </Button>
            <Button href={telHref} variant="outline" size="lg" className="w-full">
              {BRAND.phone.display}
            </Button>
          </div>
        </Container>
      </div>
    </header>
  );
}
