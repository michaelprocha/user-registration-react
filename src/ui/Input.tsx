import type { ComponentProps, FC } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import Icon from "./Icon";

const inputVariant = tv({
  slots: {
    container:
      "flex gap-2 p-2 items-center focus-within:border-blue-500 cursor-text",
    input: "w-full outline-none bg-transparent",
  },
  variants: {
    variant: {
      primary: {
        container:
          "border-2 border-black bg-gray-300 dark:bg-gray-700 dark:border-white caret-black dark:caret-white",
      },
      secondary: {
        container:
          "border-b-2 border-black dark:border-white dark:bg-black caret-black dark:caret-white",
      },
    },
    size: {
      sm: { container: "h-10" },
      md: { container: "h-12" },
      lg: { container: "h-16.5" },
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "sm",
  },
});

type InputProps = Omit<
  ComponentProps<"input">,
  keyof VariantProps<typeof inputVariant>
>
  & VariantProps<typeof inputVariant> & {
    icon?: FC<ComponentProps<"svg">>;
    iconPosition?: "left" | "right";
    iconColor?: ComponentProps<typeof Icon>["color"];
  };

function Input({
  variant,
  size,
  className,
  icon,
  iconPosition = "left",
  iconColor,
  ...props
}: InputProps) {
  const { container, input } = inputVariant({ variant, size });
  const renderIcon = icon && (
    <Icon
      svg={icon}
      color={iconColor}
    />
  );
  return (
    <label className={container({ className })}>
      {iconPosition === "left" && renderIcon}
      <input
        className={input()}
        {...props}
      />
      {iconPosition === "right" && renderIcon}
    </label>
  );
}

export default Input;
