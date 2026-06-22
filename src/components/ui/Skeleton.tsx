import type { ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const skeletonVariant = tv({
  base: "pointer-events-none animate-pulse",
});

type SkeletonProps = Omit<
  ComponentProps<"div">,
  keyof VariantProps<typeof skeletonVariant>
>
  & VariantProps<typeof skeletonVariant>;

function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={skeletonVariant({ className })}
      {...props}
    />
  );
}

export default Skeleton;
