// The brand name lives here and nowhere else — a rename is a one-line change.
const NAME = "Keyturn Media";

function siteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  return "http://localhost:3000";
}

export const SITE = {
  name: NAME,
  tagline: "Built to be seen.",
  description: "Real estate and brand marketing.",
  url: siteUrl(),

  // PLACEHOLDER — every contact detail below must be replaced before launch.
  email: "hello@example.com",
  phone: "+1 555 010 2030",
  whatsapp: "15550102030", // digits only, with country code
  social: {
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
  },
} as const;

export const NAV = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const whatsappUrl = `https://wa.me/${SITE.whatsapp}`;
export const emailUrl = `mailto:${SITE.email}`;
export const phoneUrl = `tel:${SITE.phone.replace(/[^\d+]/g, "")}`;
