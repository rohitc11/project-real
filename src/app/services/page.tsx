import type { Metadata } from "next";

import { FinalCall } from "@/components/sections/FinalCall";
import { Photo } from "@/components/ui/Photo";
import { SERVICES } from "@/config/services";
import { cn } from "@/lib/cn";
import { photos } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Services",
  description: "Real estate, social media, SEO, branding and paid ads.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative isolate h-[78svh] min-h-[32rem] overflow-hidden">
        <div className="drift absolute inset-0 -z-10">
          <Photo
            photo={photos.jason}
            sizes="100vw"
            preload
            // The left third of this photo is open sky — keep the title there.
            position="0% 70%"
            className="size-full"
            imgClassName="animate-settle"
          />
        </div>
        <div className="shell pt-32 md:pt-40">
          <p className="caps animate-fade-up text-ink/70">Services</p>
          <h1 className="display mt-6 max-w-[6ch] animate-fade-up text-[clamp(3.5rem,8vw,7.5rem)] [animation-delay:150ms]">
            What we do.
          </h1>
        </div>
      </section>

      <section className="shell flex flex-col gap-24 py-24 md:gap-40 md:py-40">
        {SERVICES.map((service, i) => {
          const flip = i % 2 === 1;
          return (
            <article
              key={service.slug}
              id={service.slug}
              className="grid scroll-mt-28 gap-8 md:grid-cols-12 md:items-center md:gap-y-0"
            >
              <Photo
                photo={service.photo}
                sizes="(min-width: 768px) 58vw, 100vw"
                className={cn(
                  "reveal aspect-4/3 md:col-span-7 md:row-start-1",
                  flip ? "md:col-start-6" : "md:col-start-1",
                )}
              />
              <div
                className={cn(
                  "reveal md:col-span-4 md:row-start-1",
                  flip ? "md:col-start-1" : "md:col-start-9",
                )}
              >
                <p className="caps text-steel">{String(i + 1).padStart(2, "0")}</p>
                <h2 className="display mt-4 text-[clamp(2.5rem,4.5vw,4.25rem)]">{service.name}</h2>
                <p className="mt-5 text-lg text-steel">{service.promise}</p>
                <ul className="mt-8 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <li key={tag} className="rounded-full border border-haze px-3.5 py-1.5 text-sm">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </section>

      <FinalCall />
    </>
  );
}
