import Link from "next/link";

import { Photo } from "@/components/ui/Photo";
import { SERVICES } from "@/config/services";

// Services as a skyline: tall panels of different heights on one ground line.
const HEIGHTS = ["78%", "92%", "66%", "100%", "84%"];

export function Skyline() {
  return (
    <section className="pb-28 md:pb-44">
      <div className="shell">
        <div className="reveal flex items-end justify-between border-b border-haze pb-5 md:border-0">
          <h2 className="caps text-steel">What we do</h2>
          <p className="caps text-steel">{String(SERVICES.length).padStart(2, "0")}</p>
        </div>

        <ul className="-mx-4 mt-8 flex snap-x snap-mandatory scroll-px-4 gap-3 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:-mx-8 sm:scroll-px-8 sm:px-8 md:mx-0 md:mt-10 md:h-[clamp(30rem,46vw,44rem)] md:snap-none md:items-end md:overflow-visible md:px-0 md:pb-0">
          {SERVICES.map((service, i) => (
            <li
              key={service.slug}
              className="rise w-[72vw] max-w-80 shrink-0 snap-start md:h-(--h) md:w-auto md:max-w-none md:flex-1"
              style={{ "--h": HEIGHTS[i % HEIGHTS.length], "--rise-start": `${i * 7}%` } as React.CSSProperties}
            >
              <Link
                href={`/services#${service.slug}`}
                className="group relative block h-[27rem] overflow-hidden transition-transform duration-700 ease-(--ease-soft) hover:-translate-y-4 md:h-full"
              >
                <Photo
                  photo={service.tallPhoto ?? service.photo}
                  decorative
                  sizes="(min-width: 768px) 20vw, 72vw"
                  cover
                  imgClassName="transition-[scale] duration-1000 ease-(--ease-soft) group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-ink/75 via-ink/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-cloud md:p-6">
                  <p className="caps text-cloud/70">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-3 text-2xl tracking-[-0.02em]">{service.name}</h3>
                  <p className="mt-1.5 text-[0.95rem] text-cloud/80 transition-[opacity,translate] duration-500 ease-(--ease-soft) [@media(hover:hover)]:translate-y-2 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:translate-y-0 [@media(hover:hover)]:group-hover:opacity-100">
                    {service.line}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        {/* Ground line under the skyline. */}
        <div className="hidden h-px bg-haze md:block" />
      </div>
    </section>
  );
}
