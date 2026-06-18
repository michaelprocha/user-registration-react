import Input from "../components/ui/Input";
import Text from "../components/ui/Text";
import Button from "../components/ui/Button";
import { useSearchParams } from "react-router";
import useEditUser from "../hooks/useEditUser";
import { useEffect, useState } from "react";

function EditUser() {
  const [searchParams] = useSearchParams();
  const { editUser } = useEditUser(searchParams.get("user"));
  const [name, setName] = useState<string>(`${editUser.name}`);
  // const [maritalStatus, setMaritalStatus] = useState<string>(
  //   editUser.maritalStatus,
  // );
  // const [favoriteNumber, setFavoriteNumber] = useState<number>(
  //   editUser.favoriteNumber,
  // );
  // const [dataOfBirth, setDataOfBirth] = useState<string>(editUser.dataOfBirth);
  // const [kids, setKids] = useState<boolean>(editUser.kids);
  console.log(name);
  console.log(editUser.name);

  return (
    <>
      <div className="py-18 flex gap-16 max-w-6xl mx-auto">
        <div className="flex flex-col gap-8">
          <Text
            as="h1"
            variant="xl"
            className="uppercase flex flex-col"
          >
            Editar
            <Text
              as="span"
              variant="xl"
              className="text-red-700 dark:text-red-300 bg-black dark:bg-white p-2 uppercase w-fit -rotate-2"
            >
              usuário
            </Text>
          </Text>
          <Text
            as="p"
            variant="base"
            className="border-l-4 border-red-700 pl-3 max-w-80"
          >
            Modifique as credenciais e dados pessoais. A forma segue a função.
          </Text>
        </div>
        <form className="border-2 px-6 pt-8 pb-6 dark:border-white border-black relative flex-1 flex flex-col gap-6">
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
                // value={dataOfBirth}
                // onChange={(event) => setDataOfBirth(event.target.value)}
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
                // value={favoriteNumber}
                // onChange={(event) => setName(event.target.value)}
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
                  value={"casado"}
                  className="border-none p-0"
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
                  value={"solteiro"}
                  className="border-none p-0"
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
                  sim
                </Text>
                <Input
                  type="radio"
                  name="estado"
                  id="yes"
                  value={"yes"}
                  className="border-none p-0"
                />
              </div>
              <div className="flex flex-row-reverse items-center gap-2 justify-end">
                <Text
                  as="label"
                  variant="lg"
                  className="uppercase"
                  htmlFor="no"
                >
                  não
                </Text>
                <Input
                  type="radio"
                  name="estado"
                  id="no"
                  value={"no"}
                  className="border-none p-0"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end items-end gap-4">
            <Button className="py-3 px-6 dark:bg-black bg-white border-2 dark:border-white border-black">
              <Text
                className="uppercase font-bold font-grotesk dark:text-white text-black"
                variant="md"
              >
                Descartar
              </Text>
            </Button>
            <Button className="py-3 px-6 bg-yellow-300 border-2 dark:border-white border-black">
              <Text
                className="uppercase font-bold font-grotesk"
                variant="md"
              >
                Salvar dados
              </Text>
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default EditUser;
