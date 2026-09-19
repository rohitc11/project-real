import type { Metadata } from "next";

import { PageHero } from "@/components/sections/PageHero";
import { ProcessOverview } from "@/components/sections/ProcessOverview";
import { CtaBand } from "@/components/sections/CtaBand";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { FAQS } from "@/config/content";

export const metadata: Metadata = {
  title: "Process",
  description:
    "Diagnose, position, build, scale, report — the five-stage engagement model behind every account we run.",
};

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Process"
        title={
          <>
            A method, not a{" "}
            <span className="italic text-accent">retainer</span>
          </>
        }
        intro="The same five stages run on every account, whether it is a single tower launch or a national brokerage. What changes is the weighting, not the sequence."
      />

      <ProcessOverview />

      <Section eyebrow="Questions" heading="Before you ask" containerSize="narrow">
        <dl className="rule-top">
          {FAQS.map((faq, index) => (
            <Reveal key={faq.question} delay={index * 50}>
              <div className="border-b border-line-soft py-7">
                <dt className="font-display text-xl leading-snug text-fg text-pretty">
                  {faq.question}
                </dt>
                <dd className="mt-3 text-sm leading-relaxed text-muted text-pretty sm:text-base">
                  {faq.answer}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </Section>

      <CtaBand />
    </>
  );
}
