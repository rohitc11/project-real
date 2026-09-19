import { Container } from "@/components/ui/Container";
import { Button, ArrowRight } from "@/components/ui/Button";
import { SheetStrip } from "@/components/ui/SheetStrip";

export default function NotFound() {
  return (
    <section className="survey-grid relative overflow-hidden pt-16 lg:pt-[4.5rem]">
      <SheetStrip
        fields={[
          { label: "Sheet", value: "—" },
          { label: "Status", value: "Not issued" },
          { label: "Error", value: "404" },
        ]}
      />

      <Container className="relative flex min-h-[58svh] flex-col justify-center py-20">
        <p className="type-note text-accent-deep">Sheet not found</p>
        <h1 className="type-display mt-6 max-w-[14ch] text-[clamp(2.5rem,7vw,5rem)]">
          That drawing was never <span className="text-accent">issued</span>.
        </h1>
        <p className="mt-7 max-w-[48ch] text-[0.9375rem] leading-relaxed text-muted">
          The link is broken or the page has moved. Everything else in the set is
          still where you left it.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Button href="/" size="lg">
            Back to sheet 01
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
