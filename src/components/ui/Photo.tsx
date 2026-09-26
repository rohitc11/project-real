import Image from "next/image";

import { cn } from "@/lib/cn";
import type { Photo as PhotoData } from "@/lib/photos";

type Props = {
  photo: PhotoData;
  sizes: string;
  className?: string;
  imgClassName?: string;
  /** CSS object-position, e.g. "center 30%". */
  position?: string;
  preload?: boolean;
  /** Hide from screen readers when nearby text already says what it shows. */
  decorative?: boolean;
  /** Fill the nearest positioned ancestor instead of sizing itself. */
  cover?: boolean;
};

// Crisp, full-cover photo — no rounding, no shadow.
export function Photo({
  photo,
  sizes,
  className,
  imgClassName,
  position,
  preload,
  decorative,
  cover,
}: Props) {
  return (
    <div className={cn(cover ? "absolute inset-0" : "relative", "overflow-hidden bg-haze", className)}>
      <Image
        src={photo.src}
        alt={decorative ? "" : photo.alt}
        fill
        sizes={sizes}
        placeholder="blur"
        preload={preload}
        className={cn("object-cover", imgClassName)}
        style={position ? { objectPosition: position } : undefined}
      />
    </div>
  );
}
