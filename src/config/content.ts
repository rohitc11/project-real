/**
 * Marketing content that is not the brand identity itself.
 *
 * Everything here is PLACEHOLDER until replaced with real client names,
 * verified numbers and approved quotes. Do not publish invented metrics
 * or testimonials — swap them out before launch.
 */

export type Stat = { value: string; label: string; note?: string };

export const STATS: Stat[] = [
  { value: "₹180cr+", label: "Inventory moved", note: "Across launch and sustenance campaigns" },
  { value: "3.4x", label: "Average return on ad spend" },
  { value: "48%", label: "Lift in enquiry-to-site-visit rate" },
  { value: "12", label: "Micro-markets covered" },
];

export type ProcessStep = {
  index: string;
  title: string;
  duration: string;
  body: string;
};

export const PROCESS: ProcessStep[] = [
  {
    index: "01",
    title: "Diagnose",
    duration: "Week 1–2",
    body: "We audit the funnel end to end — media accounts, site, CRM, response times and sales handoff — and quantify where enquiries and money are actually being lost.",
  },
  {
    index: "02",
    title: "Position",
    duration: "Week 2–3",
    body: "We define who the buyer is, what they are comparing you against, and the single argument that makes the choice obvious. Every channel inherits it.",
  },
  {
    index: "03",
    title: "Build",
    duration: "Week 3–6",
    body: "Assets, pages, tracking and campaign architecture get built together, so nothing launches into a funnel that cannot measure it.",
  },
  {
    index: "04",
    title: "Scale",
    duration: "Month 2 onward",
    body: "We run a weekly testing cadence against a named hypothesis list and shift budget toward what converts to site visits, not what looks good in a report.",
  },
  {
    index: "05",
    title: "Report",
    duration: "Monthly",
    body: "One dashboard, one source of truth: spend in, enquiries, site visits, bookings, and cost per outcome at every stage.",
  },
];

export type Industry = { name: string; note: string };

/**
 * Real estate is the specialism; the same operating model is sold into
 * adjacent categories. Order matters — real estate leads.
 */
export const INDUSTRIES: Industry[] = [
  { name: "Real estate", note: "Developers, brokerages, channel partners and agents" },
  { name: "Hospitality", note: "Hotels, resorts and serviced residences" },
  { name: "Interiors & architecture", note: "Studios, contractors and modular brands" },
  { name: "Healthcare", note: "Hospitals, clinics and diagnostics" },
  { name: "Retail & F&B", note: "Multi-outlet and franchise growth" },
  { name: "Education", note: "Institutions and admissions funnels" },
];

export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  headline: string;
  summary: string;
  metrics: { value: string; label: string }[];
  services: string[];
  year: string;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "launch-sell-out",
    client: "PLACEHOLDER Developer",
    industry: "Residential",
    headline: "A tower sold out in nine weeks on a flat media budget",
    summary:
      "Rebuilt the launch funnel around site visits rather than form fills, and moved 60% of spend into the three creative angles that survived testing.",
    metrics: [
      { value: "9 wks", label: "To sell-out" },
      { value: "-41%", label: "Cost per site visit" },
      { value: "3.9x", label: "Return on ad spend" },
    ],
    services: ["Performance media", "Listing & project media", "Websites & landing pages"],
    year: "2025",
  },
  {
    slug: "organic-pipeline",
    client: "PLACEHOLDER Brokerage",
    industry: "Brokerage",
    headline: "Organic search overtook paid as the largest source of enquiries",
    summary:
      "Built a locality page architecture and a digital PR programme that made the brand the default answer for twelve micro-market searches.",
    metrics: [
      { value: "+214%", label: "Organic enquiries" },
      { value: "12", label: "Micro-markets ranked" },
      { value: "-33%", label: "Blended cost per lead" },
    ],
    services: ["Search & local SEO", "Brand & positioning"],
    year: "2025",
  },
  {
    slug: "nurture-recovery",
    client: "PLACEHOLDER Group",
    industry: "Mixed-use",
    headline: "Half the pipeline was already in the CRM, unworked",
    summary:
      "Cut first-response time from eleven hours to four minutes and rebuilt follow-up as a WhatsApp-first sequence owned by marketing.",
    metrics: [
      { value: "4 min", label: "First response time" },
      { value: "+48%", label: "Enquiry to site visit" },
      { value: "0", label: "Extra media spend" },
    ],
    services: ["CRM & lead nurture", "Performance media"],
    year: "2024",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "They were the first agency that asked to see our CRM before they asked about our budget. That told us everything.",
    name: "PLACEHOLDER Name",
    role: "Head of Marketing",
    company: "PLACEHOLDER Developer",
  },
  {
    quote:
      "Our reporting went from a slide deck of impressions to one number the board actually cares about: cost per booking.",
    name: "PLACEHOLDER Name",
    role: "Director",
    company: "PLACEHOLDER Brokerage",
  },
  {
    quote:
      "The content pipeline runs without us chasing it. That alone changed how our sales team uses social.",
    name: "PLACEHOLDER Name",
    role: "Founder",
    company: "PLACEHOLDER Group",
  },
];

export type Faq = { question: string; answer: string };

export const FAQS: Faq[] = [
  {
    question: "Do you only work with real estate brands?",
    answer:
      "Real estate is our specialism and most of our work sits there. The operating model — measure to the revenue event, fix the funnel before buying more traffic — transfers cleanly, so we also run accounts in hospitality, healthcare, interiors, retail and education.",
  },
  {
    question: "What does a typical engagement look like?",
    answer:
      "A six-week build followed by a monthly retainer. Project launches are sometimes scoped as a fixed campaign instead. We will tell you in the first call which one fits.",
  },
  {
    question: "Do you take over our existing ad accounts?",
    answer:
      "Yes, and you keep ownership of them. Accounts, pixels, data and creative assets stay in your name throughout, and leave with you if we stop working together.",
  },
  {
    question: "How do you report performance?",
    answer:
      "One live dashboard covering spend, enquiries, site visits and bookings, with a written monthly review. Where your CRM allows it, we import offline outcomes so the ad platforms optimise toward closed business rather than form fills.",
  },
  {
    question: "What is the minimum engagement?",
    answer:
      "Three months. Anything shorter does not give the testing cycle enough runway to produce results worth reporting.",
  },
];

export type Dimension = {
  caption: string;
  value: string;
  /** 0–1. Sets the drawn length so the comparison is to scale. */
  fraction?: number;
  emphasis?: boolean;
};

/**
 * Measured before/after comparisons, drawn as dimension lines. Only use this
 * shape for claims that genuinely have a unit and a baseline — the device
 * loses its meaning the moment it decorates something unmeasured.
 */
export const RESPONSE_TIME: Dimension[] = [
  { caption: "Enquiry → callback", value: "11 h 20 m", fraction: 1 },
  { caption: "After rebuild", value: "4 m", fraction: 0.06, emphasis: true },
];

export const SPEND_EFFICIENCY: Dimension[] = [
  { caption: "Cost / site visit", value: "₹23,400", fraction: 1 },
  { caption: "After 90 days", value: "₹13,762", fraction: 0.59, emphasis: true },
];
