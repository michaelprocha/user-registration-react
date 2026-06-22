import Input from "../ui/Input";
import Button from "../ui/Button";
import { UserRoundSearch } from "lucide-react";
import Icon from "../ui/Icon";
import { type SetStateAction, type Dispatch } from "react";

type InputSearchProps = {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  onClick: () => void;
};

function InputSearch({ value, setValue, onClick, ...props }: InputSearchProps) {
  return (
    <div className="flex">
      <Input
        placeholder="BUSCAR USUARIO..."
        className="dark:text-white text-black font-grotesk"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button
        className="bg-black dark:bg-white p-2"
        onClick={onClick}
      >
        <Icon
          svg={UserRoundSearch}
          color="tertiary"
          size="md"
          {...props}
        />
      </Button>
    </div>
  );
}

export default InputSearch;
