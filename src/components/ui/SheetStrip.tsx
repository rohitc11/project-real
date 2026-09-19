import { Container } from "./Container";
import { cn } from "@/lib/cn";

export type SheetField = { label: string; value: string };

/**
 * The metadata bar that opens a drawing sheet. Used at the top of every page
 * so the site reads as a set rather than a stack of unrelated screens.
 */
export function SheetStrip({
  fields,
  className,
}: {
  fields: SheetField[];
  className?: string;
}) {
  return (
    <div className={cn("border-b border-line", className)}>
      <Container>
        <dl className="type-note flex flex-wrap gap-x-7 gap-y-1.5 py-3 text-muted">
          {fields.map((field) => (
            <div key={field.label} className="flex gap-2">
              <dt className="text-muted/70">{field.label}</dt>
              <dd className="text-ink">{field.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </div>
  );
}
