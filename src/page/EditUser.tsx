import Text from "../components/ui/Text";
import { useSearchParams } from "react-router";
import useEditUser from "../hooks/useEditUser";
import EditForm from "../components/common/EditForm";

function EditUser() {
  const [searchParams] = useSearchParams();
  const { editUser } = useEditUser(searchParams.get("user"));

  if (!editUser.name) {
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
          <Text as={"p"}>Carregando formulario...</Text>
        </div>
      </>
    );
  }

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
        <EditForm editUser={editUser} />
      </div>
    </>
  );
}

export default EditUser;
