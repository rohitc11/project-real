import Link from "next/link";

import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { TextLink, ArrowRight } from "@/components/ui/Button";
import { SERVICES } from "@/config/services";

export function ServicesOverview() {
  return (
    <Section
      id="services"
      eyebrow="What we do"
      heading={
        <>
          Seven disciplines, run as <span className="italic text-accent">one funnel</span>
        </>
      }
      intro="Most agencies sell channels. We sell the path from a stranger scrolling at midnight to a signed booking — and we own every step of it."
    >
      <ul className="rule-top">
        {SERVICES.map((service, index) => (
          <Reveal as="li" key={service.slug} delay={index * 50}>
            <Link
              href={`/services/${service.slug}`}
              className="group grid grid-cols-[auto_1fr] items-baseline gap-x-5 gap-y-2 border-b border-line-soft py-7 transition-colors duration-500 hover:border-accent/40 sm:grid-cols-[4rem_1fr_auto] sm:gap-x-8 sm:py-9"
            >
              <span className="font-display text-sm text-subtle transition-colors duration-500 group-hover:text-accent">
                {service.index}
              </span>

              <span className="min-w-0">
                <span className="block font-display text-[clamp(1.5rem,3vw,2.25rem)] leading-tight text-fg transition-colors duration-500 group-hover:text-accent">
                  {service.title}
                </span>
                <span className="mt-2 block max-w-xl text-sm leading-relaxed text-muted text-pretty">
                  {service.short}
                </span>
              </span>

              <span className="col-start-2 mt-2 inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-subtle transition-colors duration-500 group-hover:text-accent sm:col-start-3 sm:mt-0">
                Explore
                <ArrowRight className="size-3.5" />
              </span>
            </Link>
          </Reveal>
        ))}
      </ul>

      <Reveal delay={120}>
        <div className="mt-12">
          <TextLink href="/services">See how the disciplines fit together</TextLink>
        </div>
      </Reveal>
    </Section>
  );
}
