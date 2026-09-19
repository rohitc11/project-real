import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SheetStrip, type SheetField } from "@/components/ui/SheetStrip";

/**
 * Opening block for interior pages. The sheet strip keeps every page inside
 * the same drawing set; the top padding clears the fixed header.
 */
export function PageHero({
  sheet,
  eyebrow,
  title,
  intro,
  meta,
}: {
  /** Drawing reference for this page, e.g. "A-03". */
  sheet: string;
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  /** Optional label/value pairs shown in a ruled grid under the intro. */
  meta?: { label: string; value: string }[];
}) {
  const fields: SheetField[] = [
    { label: "Sheet", value: sheet },
    { label: "Section", value: eyebrow },
    { label: "Rev", value: "C" },
  ];

  return (
    <section className="survey-grid relative overflow-hidden pt-16 lg:pt-[4.5rem]">
      <SheetStrip fields={fields} />

      <Container className="relative pb-14 pt-14 sm:pb-18 sm:pt-20">
        <Reveal>
          <p className="type-note text-accent-deep">{eyebrow}</p>
        </Reveal>

        <Reveal delay={70}>
          <h1 className="type-display mt-6 max-w-[17ch] text-[clamp(2.25rem,6.6vw,4.75rem)]">
            {title}
          </h1>
        </Reveal>

        {intro && (
          <Reveal delay={140}>
            <div className="mt-7 max-w-[56ch] text-[0.9375rem] leading-relaxed text-muted text-pretty sm:text-lg">
              {intro}
            </div>
          </Reveal>
        )}

        {meta && meta.length > 0 && (
          <Reveal delay={200}>
            <dl className="mt-12 grid gap-px border border-ink bg-line sm:grid-cols-2 lg:grid-cols-4">
              {meta.map((item) => (
                <div key={item.label} className="bg-ground p-5">
                  <dt className="type-note text-muted">{item.label}</dt>
                  <dd className="mt-2.5 text-sm text-ink">{item.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
