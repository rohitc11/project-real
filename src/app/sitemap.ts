import type { MetadataRoute } from "next";

import { SITE } from "@/config/site";

const ROUTES = ["", "/services", "/about", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: new Date(),
  }));
}
