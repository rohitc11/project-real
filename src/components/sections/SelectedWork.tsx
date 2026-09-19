import Link from "next/link";

import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { NoteLink, ArrowRight } from "@/components/ui/Button";
import { CASE_STUDIES } from "@/config/content";

/**
 * Case studies as as-built records: a ruled plate per engagement, with the
 * measured outcome annotated below the description rather than shouted above it.
 */
export function SelectedWork() {
  return (
    <Section
      id="work"
      sheet="B-00"
      eyebrow="As-built"
      heading={
        <>
          Recorded at the <span className="text-accent">revenue event</span>
        </>
      }
      intro="Three engagements, each closing a different gap in the same funnel. Figures are measured at the booking, not at the form fill."
    >
      <div className="grid gap-px border border-ink bg-line lg:grid-cols-3">
        {CASE_STUDIES.map((study, index) => (
          <Reveal as="article" key={study.slug} delay={index * 70}>
            <Link
              href={`/work/${study.slug}`}
              className="group flex h-full flex-col justify-between gap-8 bg-ground p-6 transition-colors duration-300 hover:bg-[var(--brand-tint)] sm:p-7"
            >
              <div>
                <div className="type-note flex items-center justify-between gap-4 border-b border-line pb-2.5 text-muted">
                  <span>{study.industry}</span>
                  <span>{study.year}</span>
                </div>

                <h3 className="type-title mt-5 text-[1.3125rem] text-ink transition-colors duration-300 group-hover:text-accent-deep">
                  {study.headline}
                </h3>

                <p className="mt-3.5 text-sm leading-relaxed text-muted text-pretty">
                  {study.summary}
                </p>
              </div>

              <div>
                <dl className="grid grid-cols-3 gap-3 border-t border-line pt-5">
                  {study.metrics.map((metric) => (
                    <div key={metric.label}>
                      <dt className="type-data text-lg font-semibold leading-none text-accent-deep">
                        {metric.value}
                      </dt>
                      <dd className="type-note mt-2 leading-snug text-muted">
                        {metric.label}
                      </dd>
                    </div>
                  ))}
                </dl>

                <span className="type-note mt-6 inline-flex items-center gap-2.5 text-muted transition-colors duration-300 group-hover:text-accent-deep">
                  Open record
                  <ArrowRight />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>

      <Reveal delay={100}>
        <div className="mt-10">
          <NoteLink href="/work">All records</NoteLink>
        </div>
      </Reveal>
    </Section>
  );
}
