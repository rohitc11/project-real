import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight } from "@/components/ui/Button";
import { SERVICES, getService } from "@/config/services";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return {
    title: service.title,
    description: service.short,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServiceDetailPage({ params }: Params) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = SERVICES.filter((item) => item.slug !== service.slug);

  return (
    <>
      <PageHero
        eyebrow={`Service ${service.index}`}
        title={service.title}
        intro={service.summary}
      />

      <Section rule>
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <h2 className="eyebrow">What you get</h2>
            </Reveal>
            <ul className="mt-8 flex flex-col">
              {service.deliverables.map((item, index) => (
                <Reveal as="li" key={item} delay={index * 50}>
                  <div className="flex gap-4 border-b border-line-soft py-4">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                    <span className="text-sm leading-relaxed text-fg sm:text-base">{item}</span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>

          <div>
            <Reveal>
              <h2 className="eyebrow">What changes</h2>
            </Reveal>
            <ul className="mt-8 flex flex-col gap-4">
              {service.outcomes.map((item, index) => (
                <Reveal as="li" key={item} delay={index * 60}>
                  <div className="rounded-md border border-line-soft bg-surface p-6 sm:p-7">
                    <p className="font-display text-lg leading-snug text-fg text-pretty">
                      {item}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section eyebrow="Keep going" heading="Other disciplines">
        <ul className="rule-top">
          {others.map((item, index) => (
            <Reveal as="li" key={item.slug} delay={index * 40}>
              <Link
                href={`/services/${item.slug}`}
                className="group flex items-baseline justify-between gap-6 border-b border-line-soft py-5 transition-colors duration-500 hover:border-accent/40"
              >
                <span className="flex items-baseline gap-5">
                  <span className="font-display text-xs text-subtle">{item.index}</span>
                  <span className="font-display text-xl text-fg transition-colors duration-500 group-hover:text-accent sm:text-2xl">
                    {item.title}
                  </span>
                </span>
                <ArrowRight className="shrink-0 text-subtle transition-colors group-hover:text-accent" />
              </Link>
            </Reveal>
          ))}
        </ul>
      </Section>

      <CtaBand />
    </>
  );
}
