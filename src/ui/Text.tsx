import { type ComponentPropsWithoutRef, type ElementType } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const textVariant = tv({
  base: "",
  variants: {
    variant: {
      xl: "font-extrabold font-grotesk text-7xl text-black",
      lg: "font-extrabold font-grotesk text-lg text-black",
      md: "font-inter font-normal text-xl text-gray-300",
      base: "font-inter font-normal text-base text-black",
      sm: "font-grotesk font-bold text-sm text-gray-500",
    },
  },
  defaultVariants: {
    variant: "base",
  },
});

type TextProps<T extends ElementType> = Omit<
  ComponentPropsWithoutRef<T>,
  keyof VariantProps<typeof textVariant>
>
  & VariantProps<typeof textVariant> & {
    as?: T;
  };

function Text<T extends ElementType = "span">({
  as,
  children,
  variant,
  className,
  ...props
}: TextProps<T>) {
  const TextComponent = as || "span";
  return (
    <TextComponent
      className={textVariant({ variant, className })}
      {...props}
    >
      {children}
    </TextComponent>
  );
}

export default Text;
