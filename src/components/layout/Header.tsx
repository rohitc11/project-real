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
    const onScroll = () => setScrolled(window.scrollY > 8);
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
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
        scrolled || menuOpen
          ? "border-line bg-[var(--brand-scrim)] backdrop-blur-md"
          : "border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-6 lg:h-[4.5rem]">
        <Logo />

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center">
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
                    "type-note inline-flex items-center gap-2 px-4 py-2.5 transition-colors duration-300",
                    isActive(item.href)
                      ? "text-accent-deep"
                      : "text-muted hover:text-ink",
                  )}
                >
                  {item.label}
                  {item.children && (
                    <svg viewBox="0 0 8 5" className="size-1.5" aria-hidden="true">
                      <path d="M0 0h8L4 5Z" fill="currentColor" />
                    </svg>
                  )}
                </Link>

                {item.children && (
                  <div
                    className={cn(
                      "absolute right-0 top-full w-[27rem] pt-2 transition-opacity duration-200",
                      openDropdown === item.href
                        ? "pointer-events-auto opacity-100"
                        : "pointer-events-none opacity-0",
                    )}
                  >
                    {/* The services menu is itself a drawing schedule. */}
                    <div className="border border-ink bg-paper shadow-[0_18px_44px_-24px_var(--brand-shadow-strong)]">
                      <div className="type-note flex justify-between border-b border-line px-4 py-2.5 text-muted">
                        <span>Scope of work</span>
                        <span>Sheet</span>
                      </div>
                      <ul>
                        {item.children.map((child, index) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className="group flex items-baseline justify-between gap-5 border-b border-line-soft px-4 py-3 transition-colors duration-200 last:border-b-0 hover:bg-[var(--brand-tint)]"
                            >
                              <span className="min-w-0">
                                <span className="block text-sm font-semibold text-ink transition-colors group-hover:text-accent-deep">
                                  {child.label}
                                </span>
                                {child.description && (
                                  <span className="mt-1 block text-xs leading-snug text-muted">
                                    {child.description}
                                  </span>
                                )}
                              </span>
                              <span className="type-note shrink-0 text-muted">
                                A-{String(index + 1).padStart(2, "0")}
                              </span>
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

        <div className="hidden items-center gap-5 lg:flex">
          <a href={telHref} className="type-data text-[0.8125rem] text-muted transition-colors hover:text-ink">
            {BRAND.phone.display}
          </a>
          <Button href={PRIMARY_CTA.href} size="sm">
            {PRIMARY_CTA.label}
            <ArrowRight />
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="-mr-2 flex size-11 items-center justify-center text-ink lg:hidden"
        >
          <span className="relative block h-3 w-5">
            <span
              className={cn(
                "absolute left-0 block h-px w-full bg-current transition-all duration-300",
                menuOpen ? "top-1.5 rotate-45" : "top-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 block h-px w-full bg-current transition-all duration-300",
                menuOpen ? "top-1.5 -rotate-45" : "top-3",
              )}
            />
          </span>
        </button>
      </Container>

      <div
        id="mobile-menu"
        className={cn(
          "overflow-hidden border-t border-line bg-[var(--brand-scrim)] backdrop-blur-md transition-[max-height,opacity] duration-400 lg:hidden",
          menuOpen ? "max-h-[calc(100dvh-4rem)] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <Container className="max-h-[calc(100dvh-4rem)] overflow-y-auto py-2">
          <nav aria-label="Mobile">
            <ul>
              {NAV.map((item, index) => (
                <li key={item.href} className="border-b border-line-soft py-1">
                  <Link href={item.href} className="flex items-baseline gap-4 py-3">
                    <span className="type-note text-accent-deep">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="type-title text-xl">{item.label}</span>
                  </Link>
                  {item.children && (
                    <ul className="mb-3 flex flex-col gap-2 pl-[2.375rem]">
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

          <div className="flex flex-col gap-2 py-6">
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
