import type { Metadata, Viewport } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

import { BRAND } from "@/config/brand";
import { SEO } from "@/config/site";
import { THEME, themeColors } from "@/config/theme";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/layout/FloatingContact";
import { StructuredData } from "@/components/layout/StructuredData";

/** Archivo carries a width axis; the display roles expand it to 118%. */
const sans = Archivo({
  variable: "--font-sans-family",
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
});

/** Every annotation, dimension and sheet reference on the site. */
const mono = IBM_Plex_Mono({
  variable: "--font-mono-family",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(BRAND.url),
  title: {
    default: SEO.defaultTitle,
    template: SEO.titleTemplate,
  },
  description: SEO.description,
  applicationName: BRAND.name,
  authors: [{ name: BRAND.name, url: BRAND.url }],
  creator: BRAND.name,
  publisher: BRAND.legalName,
  openGraph: {
    type: "website",
    siteName: BRAND.name,
    title: SEO.defaultTitle,
    description: SEO.description,
    url: BRAND.url,
    locale: SEO.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.defaultTitle,
    description: SEO.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: themeColors.background,
  colorScheme: THEME,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme={THEME}
      className={`${sans.variable} ${mono.variable} h-full`}
    >
      <body className="flex min-h-full flex-col bg-ground text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-accent-ink"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingContact />
        <StructuredData />
      </body>
    </html>
  );
}
