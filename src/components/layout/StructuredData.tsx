import { BRAND, socialLinks } from "@/config/brand";
import { SERVICES } from "@/config/services";

/**
 * Organization + LocalBusiness JSON-LD, built entirely from BRAND so it never
 * drifts from the visible content.
 */
export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${BRAND.url}/#organization`,
    name: BRAND.name,
    legalName: BRAND.legalName,
    url: BRAND.url,
    description: BRAND.description,
    slogan: BRAND.tagline,
    foundingDate: String(BRAND.founded),
    email: BRAND.email.general,
    telephone: BRAND.phone.e164,
    sameAs: socialLinks.map((social) => social.href),
    address: {
      "@type": "PostalAddress",
      streetAddress: [BRAND.address.line1, BRAND.address.line2].filter(Boolean).join(", "),
      addressLocality: BRAND.address.city,
      addressRegion: BRAND.address.region,
      postalCode: BRAND.address.postalCode,
      addressCountry: BRAND.address.countryCode,
    },
    areaServed: BRAND.address.country,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services",
      itemListElement: SERVICES.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.short,
          url: `${BRAND.url}/services/${service.slug}`,
        },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
