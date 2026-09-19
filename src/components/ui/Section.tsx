import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/cn";

type SectionProps = {
  children: React.ReactNode;
  /** Drawing reference, e.g. "A-02". Encodes the sheet this section is on. */
  sheet?: string;
  eyebrow?: string;
  heading?: React.ReactNode;
  intro?: React.ReactNode;
  id?: string;
  className?: string;
  containerSize?: "default" | "wide" | "narrow";
};

/**
 * Sections are laid out as a drawing would be: a narrow annotation column on
 * the left carrying the sheet reference and label, the drawing itself on the
 * right. The rule above each section is the sheet division.
 */
export function Section({
  children,
  sheet,
  eyebrow,
  heading,
  intro,
  id,
  className,
  containerSize = "default",
}: SectionProps) {
  const hasHeader = Boolean(sheet || eyebrow || heading || intro);

  return (
    <section id={id} className={cn("relative border-t border-line", className)}>
      <Container size={containerSize}>
        {hasHeader && (
          <header className="grid gap-x-10 gap-y-6 pb-12 pt-12 sm:pt-16 lg:grid-cols-[10rem_1fr] lg:pb-16">
            <Reveal>
              <div className="type-note flex gap-4 text-muted lg:flex-col lg:gap-2">
                {sheet && <span className="text-accent-deep">{sheet}</span>}
                {eyebrow && <span>{eyebrow}</span>}
              </div>
            </Reveal>

            <div>
              {heading && (
                <Reveal delay={60}>
                  <h2 className="type-display max-w-[16ch] text-[clamp(1.875rem,4.4vw,3.25rem)]">
                    {heading}
                  </h2>
                </Reveal>
              )}
              {intro && (
                <Reveal delay={120}>
                  <div className="mt-6 max-w-[52ch] text-[0.9375rem] leading-relaxed text-muted text-pretty sm:text-base">
                    {intro}
                  </div>
                </Reveal>
              )}
            </div>
          </header>
        )}

        <div className={cn(!hasHeader && "pt-12 sm:pt-16")}>{children}</div>
        <div className="h-12 sm:h-16" />
      </Container>
    </section>
  );
}
