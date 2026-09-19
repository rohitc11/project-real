import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Opening block for interior pages. The top padding clears the fixed header.
 */
export function PageHero({
  eyebrow,
  title,
  intro,
  meta,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  /** Optional label/value pairs shown under the intro. */
  meta?: { label: string; value: string }[];
}) {
  return (
    <section className="grain relative overflow-hidden pb-16 pt-32 sm:pb-20 sm:pt-44">
      <div className="aura" aria-hidden="true" />

      <Container className="relative">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
        </Reveal>

        <Reveal delay={90}>
          <h1 className="mt-6 max-w-[18ch] font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.98] tracking-[-0.02em] text-balance">
            {title}
          </h1>
        </Reveal>

        {intro && (
          <Reveal delay={170}>
            <div className="mt-8 max-w-2xl text-base leading-relaxed text-muted text-pretty sm:text-lg">
              {intro}
            </div>
          </Reveal>
        )}

        {meta && meta.length > 0 && (
          <Reveal delay={240}>
            <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-line-soft pt-8 sm:grid-cols-4">
              {meta.map((item) => (
                <div key={item.label}>
                  <dt className="text-[0.6875rem] uppercase tracking-[0.14em] text-subtle">
                    {item.label}
                  </dt>
                  <dd className="mt-2 text-sm text-fg">{item.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
