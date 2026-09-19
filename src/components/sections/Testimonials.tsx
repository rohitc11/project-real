import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { TESTIMONIALS } from "@/config/content";

/** Quotes presented as site notes — marked up, attributed, dated by role. */
export function Testimonials() {
  return (
    <Section sheet="E-00" eyebrow="Site notes" heading="What partners say">
      <div className="grid gap-px border border-ink bg-line lg:grid-cols-3">
        {TESTIMONIALS.map((testimonial, index) => (
          <Reveal as="article" key={testimonial.name + testimonial.company} delay={index * 70}>
            <figure className="flex h-full flex-col justify-between gap-8 bg-ground p-6 sm:p-7">
              <blockquote className="border-l-2 border-accent pl-5 text-[0.9375rem] leading-relaxed text-ink text-pretty">
                {testimonial.quote}
              </blockquote>
              <figcaption className="type-note border-t border-line pt-4 text-muted">
                <span className="block text-ink">{testimonial.name}</span>
                <span className="mt-1.5 block">
                  {testimonial.role} — {testimonial.company}
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
