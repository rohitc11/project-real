import { LogoMark } from "@/components/brand/LogoMark";
import { Wordmark } from "@/components/brand/Wordmark";
import { cn } from "@/lib/cn";

type Props = { className?: string; keyClassName?: string };

// Key beside the name. Size it with font-size; the key scales with the text.
export function Logo({ className, keyClassName = "text-key" }: Props) {
  return (
    <span className={cn("inline-flex items-center gap-[0.5em]", className)}>
      <LogoMark className={keyClassName} />
      <Wordmark />
    </span>
  );
}
