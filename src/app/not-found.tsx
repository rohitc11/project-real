import { ButtonLink } from "@/components/ui/ButtonLink";

export default function NotFound() {
  return (
    <section className="shell flex min-h-svh flex-col justify-center pt-24 pb-16">
      <p className="caps text-accent-text">404</p>
      <h1 className="display mt-6 max-w-[12ch] text-[clamp(3.25rem,8vw,8rem)]">
        This page isn’t built yet.
      </h1>
      <ButtonLink href="/" className="mt-10 self-start">
        Back home
      </ButtonLink>
    </section>
  );
}
