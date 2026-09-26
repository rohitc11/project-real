import type { Metadata } from "next";

import { FinalCall } from "@/components/sections/FinalCall";
import { Photo } from "@/components/ui/Photo";
import { photos } from "@/lib/photos";

export const metadata: Metadata = {
  title: "About",
  description: "Real estate is our specialty. Every ambitious brand is welcome.",
};

const VALUES = ["Clear.", "Creative.", "Accountable."];

export default function AboutPage() {
  return (
    <>
      <section className="shell pt-40 pb-16 md:pt-52 md:pb-24">
        <p className="caps animate-fade-up text-glass">About</p>
        <h1 className="display mt-6 max-w-[13ch] animate-fade-up text-[clamp(3.25rem,8vw,8rem)] [animation-delay:150ms]">
          Marketing with a builder’s mindset.
        </h1>
        <p className="mt-8 max-w-[34ch] animate-fade-up text-lg text-steel [animation-delay:300ms] md:text-xl">
          Real estate is our specialty. Every ambitious brand is welcome.
        </p>
      </section>

      <div className="shell">
        <Photo
          photo={photos.pexels}
          sizes="(min-width: 1440px) 1344px, 100vw"
          position="center 40%"
          className="reveal aspect-4/3 md:aspect-21/9"
        />
      </div>

      <section className="shell py-24 md:py-40">
        <h2 className="caps reveal text-steel">What we stand for</h2>
        <ol className="mt-10 grid gap-10 border-t border-haze pt-10 md:grid-cols-3 md:gap-6">
          {VALUES.map((value, i) => (
            <li key={value} className="reveal">
              <span className="caps text-steel">{String(i + 1).padStart(2, "0")}</span>
              <p className="display mt-5 text-[clamp(2.75rem,4.5vw,4.5rem)]">{value}</p>
            </li>
          ))}
        </ol>
      </section>

      <FinalCall />
    </>
  );
}
