import type { ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const selectVariant = tv({
  slots: {
    label: `flex `,
    select: `
    border-b-2 border-black dark:border-white text-black dark:text-white text-xl 
    uppercase font-bold cursor-pointer py-2 flex-1
    `,
  },
});

interface Option {
  value: string;
  label?: string;
}

type SelectProps = Omit<
  ComponentProps<"select">,
  keyof VariantProps<typeof selectVariant>
>
  & VariantProps<typeof selectVariant> & {
    options: Option[];
  };

function Select({ options, className, ...props }: SelectProps) {
  const { label, select } = selectVariant();
  return (
    <label className={label()}>
      <select
        className={select({ className })}
        required
        defaultValue={""}
        {...props}
      >
        <option
          value=""
          disabled
        >
          Selecione uma opção
        </option>
        {options
          && options.map((opt, optIndex) => (
            <option
              key={`${optIndex}-${opt.value}`}
              value={opt.value}
            >
              {opt.label || opt.value}
            </option>
          ))}
      </select>
    </label>
  );
}

export default Select;
