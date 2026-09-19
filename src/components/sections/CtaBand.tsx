import { Container } from "@/components/ui/Container";
import { Button, ArrowRight } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { BRAND, whatsappHref } from "@/config/brand";
import { PRIMARY_CTA } from "@/config/site";

/**
 * Closing call to action, framed as a request for information — the document a
 * contractor actually sends when they need an answer before they can proceed.
 */
export function CtaBand({
  heading = "Let's look at your funnel",
  body = "Send account access and a month of lead data before the call. You leave it with the three things costing you the most, whether or not you hire us.",
}: {
  heading?: string;
  body?: string;
}) {
  return (
    <section className="survey-grid relative overflow-hidden border-t border-ink">
      <Container className="relative py-16 sm:py-24">
        <Reveal>
          <div className="corner-ticks border border-ink bg-ground p-7 sm:p-12">
            <div className="type-note flex flex-wrap justify-between gap-x-7 gap-y-2 border-b border-line pb-3 text-muted">
              <span>Request for information</span>
              <span>Response within one working day</span>
            </div>

            <h2 className="type-display mt-8 max-w-[16ch] text-[clamp(2rem,5.4vw,4rem)]">
              {heading}
            </h2>

            <p className="mt-6 max-w-[54ch] text-[0.9375rem] leading-relaxed text-muted text-pretty sm:text-base">
              {body}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Button href={PRIMARY_CTA.href} size="lg">
                {PRIMARY_CTA.label}
                <ArrowRight />
              </Button>
              <Button href={whatsappHref} variant="outline" size="lg">
                Message on WhatsApp
              </Button>
            </div>

            <div className="type-note mt-10 flex flex-wrap gap-x-7 gap-y-2 border-t border-line pt-4 text-muted">
              <span>{BRAND.address.city}</span>
              <span>{BRAND.email.general}</span>
              <span>{BRAND.phone.display}</span>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
