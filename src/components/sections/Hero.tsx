import { Container } from "@/components/ui/Container";
import { Button, ArrowRight } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SheetStrip } from "@/components/ui/SheetStrip";
import { DimensionLine } from "@/components/ui/DimensionLine";
import { PRIMARY_CTA, SECONDARY_CTA } from "@/config/site";
import { BRAND } from "@/config/brand";
import { STATS, RESPONSE_TIME } from "@/config/content";

export function Hero() {
  return (
    <section className="survey-grid relative overflow-hidden pt-16 lg:pt-[4.5rem]">
      <SheetStrip
        fields={[
          { label: "Sheet", value: "01 / Growth master plan" },
          { label: "Scale", value: "1:200" },
          { label: "Rev", value: "C" },
          { label: "Location", value: BRAND.address.city },
        ]}
      />

      <Container className="relative pb-16 pt-14 sm:pb-20 sm:pt-20">
        <Reveal>
          <p className="type-note text-accent-deep">{BRAND.tagline}</p>
        </Reveal>

        <Reveal delay={70}>
          <h1 className="type-display mt-7 max-w-[13ch] text-[clamp(2.75rem,8.4vw,6.5rem)]">
            Plotted to the <span className="text-accent">site visit</span>.
          </h1>
        </Reveal>

        <Reveal delay={140}>
          <p className="mt-8 max-w-[54ch] text-[0.9375rem] leading-relaxed text-muted text-pretty sm:text-lg">
            Property marketing fails in the gap between a form fill and a family
            standing in a show flat. We draw that gap to scale, close it, and report
            every rupee against the visit it produced — for developers and brokerages
            first, and for brands in any category that want the same rigour.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-11">
            <p className="type-note mb-5 text-muted">Fig. 1 — First response time</p>
            <DimensionLine rows={RESPONSE_TIME} />
          </div>
        </Reveal>

        <Reveal delay={260}>
          <div className="mt-12 flex flex-wrap items-center gap-3">
            <Button href={PRIMARY_CTA.href} size="lg">
              {PRIMARY_CTA.label}
              <ArrowRight />
            </Button>
            <Button href={SECONDARY_CTA.href} variant="outline" size="lg">
              {SECONDARY_CTA.label}
            </Button>
          </div>
        </Reveal>
      </Container>

      {/* Measured figures, annotated as a drawing would annotate them. */}
      <div className="relative border-t border-line">
        <Container>
          <dl className="grid grid-cols-2 gap-px bg-line sm:grid-cols-4">
            {STATS.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 60}>
                <div className="h-full bg-ground px-1 py-7 sm:px-5">
                  <dt className="type-data text-[clamp(1.5rem,3.4vw,2.25rem)] font-semibold leading-none text-ink">
                    {stat.value}
                  </dt>
                  <dd className="type-note mt-3.5 text-muted">{stat.label}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </Container>
      </div>
    </section>
  );
}
