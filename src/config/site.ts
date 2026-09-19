import { BRAND } from "./brand";
import { SERVICES } from "./services";

export type NavItem = {
  label: string;
  href: string;
  /** Rendered as a mega-menu / sub-list where the layout supports it. */
  children?: { label: string; href: string; description?: string }[];
};

export const NAV: NavItem[] = [
  {
    label: "Services",
    href: "/services",
    children: SERVICES.map((service) => ({
      label: service.title,
      href: `/services/${service.slug}`,
      description: service.short,
    })),
  },
  { label: "Work", href: "/work" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
];

/** The single primary call to action, reused across header, hero and footer. */
export const PRIMARY_CTA = { label: "Book a call", href: "/contact" };
export const SECONDARY_CTA = { label: "See the work", href: "/work" };

export const FOOTER_COLUMNS: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: "Services",
    links: SERVICES.map((service) => ({
      label: service.title,
      href: `/services/${service.slug}`,
    })),
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Process", href: "/process" },
      { label: "Work", href: "/work" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy policy", href: "/privacy" },
      { label: "Terms of use", href: "/terms" },
    ],
  },
];

/** Defaults consumed by `generateMetadata` and the root layout. */
export const SEO = {
  titleTemplate: `%s — ${BRAND.name}`,
  defaultTitle: `${BRAND.name} — ${BRAND.tagline}`,
  description: BRAND.description,
  locale: "en_IN",
  ogImage: "/opengraph-image",
} as const;
