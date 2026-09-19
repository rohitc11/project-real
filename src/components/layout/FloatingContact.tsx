"use client";

import { useEffect, useState } from "react";
import { BRAND, telHref, whatsappHref } from "@/config/brand";
import { cn } from "@/lib/cn";

/**
 * WhatsApp-first floating contact. Appears once the visitor has scrolled past
 * the hero so it never competes with the primary CTA above the fold.
 */
export function FloatingContact() {
  const [shown, setShown] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 transition-all duration-500 ease-[var(--brand-ease)] sm:bottom-7 sm:right-7",
        shown ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0",
      )}
    >
      <a
        href={telHref}
        aria-label={`Call ${BRAND.name}`}
        className={cn(
          "flex size-11 items-center justify-center rounded-full border border-line bg-surface text-fg shadow-[0_8px_28px_-10px_var(--brand-shadow-strong)] backdrop-blur transition-all duration-300 hover:border-accent/60 hover:text-accent",
          expanded ? "scale-100 opacity-100" : "pointer-events-none scale-75 opacity-0",
        )}
      >
        <svg viewBox="0 0 24 24" fill="none" className="size-[1.1rem]" aria-hidden="true">
          <path
            d="M6.6 3h2.2l1.5 3.7-1.8 1.2a11 11 0 0 0 4.9 4.9l1.2-1.8L18.3 12v2.2c0 1-.8 1.8-1.8 1.8A13.5 13.5 0 0 1 3 6.6C3 5.6 3.8 4.8 4.8 4.8"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>

      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-label={expanded ? "Hide contact options" : "Show contact options"}
          aria-expanded={expanded}
          className="flex size-9 items-center justify-center rounded-full border border-line bg-surface text-subtle backdrop-blur transition-colors hover:text-fg"
        >
          <svg
            viewBox="0 0 12 12"
            className={cn("size-3 transition-transform duration-300", expanded && "rotate-45")}
            aria-hidden="true"
          >
            <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        </button>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Message ${BRAND.name} on WhatsApp`}
          className="group flex h-12 items-center gap-2.5 rounded-full bg-accent pl-4 pr-5 text-sm font-medium text-accent-ink shadow-[0_10px_34px_-12px_var(--brand-shadow-strong)] transition-all duration-300 hover:bg-accent-hi"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="size-5" aria-hidden="true">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.22 8.22 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.25-8.23a8.2 8.2 0 0 1 5.82 2.42 8.17 8.17 0 0 1 2.41 5.82c0 4.54-3.7 8.23-8.23 8.23Zm4.52-6.16c-.25-.13-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.15.16-.29.18-.53.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.1-.5.11-.11.25-.29.37-.44.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.84-.2-.48-.4-.42-.56-.43h-.47c-.16 0-.43.06-.65.31-.23.25-.86.84-.86 2.05s.88 2.38 1 2.54c.13.17 1.74 2.65 4.21 3.72.59.25 1.05.4 1.4.52.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.47-.29Z" />
          </svg>
          WhatsApp
        </a>
      </div>
    </div>
  );
}
