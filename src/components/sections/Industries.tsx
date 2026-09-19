import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { INDUSTRIES } from "@/config/content";

export function Industries() {
  return (
    <Section
      eyebrow="Who we work with"
      heading={
        <>
          Built in real estate.{" "}
          <span className="italic text-accent">Proven beyond it.</span>
        </>
      }
      intro="Property is the hardest funnel to run: long consideration, high ticket, offline close. Once you can measure that, every other category gets easier."
    >
      <div className="grid gap-px overflow-hidden rounded-md border border-line-soft bg-line-soft sm:grid-cols-2 lg:grid-cols-3">
        {INDUSTRIES.map((industry, index) => (
          <Reveal key={industry.name} delay={index * 60}>
            <div className="group h-full bg-surface p-7 transition-colors duration-500 hover:bg-surface-2 sm:p-8">
              <h3 className="font-display text-xl text-fg transition-colors duration-500 group-hover:text-accent">
                {industry.name}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted text-pretty">
                {industry.note}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
