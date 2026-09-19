import { Container } from "@/components/ui/Container";
import { Button, ArrowRight } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { PRIMARY_CTA, SECONDARY_CTA } from "@/config/site";
import { BRAND } from "@/config/brand";
import { STATS } from "@/config/content";

export function Hero() {
  return (
    <section className="grain relative flex min-h-[92svh] items-end overflow-hidden pb-14 pt-32 sm:pb-20 sm:pt-40">
      <div className="aura" aria-hidden="true" />

      {/* Faint vertical rules — architectural structure without imagery. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-full max-w-[90rem] -translate-x-1/2 lg:block"
      >
        <div className="grid h-full grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="border-l border-line-soft last:border-r" />
          ))}
        </div>
      </div>

      <Container className="relative">
        <Reveal>
          <p className="eyebrow">{BRAND.tagline}</p>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="mt-7 max-w-[15ch] font-display text-[clamp(3rem,8.5vw,7rem)] leading-[0.95] tracking-[-0.02em] text-balance">
            We turn listings into{" "}
            <span className="italic text-accent">pipeline</span>.
          </h1>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-end">
          <Reveal delay={200}>
            <p className="max-w-xl text-base leading-relaxed text-muted text-pretty sm:text-lg">
              A growth partner for developers, brokerages and agents — measuring
              every rupee to the site visit, not the form fill. The same
              discipline runs our work for brands well outside property.
            </p>
          </Reveal>

          <Reveal delay={280}>
            <div className="flex flex-wrap items-center gap-3 lg:justify-end">
              <Button href={PRIMARY_CTA.href} size="lg">
                {PRIMARY_CTA.label}
                <ArrowRight />
              </Button>
              <Button href={SECONDARY_CTA.href} variant="outline" size="lg">
                {SECONDARY_CTA.label}
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={380}>
          <div className="mt-16 sm:mt-20">
            <div className="hairline" />
            <dl className="grid grid-cols-2 gap-x-6 gap-y-8 pt-8 sm:grid-cols-4">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <dt className="font-display text-[clamp(1.75rem,3.2vw,2.5rem)] leading-none text-fg">
                    {stat.value}
                  </dt>
                  <dd className="mt-2.5 text-xs uppercase tracking-[0.13em] text-subtle">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
