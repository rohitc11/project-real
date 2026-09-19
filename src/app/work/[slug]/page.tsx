import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { CASE_STUDIES } from "@/config/content";

type Params = { params: Promise<{ slug: string }> };

const getCaseStudy = (slug: string) => CASE_STUDIES.find((study) => study.slug === slug);

export function generateStaticParams() {
  return CASE_STUDIES.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};

  return {
    title: study.headline,
    description: study.summary,
    alternates: { canonical: `/work/${study.slug}` },
  };
}

export default async function CaseStudyPage({ params }: Params) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <>
      <PageHero
        eyebrow="Case study"
        title={study.headline}
        intro={study.summary}
        meta={[
          { label: "Client", value: study.client },
          { label: "Sector", value: study.industry },
          { label: "Year", value: study.year },
          { label: "Scope", value: study.services.join(", ") },
        ]}
      />

      <Section rule>
        <dl className="grid gap-px overflow-hidden rounded-md border border-line-soft bg-line-soft sm:grid-cols-3">
          {study.metrics.map((metric, index) => (
            <Reveal key={metric.label} delay={index * 80}>
              <div className="h-full bg-surface p-8 sm:p-10">
                <dt className="font-display text-[clamp(2.5rem,5vw,3.75rem)] leading-none text-accent">
                  {metric.value}
                </dt>
                <dd className="mt-4 text-sm text-muted">{metric.label}</dd>
              </div>
            </Reveal>
          ))}
        </dl>

        <Reveal delay={120}>
          <div className="mt-14 max-w-2xl">
            <h2 className="eyebrow">Scope</h2>
            <ul className="mt-6 flex flex-wrap gap-2">
              {study.services.map((service) => (
                <li
                  key={service}
                  className="rounded-full border border-line-soft px-4 py-2 text-xs uppercase tracking-[0.12em] text-muted"
                >
                  {service}
                </li>
              ))}
            </ul>
            <p className="mt-10 text-sm leading-relaxed text-subtle text-pretty">
              Full write-up — approach, creative, media plan and reporting — available
              under NDA on request.
            </p>
          </div>
        </Reveal>
      </Section>

      <CtaBand heading="Want the same read on your numbers?" />
    </>
  );
}
