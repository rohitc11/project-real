import { cn } from "@/lib/cn";

export type DimensionRow = {
  caption: string;
  value: string;
  /** 0–1. Sets the drawn length, so a 96% reduction looks like one. */
  fraction?: number;
  /** Draws this row in the accent colour — the "after" state. */
  emphasis?: boolean;
};

/**
 * The signature device of this design direction.
 *
 * Any before/after claim is drawn to scale with tick marks and a unit, so the
 * size of the improvement is visible before the number is read. Using it for
 * anything that is not a measured comparison would be decoration.
 */
export function DimensionLine({
  rows,
  className,
}: {
  rows: DimensionRow[];
  className?: string;
}) {
  return (
    <div className={cn("flex max-w-2xl flex-col gap-4", className)}>
      {rows.map((row) => (
        <div
          key={row.caption}
          className={cn(
            "flex items-center gap-0",
            row.emphasis ? "text-accent" : "text-muted",
          )}
        >
          <span className="type-note min-w-[8.5rem] shrink-0 pr-4">{row.caption}</span>

          <span className="flex flex-1 items-center">
            <span
              className="dim-line"
              style={{ flex: `0 0 ${(row.fraction ?? 1) * 100}%` }}
            />
          </span>

          <span
            className={cn(
              "type-data shrink-0 pl-4 text-[0.8125rem] font-semibold",
              row.emphasis ? "text-accent-deep" : "text-ink",
            )}
          >
            {row.value}
          </span>
        </div>
      ))}
    </div>
  );
}
