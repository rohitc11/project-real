export type Service = {
  /** URL segment under /services. */
  slug: string;
  /** Two-digit index shown in the editorial numbering. */
  index: string;
  title: string;
  /** One line for cards and nav. */
  short: string;
  /** Opening paragraph on the detail page. */
  summary: string;
  /** What the client actually gets. */
  deliverables: string[];
  /** Business outcomes, phrased as results not activities. */
  outcomes: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "real-estate-seo",
    index: "01",
    title: "Search & local SEO",
    short: "Own the searches that happen before a site visit.",
    summary:
      "Buyers research for months before they call. We make sure the project, the locality and the developer name all lead back to you — on Google, on Maps, and in the AI answers that increasingly sit above them.",
    deliverables: [
      "Technical audit and Core Web Vitals remediation",
      "Locality, project and intent keyword architecture",
      "Google Business Profile management across sites",
      "Programmatic landing pages for micro-markets",
      "Digital PR and authority link acquisition",
      "Monthly rank, traffic and enquiry reporting",
    ],
    outcomes: [
      "Higher share of high-intent organic enquiries",
      "Lower blended cost per qualified lead",
      "Compounding visibility that outlives an ad budget",
    ],
  },
  {
    slug: "performance-media",
    index: "02",
    title: "Performance media",
    short: "Google, Meta and YouTube spend that reports in site visits.",
    summary:
      "Most real estate ad accounts optimise for form fills. We optimise for the events that matter — site visits booked, visits attended, bookings closed — by feeding offline outcomes back into the platforms.",
    deliverables: [
      "Full-funnel Google, Meta and YouTube campaign builds",
      "Offline conversion imports from your CRM",
      "Creative testing systems with named hypotheses",
      "Geo, income and intent audience architecture",
      "Retargeting across inventory, price band and stage",
      "Live spend-to-pipeline dashboard",
    ],
    outcomes: [
      "Cost per site visit tracked, not just cost per lead",
      "Budget shifted to what actually converts",
      "Clear, defensible media reporting for leadership",
    ],
  },
  {
    slug: "social-and-video",
    index: "03",
    title: "Social & short-form video",
    short: "The format buyers actually scroll — produced on a schedule.",
    summary:
      "Short-form video is the most effective top-of-funnel channel in property right now, and the hardest to sustain. We run it as a production line: monthly shoots, a tested hook library and an editing pipeline that keeps the feed alive.",
    deliverables: [
      "Monthly content calendar and shot list",
      "On-site shoot days for reels, walkthroughs and agent content",
      "Editing, subtitling and platform-native cutdowns",
      "Community management and DM triage",
      "Creator and influencer collaborations",
      "Performance review against reach, saves and enquiries",
    ],
    outcomes: [
      "Consistent presence without pulling your team off-site",
      "Cheaper reach than paid alone",
      "A content library that feeds ads and sales decks",
    ],
  },
  {
    slug: "listing-media",
    index: "04",
    title: "Listing & project media",
    short: "Photography, film, CGI and walkthroughs that hold attention.",
    summary:
      "Every campaign is capped by the quality of the assets underneath it. We produce the film, stills and 3D that make a property worth stopping for — and license them cleanly across every channel you sell on.",
    deliverables: [
      "Architectural and interior photography",
      "Project films, agent films and testimonial edits",
      "Drone and aerial coverage",
      "CGI, walkthroughs and virtual staging",
      "Floor plan and collateral design",
      "Asset library with usage rights and channel-ready crops",
    ],
    outcomes: [
      "Higher engagement on every channel the assets touch",
      "One consistent visual standard across portals and social",
      "Faster campaign launches from a ready asset bank",
    ],
  },
  {
    slug: "websites-and-landing-pages",
    index: "05",
    title: "Websites & landing pages",
    short: "Fast, credible pages built to convert enquiries.",
    summary:
      "A project microsite that loads in four seconds costs you more than the media buying it. We build fast, accessible sites and campaign landing pages that are measured on enquiry rate, not on how they look in a deck.",
    deliverables: [
      "Corporate sites, project microsites and campaign pages",
      "Conversion-focused UX and form design",
      "Core Web Vitals and accessibility compliance",
      "CRM, WhatsApp and calendar integrations",
      "A/B testing programme",
      "Analytics, consent and server-side event tracking",
    ],
    outcomes: [
      "More enquiries from the same traffic",
      "A site your sales team is happy to send prospects to",
      "Clean data feeding every other channel",
    ],
  },
  {
    slug: "crm-and-automation",
    index: "06",
    title: "CRM & lead nurture",
    short: "Stop losing the leads you already paid for.",
    summary:
      "In most property funnels the largest leak is between enquiry and site visit. We fix response time, routing and follow-up so the leads marketing generates actually reach a human while they are still warm.",
    deliverables: [
      "CRM setup, migration and pipeline design",
      "Sub-five-minute lead routing and alerting",
      "WhatsApp, email and call follow-up sequences",
      "Lead scoring and sales-qualification criteria",
      "Attribution from first click to closed booking",
      "Sales enablement collateral and call frameworks",
    ],
    outcomes: [
      "Higher enquiry-to-site-visit conversion",
      "Marketing and sales arguing from the same numbers",
      "Revenue attributed to the campaigns that produced it",
    ],
  },
  {
    slug: "brand-and-positioning",
    index: "07",
    title: "Brand & positioning",
    short: "A clear reason to choose you over the project next door.",
    summary:
      "When two projects share a locality, a price band and a spec sheet, brand is the only remaining variable. We build the positioning, identity and message architecture that makes the choice obvious.",
    deliverables: [
      "Market, competitor and buyer research",
      "Positioning and message architecture",
      "Naming, identity and visual systems",
      "Brand guidelines and asset toolkits",
      "Launch campaign concepts",
      "Sales collateral and experience centre design direction",
    ],
    outcomes: [
      "Pricing power against comparable inventory",
      "Consistency across every touchpoint and vendor",
      "Faster launches from a reusable system",
    ],
  },
];

export const getService = (slug: string) =>
  SERVICES.find((service) => service.slug === slug);

export const serviceSlugs = SERVICES.map((service) => service.slug);
