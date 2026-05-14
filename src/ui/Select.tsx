import type { ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import Icon from "./Icon";
import { ChevronDown } from "lucide-react";

const selectVariant = tv({
  slots: {
    label: `flex`,
    select: `
    border-b-2 border-black dark:border-white text-black dark:text-white text-xl 
    uppercase font-bold cursor-pointer py-2 flex-1
    `,
  },
});

interface Option {
  value: string;
}

type SelectProps = Omit<
  ComponentProps<"select">,
  keyof VariantProps<typeof selectVariant>
>
  & VariantProps<typeof selectVariant> & {
    options: Option[];
  };

function Select({ options }: SelectProps) {
  const { label, select } = selectVariant();
  return (
    <label className={label()}>
      <select
        className={select()}
        required
      >
        <option
          value=""
          disabled
          selected
        >
          Selecione uma opção{" "}
          <Icon
            size="lg"
            svg={ChevronDown}
          />
        </option>
        {options
          && options.map((opt) => (
            <option value={opt.value}>{opt.value}</option>
          ))}
      </select>
    </label>
  );
}

export default Select;
