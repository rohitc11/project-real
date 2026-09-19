import Link from "next/link";

import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { TextLink, ArrowRight } from "@/components/ui/Button";
import { CASE_STUDIES } from "@/config/content";

export function SelectedWork() {
  return (
    <Section
      id="work"
      eyebrow="Selected work"
      heading={
        <>
          The numbers we are <span className="italic text-accent">judged on</span>
        </>
      }
      intro="Three engagements, each fixing a different leak in the same funnel."
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {CASE_STUDIES.map((study, index) => (
          <Reveal as="article" key={study.slug} delay={index * 90}>
            <Link
              href={`/work/${study.slug}`}
              className="group flex h-full flex-col justify-between overflow-hidden rounded-md border border-line-soft bg-surface p-7 transition-all duration-500 ease-[var(--brand-ease)] hover:-translate-y-1 hover:border-accent/40 hover:bg-surface-2 sm:p-8"
            >
              <div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[0.6875rem] uppercase tracking-[0.16em] text-subtle">
                    {study.industry}
                  </span>
                  <span className="text-[0.6875rem] tracking-[0.1em] text-subtle">
                    {study.year}
                  </span>
                </div>

                <h3 className="mt-6 font-display text-[1.5rem] leading-[1.15] text-fg text-balance transition-colors duration-500 group-hover:text-accent">
                  {study.headline}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-muted text-pretty">
                  {study.summary}
                </p>
              </div>

              <div className="mt-8">
                <div className="hairline" />
                <dl className="grid grid-cols-3 gap-3 pt-5">
                  {study.metrics.map((metric) => (
                    <div key={metric.label}>
                      <dt className="font-display text-xl leading-none text-accent">
                        {metric.value}
                      </dt>
                      <dd className="mt-1.5 text-[0.6875rem] leading-snug text-subtle">
                        {metric.label}
                      </dd>
                    </div>
                  ))}
                </dl>

                <span className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-subtle transition-colors duration-500 group-hover:text-accent">
                  Read the case
                  <ArrowRight className="size-3.5" />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120}>
        <div className="mt-12">
          <TextLink href="/work">All case studies</TextLink>
        </div>
      </Reveal>
    </Section>
  );
}
