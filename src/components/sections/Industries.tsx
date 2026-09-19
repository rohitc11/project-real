import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { INDUSTRIES } from "@/config/content";

export function Industries() {
  return (
    <Section
      sheet="D-00"
      eyebrow="Site coverage"
      heading={
        <>
          Built in real estate. <span className="text-accent">Proven beyond it.</span>
        </>
      }
      intro="Property is the hardest funnel to run: long consideration, high ticket, offline close. Once a team can measure that, every other category gets easier."
    >
      <div className="grid gap-px border border-ink bg-line sm:grid-cols-2 lg:grid-cols-3">
        {INDUSTRIES.map((industry, index) => (
          <Reveal key={industry.name} delay={index * 45}>
            <div className="group h-full bg-ground p-6 transition-colors duration-300 hover:bg-[var(--brand-tint)]">
              <span className="type-note text-muted">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="type-title mt-3.5 text-lg text-ink transition-colors duration-300 group-hover:text-accent-deep">
                {industry.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted text-pretty">
                {industry.note}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
