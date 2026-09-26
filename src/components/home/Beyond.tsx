import { INDUSTRIES } from "@/config/services";

export function Beyond() {
  return (
    <section className="overflow-hidden pb-28 md:pb-44">
      <div className="shell reveal">
        <p className="caps text-steel">Other industries</p>
        <h2 className="display mt-6 text-[clamp(2.75rem,7vw,6.5rem)]">Not just property.</h2>
      </div>

      <p className="sr-only">We also work with: {INDUSTRIES.join(", ")}.</p>
      <div aria-hidden="true" className="marquee mt-12 md:mt-16">
        <div className="marquee-track flex w-max">
          {[...INDUSTRIES, ...INDUSTRIES].map((industry, i) => (
            <span
              key={i}
              className="display flex items-center gap-[0.45em] pr-[0.45em] text-[clamp(2.25rem,5vw,4.5rem)] text-steel"
            >
              {industry}
              <span className="size-2 rounded-full bg-accent md:size-2.5" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
