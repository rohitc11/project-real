import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { TextLink } from "@/components/ui/Button";
import { PROCESS } from "@/config/content";

export function ProcessOverview() {
  return (
    <Section
      id="process"
      eyebrow="How we work"
      heading={
        <>
          Fix the funnel, <span className="italic text-accent">then</span> buy traffic
        </>
      }
      intro="Spending more on media before the funnel holds water is the most expensive mistake in property marketing. Our first month is spent making sure it does."
    >
      <ol className="rule-top grid gap-0">
        {PROCESS.map((step, index) => (
          <Reveal as="li" key={step.index} delay={index * 70}>
            <div className="grid gap-x-8 gap-y-3 border-b border-line-soft py-8 sm:grid-cols-[4rem_14rem_1fr] sm:py-10">
              <span className="font-display text-sm text-accent">{step.index}</span>
              <div>
                <h3 className="font-display text-2xl leading-tight text-fg">{step.title}</h3>
                <p className="mt-1.5 text-[0.6875rem] uppercase tracking-[0.14em] text-subtle">
                  {step.duration}
                </p>
              </div>
              <p className="max-w-2xl text-sm leading-relaxed text-muted text-pretty sm:text-base">
                {step.body}
              </p>
            </div>
          </Reveal>
        ))}
      </ol>

      <Reveal delay={120}>
        <div className="mt-12">
          <TextLink href="/process">The full engagement model</TextLink>
        </div>
      </Reveal>
    </Section>
  );
}
