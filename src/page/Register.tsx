import { tv } from "tailwind-variants";
import Icon from "../components/ui/Icon";
import Input from "../components/ui/Input";
import Text from "../components/ui/Text";
import { SquareUserRound, ArrowRight } from "lucide-react";
import Select from "../components/ui/Select";
import Button from "../components/ui/Button";
import useRegister from "../hooks/useRegister";
import { useState, type ChangeEvent, type SubmitEvent } from "react";

const registerVariant = tv({
  slots: {
    label: "dark:text-white text-black uppercase",
    radio: "flex gap-2",
    divLabel: "flex flex-col gap-2",
    divBlockForm: "flex-1 flex flex-col gap-14 max-w-140",
    divForm:
      "flex items-start justify-center gap-22 border-b-2 dark:border-white border-black pb-16 mb-4",
  },
});

function Register() {
  const [name, setName] = useState("");
  const [maritalStatus, setMaritalStatus] = useState<string>("");
  const [favoriteNumber, setFavoriteNumber] = useState<number>(0);
  const [dataOfBirth, setDataOfBirth] = useState<string>("");
  const [kids, setKids] = useState<boolean>(false);
  const { registerNewUser } = useRegister();
  const { label, radio, divLabel, divBlockForm, divForm } = registerVariant();

  const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    setMaritalStatus(event.target.value);
  };

  const handleRadio = (event: ChangeEvent<HTMLInputElement>) => {
    setKids(event.target.value === "yes");
  };

  const handleRegisterNewUser = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newUser = {
      name,
      maritalStatus,
      favoriteNumber,
      dataOfBirth,
      kids,
    };
    console.log(newUser);
    registerNewUser(newUser);
  };

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
      <form
        className="pt-12 pb-24"
        onSubmit={(event) => handleRegisterNewUser(event)}
      >
        <div className={divForm()}>
          <div className={divBlockForm()}>
            <div className={divLabel()}>
              <Text
                as="label"
                htmlFor="name"
                className={label()}
                variant="lg"
              >
                Nome completo
              </Text>
              <Input
                type="text"
                id="name"
                onChange={(event) => setName(event.target.value)}
                value={name}
              />
            </div>
            <div className={divLabel()}>
              <Text
                as="label"
                htmlFor="dataOfBirth"
                className={label()}
                variant="lg"
              >
                Data de nascimento
              </Text>
              <Input
                type="date"
                id="dataOfBirth"
                onChange={(event) => setDataOfBirth(event.target.value)}
                value={dataOfBirth}
              />
            </div>
          </div>
          <div className={divBlockForm()}>
            <div className={divLabel()}>
              <Text
                as="label"
                htmlFor="maritalStatus"
                className={label()}
                variant="lg"
              >
                Estado civil
              </Text>
              <Select
                options={[{ value: "Casado" }, { value: "Solteiro" }]}
                id="maritalStatus"
                value={maritalStatus}
                onChange={(event) => handleSelect(event)}
              />
            </div>
            <div className={divLabel()}>
              <Text
                as="label"
                htmlFor="favoriteNumber"
                className={label()}
                variant="lg"
              >
                Número da sorte
              </Text>
              <Input
                type="number"
                id="favoriteNumber"
                onChange={(event) =>
                  setFavoriteNumber(Number(event.target.value))
                }
                value={favoriteNumber}
              />
            </div>
            <div className="flex flex-col gap-4">
              <Text
                as="p"
                variant="lg"
                className={label()}
              >
                Tem filhos
              </Text>
              <div className="flex gap-4">
                <div className={radio()}>
                  <Text
                    as="label"
                    htmlFor="yes"
                    className={label()}
                    variant="lg"
                  >
                    Sim
                  </Text>
                  <Input
                    type="radio"
                    name="kids"
                    value={"yes"}
                    checked={kids}
                    onChange={(event) => handleRadio(event)}
                    id="yes"
                    className="border-none p-0"
                  />
                </div>
                <div className={radio()}>
                  <Text
                    as="label"
                    htmlFor="no"
                    className={label()}
                    variant="lg"
                  >
                    Não
                  </Text>
                  <Input
                    type="radio"
                    name="kids"
                    value={"no"}
                    checked={!kids}
                    onChange={(event) => handleRadio(event)}
                    id="no"
                    className="border-none p-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Button
          className="flex gap-2 bg-yellow-300 border-2 border-black py-6 px-12 items-center ml-auto"
          type="submit"
        >
          <Text
            variant="md"
            className="uppercase font-bold text-black"
          >
            Confirmar registro
          </Text>
          <Icon
            svg={ArrowRight}
            color="dark"
          />
        </Button>
      </form>
    </>
  );
}

export default Register;
