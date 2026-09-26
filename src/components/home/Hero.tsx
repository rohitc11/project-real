import { getImageProps } from "next/image";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { SITE } from "@/config/site";
import { photos } from "@/lib/photos";

// Full-screen photo with the headline sitting in its open sky.
// Desktop uses the landscape glass facade, phones the portrait white building.
export function Hero() {
  const common = { alt: "", sizes: "100vw" };
  const {
    props: { srcSet: desktop },
  } = getImageProps({ ...common, src: photos.kenrick.src });
  const {
    props: { srcSet: mobile, ...img },
  } = getImageProps({ ...common, src: photos.joel.src, loading: "eager", fetchPriority: "high" });

  const words = SITE.tagline.split(" ");

  return (
    <section className="relative isolate h-svh min-h-[38rem] overflow-hidden">
      <div className="drift absolute inset-0 -z-10 bg-haze">
        <picture>
          <source media="(min-width: 768px)" srcSet={desktop} />
          <source srcSet={mobile} />
          {/* Phones: the photo sits in the lower part and its sky fades into the
              matching Haze above, leaving clean sky for the text. */}
          <img
            {...img}
            alt=""
            className="absolute inset-x-0 bottom-0 h-[70%] w-full animate-settle object-cover object-bottom [mask-image:linear-gradient(to_bottom,transparent,#000_22%)] md:inset-0 md:h-full md:object-[center_30%] md:[mask-image:none]"
          />
        </picture>
      </div>

      <div className="shell flex h-full flex-col justify-start pt-32 md:justify-center md:pt-0 md:pb-[14vh]">
        <h1 className="display max-w-[8ch] text-[clamp(4rem,9.5vw,9.5rem)]">
          {words.map((word, i) => (
            <span key={i}>
              <span className="hero-word inline-block overflow-hidden pb-[0.1em] align-bottom -mb-[0.1em]">
                <span style={{ "--i": i } as React.CSSProperties}>{word}</span>
              </span>{" "}
            </span>
          ))}
        </h1>
        <p className="mt-6 animate-fade-up text-lg text-ink/75 [animation-delay:700ms] md:text-xl">
          {SITE.description}
        </p>
        <div className="mt-9 animate-fade-up [animation-delay:850ms]">
          <ButtonLink href="/contact">Start a project</ButtonLink>
        </div>
      </div>
    </section>
  );
}
