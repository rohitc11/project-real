/**
 * SINGLE SOURCE OF TRUTH FOR THE BRAND.
 *
 * Nothing in this codebase hardcodes the company name, contact details or
 * social links. Everything reads from `BRAND`. Renaming or rebranding the
 * company should require editing this file only (plus the colour tokens in
 * `src/app/globals.css`).
 *
 * Values marked PLACEHOLDER must be replaced before launch.
 */

export const BRAND = {
  /** Full public-facing name, used in the logo, metadata and copy. */
  name: "Keyturn Media",
  /** Short form for tight spaces (mobile nav, favicons, footnotes). */
  shortName: "Keyturn",
  /** Registered entity name, used in legal pages and the copyright line. */
  legalName: "Keyturn Media",
  /** Three-to-five word positioning line that sits under the logo. */
  tagline: "Real estate growth marketing",
  /** One-sentence description used as the default meta description. */
  description:
    "We turn listings into pipeline. Keyturn Media is a growth marketing partner for real estate developers, brokerages and agents — and for brands in every category that want the same discipline applied to their market.",

  /** Year the company started trading, used in the footer copyright range. */
  founded: 2024,

  /** Canonical domain, without protocol. */
  domain: "keyturnmedia.com", // PLACEHOLDER
  /** Canonical origin, used for absolute URLs, sitemaps and JSON-LD. */
  url: "https://keyturnmedia.com", // PLACEHOLDER

  email: {
    general: "hello@keyturnmedia.com", // PLACEHOLDER
    newBusiness: "newbusiness@keyturnmedia.com", // PLACEHOLDER
  },

  phone: {
    /** Human-readable, shown in the UI. */
    display: "+91 00000 00000", // PLACEHOLDER
    /** E.164, used in `tel:` links. Digits and a leading + only. */
    e164: "+910000000000", // PLACEHOLDER
  },

  whatsapp: {
    /** Digits only, including country code, no + or spaces. */
    number: "910000000000", // PLACEHOLDER
    /** Pre-filled first message. */
    prefill: "Hi Keyturn Media — I'd like to talk about marketing for my business.",
  },

  /** Cal.com / Calendly embed link. Leave empty to hide booking UI. */
  booking: {
    url: "", // PLACEHOLDER e.g. "https://cal.com/keyturnmedia/intro"
    label: "Book a 30-minute intro call",
  },

  address: {
    line1: "PLACEHOLDER Street",
    line2: "",
    city: "Gurugram",
    region: "Haryana",
    postalCode: "122001",
    country: "India",
    countryCode: "IN",
  },

  /** Empty strings are skipped automatically wherever socials are rendered. */
  social: {
    instagram: "https://instagram.com/", // PLACEHOLDER
    linkedin: "https://linkedin.com/company/", // PLACEHOLDER
    youtube: "https://youtube.com/@", // PLACEHOLDER
    facebook: "",
    x: "",
  },
} as const;

/* ------------------------------------------------------------------ */
/* Derived values — always use these instead of rebuilding URLs inline. */
/* ------------------------------------------------------------------ */

export const telHref = `tel:${BRAND.phone.e164}`;

export const mailtoHref = `mailto:${BRAND.email.general}`;

export const whatsappHref = `https://wa.me/${BRAND.whatsapp.number}?text=${encodeURIComponent(
  BRAND.whatsapp.prefill,
)}`;

export const addressLines = [
  BRAND.address.line1,
  BRAND.address.line2,
  `${BRAND.address.city}, ${BRAND.address.region} ${BRAND.address.postalCode}`,
  BRAND.address.country,
].filter(Boolean);

export const socialLinks = (
  Object.entries(BRAND.social) as [keyof typeof BRAND.social, string][]
)
  .filter(([, href]) => href.length > 0)
  .map(([key, href]) => ({
    key,
    href,
    label: key.charAt(0).toUpperCase() + key.slice(1),
  }));

/** Copyright range that stays correct without a yearly edit. */
export const copyrightYears = () => {
  const now = new Date().getFullYear();
  return now > BRAND.founded ? `${BRAND.founded}–${now}` : `${BRAND.founded}`;
};
