import type { Metadata } from "next";

import { PageHero } from "@/components/sections/PageHero";
import { Industries } from "@/components/sections/Industries";
import { CtaBand } from "@/components/sections/CtaBand";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { BRAND } from "@/config/brand";
import { STATS } from "@/config/content";

export const metadata: Metadata = {
  title: "About",
  description: BRAND.description,
};

/** Principles are stated here rather than in config — they are page copy, not data. */
const PRINCIPLES = [
  {
    title: "Measure to the revenue event",
    body: "A form fill is not a result. We wire offline outcomes back into the platforms so the algorithms optimise toward site visits and bookings, and so your reporting survives a finance review.",
  },
  {
    title: "Fix before you fund",
    body: "If response time is eleven hours, more media spend just buys more waste. We audit and repair the funnel before we ask for a bigger budget.",
  },
  {
    title: "You own everything",
    body: "Accounts, pixels, creative files, dashboards and data stay in your name for the whole engagement, and leave with you if it ends.",
  },
  {
    title: "Fewer, better bets",
    body: "We run a named hypothesis list and kill what does not work quickly. Small accounts get the same rigour as large ones because the method does not scale down.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={
          <>
            Marketers who learned it in the{" "}
            <span className="italic text-accent">hardest funnel</span>
          </>
        }
        intro={`${BRAND.name} was built to fix a specific problem: property marketing that reports beautifully and sells nothing. We started in real estate because it punishes vanity metrics faster than any other category, and we have kept that standard everywhere else we work.`}
      />

      <Section eyebrow="How we operate" heading="Four principles we do not trade away">
        <div className="grid gap-px overflow-hidden rounded-md border border-line-soft bg-line-soft sm:grid-cols-2">
          {PRINCIPLES.map((principle, index) => (
            <Reveal key={principle.title} delay={index * 70}>
              <div className="h-full bg-surface p-8 sm:p-10">
                <span className="font-display text-sm text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-display text-2xl leading-tight text-fg text-balance">
                  {principle.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted text-pretty">
                  {principle.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="By the numbers" heading="Where we have got to" rule>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {STATS.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 70}>
              <div>
                <dt className="font-display text-[clamp(2.25rem,5vw,3.5rem)] leading-none text-fg">
                  {stat.value}
                </dt>
                <dd className="mt-3 text-sm text-muted">{stat.label}</dd>
                {stat.note && (
                  <p className="mt-1.5 text-xs leading-snug text-subtle">{stat.note}</p>
                )}
              </div>
            </Reveal>
          ))}
        </dl>
      </Section>

      <Industries />
      <CtaBand />
    </>
  );
}
