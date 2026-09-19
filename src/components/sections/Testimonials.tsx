import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { TESTIMONIALS } from "@/config/content";

export function Testimonials() {
  return (
    <Section eyebrow="In their words" heading="What partners say">
      <div className="grid gap-5 lg:grid-cols-3">
        {TESTIMONIALS.map((testimonial, index) => (
          <Reveal as="article" key={testimonial.name + testimonial.company} delay={index * 90}>
            <figure className="flex h-full flex-col justify-between rounded-md border border-line-soft bg-surface p-7 sm:p-8">
              <blockquote className="font-display text-xl leading-[1.35] text-fg text-pretty">
                <span className="text-accent">&ldquo;</span>
                {testimonial.quote}
                <span className="text-accent">&rdquo;</span>
              </blockquote>
              <figcaption className="mt-8 border-t border-line-soft pt-5">
                <span className="block text-sm text-fg">{testimonial.name}</span>
                <span className="mt-1 block text-xs text-subtle">
                  {testimonial.role}, {testimonial.company}
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
