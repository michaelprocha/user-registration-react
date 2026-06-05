import { tv } from "tailwind-variants";
import Icon from "../components/ui/Icon";
import Input from "../components/ui/Input";
import Text from "../components/ui/Text";
import { SquareUserRound } from "lucide-react";

const registerVariant = tv({
  slots: {
    label: "dark:text-white text-black uppercase",
    divLabel: "flex flex-col gap-2",
    divForm: "flex gap-8 items-center",
  },
});

function Register() {
  const { label, divLabel, divForm } = registerVariant();
  return (
    <>
      <div className="flex items-center justify-between border-b-2 dark:border-white border-black pb-2 pt-18">
        <Text
          variant="xl"
          className="uppercase"
        >
          Novo registro
        </Text>
        <Icon
          svg={SquareUserRound}
          size="xl"
          color="quaternary"
          className="rounded-xl"
        />
      </div>
      <form className="pt-12 pb-24">
        <div className={divForm()}>
          <div>
            <div className={divLabel()}>
              <Text
                as="label"
                htmlFor="name-completo"
                className={label()}
                variant="lg"
              >
                Nome completo
              </Text>
              <Input
                type="text"
                id="name-completo"
              />
            </div>
            <div className={divLabel()}>
              <Text
                as="label"
                htmlFor="data-de-nascimento"
                className={label()}
                variant="lg"
              >
                Data de nascimento
              </Text>
              <Input
                type="date"
                id="data-de-nascimento"
              />
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Register;
