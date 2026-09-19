import Link from "next/link";

import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { NoteLink } from "@/components/ui/Button";
import { SERVICES } from "@/config/services";

/**
 * The services list rendered as a drawing schedule. The sheet reference in the
 * right-hand column is not decoration — it is the same reference used on the
 * service's own page, so the set stays internally consistent.
 */
export function ServicesOverview() {
  return (
    <Section
      id="services"
      sheet="A-00"
      eyebrow="Schedule"
      heading={
        <>
          Seven disciplines, one <span className="text-accent">funnel</span>
        </>
      }
      intro="Most agencies sell channels. We take responsibility for the whole path — the search a buyer runs at midnight, the ad they scroll past twice, and the four minutes that decide whether anyone calls them back."
    >
      <div className="border-t border-ink">
        <div className="type-note grid grid-cols-[2.5rem_1fr_3.5rem] gap-4 border-b border-line py-2.5 text-muted sm:grid-cols-[3.5rem_1fr_5rem]">
          <span>No.</span>
          <span>Scope of work</span>
          <span className="text-right">Drawing</span>
        </div>

        <ul>
          {SERVICES.map((service, index) => (
            <Reveal as="li" key={service.slug} delay={index * 40}>
              <Link
                href={`/services/${service.slug}`}
                className="group grid grid-cols-[2.5rem_1fr_3.5rem] items-baseline gap-4 border-b border-line-soft py-5 transition-colors duration-300 hover:bg-[var(--brand-tint)] sm:grid-cols-[3.5rem_1fr_5rem] sm:py-6"
              >
                <span className="type-data text-[0.8125rem] font-semibold text-accent-deep">
                  {service.index}
                </span>

                <span className="min-w-0">
                  <span className="type-title block text-[clamp(1.125rem,2.2vw,1.625rem)] text-ink transition-colors duration-300 group-hover:text-accent-deep">
                    {service.title}
                  </span>
                  <span className="mt-1.5 block max-w-[52ch] text-sm leading-relaxed text-muted text-pretty">
                    {service.short}
                  </span>
                </span>

                <span className="type-note text-right text-muted transition-colors duration-300 group-hover:text-accent-deep">
                  A-{service.index}
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>

      <Reveal delay={100}>
        <div className="mt-10">
          <NoteLink href="/services">See the full set</NoteLink>
        </div>
      </Reveal>
    </Section>
  );
}
