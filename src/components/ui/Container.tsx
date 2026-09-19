import { cn } from "@/lib/cn";

type ContainerProps = React.ComponentProps<"div"> & {
  /** `wide` relaxes the max width for full-bleed editorial grids. */
  size?: "default" | "wide" | "narrow";
};

const sizes = {
  narrow: "max-w-3xl",
  default: "max-w-[76rem]",
  wide: "max-w-[90rem]",
} as const;

export function Container({ size = "default", className, ...props }: ContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full px-5 sm:px-8 lg:px-10", sizes[size], className)}
      {...props}
    />
  );
}
