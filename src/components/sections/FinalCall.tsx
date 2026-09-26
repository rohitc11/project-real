import { ButtonLink } from "@/components/ui/ButtonLink";
import { Photo } from "@/components/ui/Photo";
import { whatsappUrl } from "@/config/site";
import { photos } from "@/lib/photos";

// Headline in the open sky; the building below fades into the ink footer.
export function FinalCall() {
  return (
    <section className="relative isolate flex min-h-[92svh] overflow-hidden">
      <Photo
        photo={photos.scott}
        sizes="100vw"
        position="center 65%"
        cover
        className="-z-10"
      />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-linear-to-b from-transparent via-dusk/40 to-dusk" />

      <div className="shell reveal pt-28 md:pt-40">
        <h2 className="display text-[clamp(3.5rem,8.5vw,8.5rem)]">Ready to be seen?</h2>
        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink href="/contact">Start a project</ButtonLink>
          <ButtonLink href={whatsappUrl} variant="outline" className="bg-cloud/60 backdrop-blur-sm">
            WhatsApp us
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
