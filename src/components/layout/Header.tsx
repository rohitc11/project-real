"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useSyncExternalStore } from "react";

import { Logo } from "@/components/brand/Logo";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { NAV, SITE, emailUrl, whatsappUrl } from "@/config/site";
import { cn } from "@/lib/cn";

function subscribe(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}

function useScrolled() {
  return useSyncExternalStore(
    subscribe,
    () => window.scrollY > 24,
    () => false,
  );
}

export function Header() {
  const scrolled = useScrolled();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);
  const solid = scrolled && !open;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-500",
          solid ? "bg-cloud/90 shadow-[0_1px_0_var(--haze)] backdrop-blur-md" : "bg-transparent",
        )}
      >
        <div className="shell flex h-18 items-center justify-between">
          <Link href="/" onClick={close} className="text-[1.1rem]" aria-label={`${SITE.name} — home`}>
            <Logo />
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-2 md:flex">
            <ul
              className={cn(
                "flex items-center rounded-full p-1 transition-colors duration-500",
                solid ? "bg-transparent" : "bg-cloud/85 backdrop-blur-md",
              )}
            >
              {NAV.map((item) => {
                const active = pathname.startsWith(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "block rounded-full px-4 py-2 text-[0.95rem] transition-colors hover:text-accent-text",
                        active && "text-accent-text",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <ButtonLink href="/contact" size="sm">
              Start a project
            </ButtonLink>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="caps rounded-full bg-cloud/85 px-4 py-3 backdrop-blur-md md:hidden"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-40 flex flex-col bg-cloud pt-18 md:hidden"
        >
          <nav aria-label="Mobile" className="shell flex flex-1 flex-col justify-center">
            <ul className="flex flex-col gap-3">
              {[{ label: "Home", href: "/" }, ...NAV].map((item, i) => (
                <li key={item.href} className="animate-fade-up" style={{ animationDelay: `${i * 60}ms` }}>
                  <Link
                    href={item.href}
                    onClick={close}
                    className="display block py-1 text-[3.25rem]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="shell flex gap-3 pb-10">
            <ButtonLink href={whatsappUrl}>WhatsApp</ButtonLink>
            <ButtonLink href={emailUrl} variant="outline">
              Email
            </ButtonLink>
          </div>
        </div>
      )}
    </>
  );
}
