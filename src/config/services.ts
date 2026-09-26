import { photos, type Photo } from "@/lib/photos";

export type Service = {
  slug: string;
  name: string;
  /** One line shown on hover in the home skyline. */
  line: string;
  /** One line shown on the services page. */
  promise: string;
  tags: [string, string, string];
  photo: Photo;
  /** Portrait crop for the home skyline, when `photo` doesn't survive one. */
  tallPhoto?: Photo;
};

// TODO(client): services and industries are best guesses — confirm with the client.
export const SERVICES: Service[] = [
  {
    slug: "real-estate",
    name: "Real Estate",
    line: "Launch. List. Sell.",
    promise: "Launches, listings and developments, marketed to sell.",
    tags: ["Project launches", "Listings", "Site visits"],
    photo: photos.cytonn,
  },
  {
    slug: "social-media",
    name: "Social Media",
    line: "Content people stop for.",
    promise: "Content your audience stops scrolling for.",
    tags: ["Reels", "Content calendars", "Community"],
    photo: photos.pexels,
  },
  {
    slug: "seo",
    name: "SEO",
    line: "Found first.",
    promise: "Be the first name people find.",
    tags: ["Local search", "Content", "Technical"],
    photo: photos.merakist,
    tallPhoto: photos.merakistTall,
  },
  {
    slug: "branding",
    name: "Branding",
    line: "Look like the leader.",
    promise: "A look that feels like the market leader.",
    tags: ["Identity", "Brochures", "Campaigns"],
    photo: photos.kaffie,
  },
  {
    slug: "paid-ads",
    name: "Paid Ads",
    line: "Spend that pays back.",
    promise: "Campaigns tuned for leads, not just clicks.",
    tags: ["Meta", "Google", "Retargeting"],
    photo: photos.rahul,
  },
];

export const INDUSTRIES = [
  "Hospitality",
  "Retail",
  "Healthcare",
  "Education",
  "Startups",
  "Lifestyle",
];
