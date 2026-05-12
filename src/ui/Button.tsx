import { type ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const buttonVariant = tv({
  base: "cursor-pointer",
});

type ButtonProps = Omit<
  ComponentProps<"button">,
  keyof VariantProps<typeof buttonVariant>
>
  & VariantProps<typeof buttonVariant>;

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={buttonVariant({ className })}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
