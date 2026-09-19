import { Container } from "@/components/ui/Container";
import { PageHero } from "./PageHero";

/**
 * Shared shell for privacy and terms. The prose styling is scoped here rather
 * than pulled in from a typography plugin — two pages do not justify the
 * dependency.
 */
export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} intro={`Last updated ${updated}.`} />

      <Container size="narrow" className="pb-24 sm:pb-32">
        <div
          className="
            [&_h2]:mt-12 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:leading-tight [&_h2]:text-fg
            [&_h2:first-child]:mt-0
            [&_p]:mt-4 [&_p]:text-sm [&_p]:leading-relaxed [&_p]:text-muted
            [&_p]:text-pretty sm:[&_p]:text-base
            [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-4
            hover:[&_a]:text-accent-hi
            [&_li]:mt-2 [&_li]:text-sm [&_li]:text-muted
            [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-5
          "
        >
          {children}
        </div>

        <p className="mt-16 rounded-sm border border-line-soft bg-surface p-5 text-xs leading-relaxed text-subtle">
          This page is a starting template. Have it reviewed by a qualified lawyer in your
          jurisdiction before launch.
        </p>
      </Container>
    </>
  );
}
