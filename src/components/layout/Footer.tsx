import Link from "next/link";

import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/ui/Container";
import { FOOTER_COLUMNS } from "@/config/site";
import {
  BRAND,
  addressLines,
  copyrightYears,
  mailtoHref,
  socialLinks,
  telHref,
} from "@/config/brand";

/**
 * The footer is the drawing's title block: a ruled grid of labelled cells
 * carrying practice, contact, location and revision. Drawing sets put this
 * information in exactly this form, which is why it belongs here rather than
 * in the usual four columns of links.
 */
export function Footer() {
  return (
    <footer className="mt-auto border-t border-ink bg-ground">
      <Container className="py-14 sm:py-16">
        {/* Title block */}
        <div className="grid gap-px border border-ink bg-line sm:grid-cols-3">
          <div className="bg-ground p-6">
            <p className="type-note text-muted">Practice</p>
            <div className="mt-4">
              <Logo href={null} showTagline />
            </div>
          </div>

          <div className="bg-ground p-6">
            <p className="type-note text-muted">Contact</p>
            <div className="mt-4 flex flex-col gap-2 text-sm">
              <a href={mailtoHref} className="text-accent-deep transition-colors hover:text-ink">
                {BRAND.email.general}
              </a>
              <a href={telHref} className="type-data text-[0.8125rem] text-ink transition-colors hover:text-accent-deep">
                {BRAND.phone.display}
              </a>
            </div>
          </div>

          <div className="bg-ground p-6">
            <p className="type-note text-muted">Studio</p>
            <address className="mt-4 text-sm not-italic leading-relaxed text-muted">
              {addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </div>
        </div>

        {/* Index of sheets */}
        <div className="mt-10 grid gap-10 sm:grid-cols-3">
          {FOOTER_COLUMNS.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <h2 className="type-note border-b border-line pb-2.5 text-muted">
                {column.heading}
              </h2>
              <ul className="mt-4 flex flex-col gap-2.5">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted transition-colors duration-300 hover:text-accent-deep"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Revision bar */}
        <div className="type-note mt-12 flex flex-wrap items-center justify-between gap-x-7 gap-y-3 border-t border-line pt-5 text-muted">
          <span>
            © {copyrightYears()} {BRAND.legalName}
          </span>
          <span>All rights reserved</span>
          {socialLinks.length > 0 && (
            <ul className="flex flex-wrap items-center gap-6">
              {socialLinks.map((social) => (
                <li key={social.key}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-300 hover:text-accent-deep"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Container>
    </footer>
  );
}
