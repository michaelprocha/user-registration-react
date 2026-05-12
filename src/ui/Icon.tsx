import type { ComponentProps, FC } from "react";
import { type LucideProps } from "lucide-react";
import { tv, type VariantProps } from "tailwind-variants";

const iconVariants = tv({
  base: "",
  variants: {
    color: {
      primary: "text-black dark:text-white",
      secondary: "text-red-300",
    },
    size: {
      sm: "size-4",
      md: "size-5",
      lg: "size-10",
    },
    animation: {
      none: "",
      spin: "animate-spin",
    },
  },
  defaultVariants: {
    color: "primary",
    size: "sm",
    animation: "none",
  },
});

type IconProps = Omit<
  ComponentProps<"svg">,
  keyof VariantProps<typeof iconVariants>
>
  & VariantProps<typeof iconVariants> & {
    svg: FC<LucideProps>;
  };

function Icon({
  svg: IconComponent,
  color,
  size,
  animation,
  className,
  ...props
}: IconProps) {
  return (
    <IconComponent
      className={iconVariants({ color, size, animation, className })}
      {...props}
    />
  );
}

export default Icon;
