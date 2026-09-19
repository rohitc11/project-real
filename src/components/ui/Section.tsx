import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/cn";

type SectionProps = {
  children: React.ReactNode;
  /** Small uppercase label above the heading. */
  eyebrow?: string;
  heading?: React.ReactNode;
  /** Supporting paragraph under the heading. */
  intro?: React.ReactNode;
  id?: string;
  className?: string;
  containerSize?: "default" | "wide" | "narrow";
  /** Draws the fading top rule that opens most sections. */
  rule?: boolean;
  align?: "left" | "center";
};

export function Section({
  children,
  eyebrow,
  heading,
  intro,
  id,
  className,
  containerSize = "default",
  rule = true,
  align = "left",
}: SectionProps) {
  const hasHeader = Boolean(eyebrow || heading || intro);

  return (
    <section id={id} className={cn("relative py-20 sm:py-28 lg:py-36", className)}>
      <Container size={containerSize}>
        {rule && <div className="hairline mb-14 sm:mb-20" />}

        {hasHeader && (
          <header
            className={cn(
              "mb-14 sm:mb-20",
              align === "center" && "mx-auto max-w-2xl text-center",
            )}
          >
            {eyebrow && (
              <Reveal>
                <p className={cn("eyebrow", align === "center" && "justify-center")}>
                  {eyebrow}
                </p>
              </Reveal>
            )}
            {heading && (
              <Reveal delay={80}>
                <h2 className="mt-5 font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] text-balance">
                  {heading}
                </h2>
              </Reveal>
            )}
            {intro && (
              <Reveal delay={150}>
                <div className="mt-6 max-w-2xl text-base leading-relaxed text-muted text-pretty sm:text-lg">
                  {intro}
                </div>
              </Reveal>
            )}
          </header>
        )}

        {children}
      </Container>
    </section>
  );
}
