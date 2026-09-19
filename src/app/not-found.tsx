import { Container } from "@/components/ui/Container";
import { Button, ArrowRight } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="grain relative flex min-h-[70svh] items-center overflow-hidden py-32">
      <div className="aura" aria-hidden="true" />
      <Container className="relative text-center">
        <p className="eyebrow justify-center">Error 404</p>
        <h1 className="mx-auto mt-6 max-w-[16ch] font-display text-[clamp(2.5rem,7vw,5rem)] leading-[1] text-balance">
          That page has been <span className="italic text-accent">sold</span>
        </h1>
        <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-muted">
          The link is broken or the page has moved. Everything else is still where you
          left it.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Button href="/" size="lg">
            Back to home
            <ArrowRight />
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            Talk to us
          </Button>
        </div>
      </Container>
    </section>
  );
}
