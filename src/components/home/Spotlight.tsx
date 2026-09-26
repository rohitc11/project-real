import { ButtonLink } from "@/components/ui/ButtonLink";
import { Photo } from "@/components/ui/Photo";
import { photos } from "@/lib/photos";

export function Spotlight() {
  return (
    <section className="pb-28 md:pb-44">
      <div className="shell grid gap-12 md:grid-cols-12 md:items-end">
        <Photo
          photo={photos.valentyn}
          sizes="(min-width: 768px) 50vw, 100vw"
          className="reveal aspect-4/5 md:col-span-6"
        />
        <div className="reveal md:col-span-5 md:col-start-8 md:pb-4">
          <p className="caps text-glass">Our specialty</p>
          <h2 className="display mt-6 text-[clamp(2.75rem,5.5vw,5.5rem)]">Property, marketed to sell.</h2>
          <p className="mt-6 text-lg text-steel">Launches · Listings · Developments</p>
          <ButtonLink href="/services#real-estate" variant="quiet" className="mt-10">
            See real estate
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
