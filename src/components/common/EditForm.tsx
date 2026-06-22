import Text from "../ui/Text";
import Input from "../ui/Input";
import Button from "../ui/Button";
import type UserType from "../../types/user.type";
import { useState, type ChangeEvent, type SubmitEvent } from "react";
import { useNavigate } from "react-router";

interface editFormProps {
  editUser: UserType;
  sendUserEdited: (
    userEdited: Pick<
      UserType,
      "dataOfBirth" | "favoriteNumber" | "kids" | "maritalStatus" | "name"
    >,
  ) => void;
}

function EditForm({ editUser, sendUserEdited }: editFormProps) {
  const navigate = useNavigate();
  const [name, setName] = useState<string>(editUser.name);
  const [maritalStatus, setMaritalStatus] = useState<string>(
    editUser.maritalStatus,
  );
  const [favoriteNumber, setFavoriteNumber] = useState<number>(
    editUser.favoriteNumber,
  );
  const [dataOfBirth, setDataOfBirth] = useState<string>(editUser.dataOfBirth);
  const [kids, setKids] = useState<boolean>(editUser.kids);

  const handleChangeStatus = (event: ChangeEvent<HTMLInputElement>) => {
    setMaritalStatus(event.target.value);
  };

  const handleChangeKids = (event: ChangeEvent<HTMLInputElement>) => {
    setKids(event.target.value === "yes");
  };

  const handleCancelEdit = () => {
    navigate("/");
  };

  const handleEditUser = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendUserEdited({
      name,
      dataOfBirth,
      favoriteNumber,
      kids,
      maritalStatus,
    });
  };

  return (
    <form
      className="border-2 px-6 pt-8 pb-6 dark:border-white border-black relative flex-1 flex flex-col gap-6"
      onSubmit={(event) => handleEditUser(event)}
    >
      <div
        aria-hidden
        className="h-6 w-18 bg-yellow-300 border-2 dark:border-white border-black -rotate-3 absolute -top-3"
      />
      <div className="flex flex-col gap-3">
        <Text
          as={"label"}
          variant="lg"
          className="uppercase"
          htmlFor="name"
        >
          Nome completo
        </Text>
        <Input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className="flex gap-4 w-full border-b-2 border-dashed dark:border-white border-black pb-8">
        <div className="flex-1 flex flex-col gap-3">
          <Text
            as={"label"}
            variant="lg"
            className="uppercase"
            htmlFor="dataOfBirth"
          >
            Data nascimento
          </Text>
          <Input
            type="date"
            id="dataOfBirth"
            value={dataOfBirth}
            onChange={(event) => setDataOfBirth(event.target.value)}
          />
        </div>
        <div className="flex-1 flex flex-col gap-3">
          <Text
            as={"label"}
            variant="lg"
            className="uppercase"
            htmlFor="favoriteNumber"
          >
            Número da sorte
          </Text>
          <Input
            type="number"
            id="favoriteNumber"
            value={favoriteNumber}
            onChange={(event) => setFavoriteNumber(Number(event.target.value))}
          />
        </div>
      </div>
      <div className=" pb-10 flex border-b-2 border-black dark:border-white">
        <div className="flex flex-col flex-1">
          <Text
            as="p"
            variant="lg"
            className="uppercase"
          >
            Estado civil
          </Text>
          <div className="flex flex-row-reverse items-center gap-2 justify-end">
            <Text
              as="label"
              variant="lg"
              className="uppercase"
              htmlFor="casado"
            >
              Casado
            </Text>
            <Input
              type="radio"
              name="estado"
              id="casado"
              value={"Casado"}
              className="border-none p-0"
              checked={maritalStatus === "Casado"}
              onChange={(event) => handleChangeStatus(event)}
            />
          </div>
          <div className="flex flex-row-reverse items-center gap-2 justify-end">
            <Text
              as="label"
              variant="lg"
              className="uppercase"
              htmlFor="solteiro"
            >
              Solteiro
            </Text>
            <Input
              type="radio"
              name="estado"
              id="solteiro"
              value={"Solteiro"}
              className="border-none p-0"
              checked={maritalStatus === "Solteiro"}
              onChange={(event) => handleChangeStatus(event)}
            />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <Text
            as="p"
            variant="lg"
            className="uppercase"
          >
            Tem filhos
          </Text>
          <div className="flex flex-row-reverse items-center gap-2 justify-end">
            <Text
              as="label"
              variant="lg"
              className="uppercase"
              htmlFor="yes"
            >
              Sim
            </Text>
            <Input
              type="radio"
              name="kids"
              id="yes"
              value={"yes"}
              checked={kids}
              className="border-none p-0"
              onChange={(event) => handleChangeKids(event)}
            />
          </div>
          <div className="flex flex-row-reverse items-center gap-2 justify-end">
            <Text
              as="label"
              variant="lg"
              className="uppercase"
              htmlFor="no"
            >
              Não
            </Text>
            <Input
              type="radio"
              name="kids"
              id="no"
              value={"no"}
              checked={kids}
              className="border-none p-0"
              onChange={(event) => handleChangeKids(event)}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end items-end gap-4">
        <Button
          className="py-3 px-6 dark:bg-black bg-white border-2 dark:border-white border-black"
          onClick={handleCancelEdit}
          type="button"
        >
          <Text
            className="uppercase font-bold font-grotesk dark:text-white text-black"
            variant="md"
          >
            Descartar
          </Text>
        </Button>
        <Button
          className="py-3 px-6 bg-yellow-300 border-2 dark:border-white border-black"
          type="submit"
        >
          <Text
            className="uppercase font-bold font-grotesk"
            variant="md"
          >
            Salvar dados
          </Text>
        </Button>
      </div>
    </form>
  );
}

export default EditForm;
