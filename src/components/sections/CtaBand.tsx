import { Container } from "@/components/ui/Container";
import { Button, ArrowRight } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { BRAND, whatsappHref } from "@/config/brand";
import { PRIMARY_CTA } from "@/config/site";

export function CtaBand({
  heading = "Let's look at your funnel",
  body = "Send us the account access and a month of lead data. The first call is a diagnosis, not a pitch — you leave with the three things costing you the most, whether or not you hire us.",
}: {
  heading?: string;
  body?: string;
}) {
  return (
    <section className="grain relative overflow-hidden border-t border-line-soft bg-surface py-24 sm:py-32">
      <div className="aura" aria-hidden="true" />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="font-display text-[clamp(2.25rem,6vw,4.5rem)] leading-[1] text-balance">
              {heading}
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-muted text-pretty sm:text-lg">
              {body}
            </p>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-11 flex flex-wrap items-center justify-center gap-3">
              <Button href={PRIMARY_CTA.href} size="lg">
                {PRIMARY_CTA.label}
                <ArrowRight />
              </Button>
              <Button href={whatsappHref} variant="outline" size="lg">
                Message on WhatsApp
              </Button>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <p className="mt-8 text-xs uppercase tracking-[0.14em] text-subtle">
              {BRAND.address.city} · {BRAND.email.general}
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
