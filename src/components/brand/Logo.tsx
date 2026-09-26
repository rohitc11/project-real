import { LogoMark } from "@/components/brand/LogoMark";
import { Wordmark } from "@/components/brand/Wordmark";
import { cn } from "@/lib/cn";

// Key beside the name. Size it with font-size; the key scales with the text.
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-[0.5em]", className)}>
      <LogoMark />
      <Wordmark />
    </span>
  );
}
