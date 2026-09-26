import { SITE } from "@/config/site";
import { cn } from "@/lib/cn";

// First word set solid, the rest light — follows whatever SITE.name is.
export function Wordmark({ className }: { className?: string }) {
  const [first, ...rest] = SITE.name.split(" ");
  return (
    <span className={cn("tracking-[-0.02em] whitespace-nowrap", className)}>
      <span className="font-semibold">{first}</span>
      {rest.length > 0 && <span className="font-light"> {rest.join(" ")}</span>}
    </span>
  );
}
