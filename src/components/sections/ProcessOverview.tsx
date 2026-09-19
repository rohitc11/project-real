import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { NoteLink } from "@/components/ui/Button";
import { PROCESS } from "@/config/content";

/**
 * The engagement model drawn as a construction programme. Each stage gets a
 * bar whose offset and length correspond to when it runs, so the overlap
 * between building and scaling is visible rather than asserted.
 */
const BARS = [
  { start: 0, span: 22 },
  { start: 14, span: 20 },
  { start: 28, span: 34 },
  { start: 56, span: 44 },
  { start: 70, span: 30 },
];

export function ProcessOverview() {
  return (
    <Section
      id="process"
      sheet="C-00"
      eyebrow="Programme"
      heading={
        <>
          Fix the funnel, <span className="text-accent">then</span> buy traffic
        </>
      }
      intro="Spending more on media before the funnel holds water is the most expensive mistake in property marketing. The first month is spent making sure it does."
    >
      <div className="border-t border-ink">
        <div className="type-note grid grid-cols-[2.5rem_1fr] gap-4 border-b border-line py-2.5 text-muted sm:grid-cols-[3.5rem_11rem_1fr]">
          <span>Stage</span>
          <span className="hidden sm:block">Duration</span>
          <span>Scope</span>
        </div>

        <ol>
          {PROCESS.map((step, index) => (
            <Reveal as="li" key={step.index} delay={index * 50}>
              <div className="grid grid-cols-[2.5rem_1fr] gap-x-4 gap-y-4 border-b border-line-soft py-6 sm:grid-cols-[3.5rem_11rem_1fr] sm:py-7">
                <span className="type-data text-[0.8125rem] font-semibold text-accent-deep">
                  {step.index}
                </span>

                <div>
                  <h3 className="type-title text-lg text-ink">{step.title}</h3>
                  <p className="type-note mt-1.5 text-muted">{step.duration}</p>
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <p className="max-w-[58ch] text-sm leading-relaxed text-muted text-pretty">
                    {step.body}
                  </p>
                  {/* Programme bar — position and length carry the schedule. */}
                  <div
                    className="mt-4 h-1.5 w-full bg-line-soft"
                    role="img"
                    aria-label={`${step.title} runs during ${step.duration}`}
                  >
                    <div
                      className="h-full bg-accent"
                      style={{
                        marginLeft: `${BARS[index]?.start ?? 0}%`,
                        width: `${BARS[index]?.span ?? 100}%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>

      <Reveal delay={100}>
        <div className="mt-10">
          <NoteLink href="/process">The full engagement model</NoteLink>
        </div>
      </Reveal>
    </Section>
  );
}
