import { Photo } from "@/components/ui/Photo";
import { photos } from "@/lib/photos";

const STEPS = ["Plan.", "Create.", "Grow."];

// Three words in the sky above the glass towers.
export function Process() {
  return (
    <section className="relative isolate h-svh min-h-[38rem] overflow-hidden">
      <Photo
        photo={photos.harry}
        sizes="100vw"
        position="center 28%"
        cover
        className="-z-10"
      />
      <div className="shell reveal pt-28 text-center md:pt-36">
        <h2 className="caps text-ink/70">How we work</h2>
        <p className="display mt-8 text-[clamp(3.75rem,10vw,10rem)]">
          {STEPS.map((step) => (
            <span key={step} className="block md:inline md:px-[0.18em]">
              {step}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
