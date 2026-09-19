import Link from "next/link";

import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/ui/Container";
import { TextLink } from "@/components/ui/Button";
import { FOOTER_COLUMNS } from "@/config/site";
import {
  BRAND,
  addressLines,
  copyrightYears,
  mailtoHref,
  socialLinks,
  telHref,
} from "@/config/brand";

export function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden border-t border-line-soft bg-surface">
      <Container className="relative py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <Logo showTagline />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted text-pretty">
              {BRAND.description}
            </p>

            <div className="mt-8 flex flex-col gap-2 text-sm">
              <TextLink href={mailtoHref}>{BRAND.email.general}</TextLink>
              <a
                href={telHref}
                className="text-muted transition-colors hover:text-fg"
              >
                {BRAND.phone.display}
              </a>
            </div>

            <address className="mt-6 text-sm not-italic leading-relaxed text-subtle">
              {addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {FOOTER_COLUMNS.map((column) => (
              <nav key={column.heading} aria-label={column.heading}>
                <h2 className="text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-subtle">
                  {column.heading}
                </h2>
                <ul className="mt-5 flex flex-col gap-3">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted transition-colors duration-300 hover:text-fg"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="hairline mt-14" />

        <div className="mt-8 flex flex-col-reverse gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-subtle">
            © {copyrightYears()} {BRAND.legalName}. All rights reserved.
          </p>

          {socialLinks.length > 0 && (
            <ul className="flex flex-wrap items-center gap-6">
              {socialLinks.map((social) => (
                <li key={social.key}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs uppercase tracking-[0.14em] text-subtle transition-colors duration-300 hover:text-accent"
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
