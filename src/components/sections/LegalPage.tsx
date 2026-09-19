import { Container } from "@/components/ui/Container";
import { PageHero } from "./PageHero";

/**
 * Shared shell for privacy and terms. The prose styling is scoped here rather
 * than pulled in from a typography plugin — two pages do not justify the
 * dependency.
 */
export function LegalPage({
  sheet,
  title,
  updated,
  children,
}: {
  sheet: string;
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHero
        sheet={sheet}
        eyebrow="Legal"
        title={title}
        intro={`Last updated ${updated}.`}
      />

      <Container size="narrow" className="border-t border-line pb-24 pt-14 sm:pb-28">
        <div
          className="
            [&_h2]:type-title [&_h2]:mt-12 [&_h2]:border-t [&_h2]:border-line
            [&_h2]:pt-6 [&_h2]:text-xl [&_h2]:text-ink
            [&_h2:first-child]:mt-0 [&_h2:first-child]:border-t-0 [&_h2:first-child]:pt-0
            [&_p]:mt-4 [&_p]:text-sm [&_p]:leading-relaxed [&_p]:text-muted [&_p]:text-pretty
            sm:[&_p]:text-[0.9375rem]
            [&_a]:text-accent-deep [&_a]:underline [&_a]:underline-offset-4
            [&_li]:mt-2 [&_li]:text-sm [&_li]:text-muted
            [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-5
          "
        >
          {children}
        </div>

        <p className="type-note mt-16 border border-line bg-paper p-5 leading-relaxed text-muted">
          This page is a starting template. Have it reviewed by a qualified lawyer in
          your jurisdiction before launch.
        </p>
      </Container>
    </>
  );
}
