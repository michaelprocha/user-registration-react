import Button from "../ui/Button";
import Icon from "../ui/Icon";
import { Pencil, Trash2 } from "lucide-react";

function UsersList() {
  return (
    <table className="w-full flex flex-col ">
      <thead className="dark:bg-gray-700 bg-gray-300">
        <tr className="flex w-full items-center py-4 border-y-2 dark:border-y-white border-y-black font-grotesk">
          <th className="uppercase flex-2 dark:text-white text-black">ID</th>
          <th className="uppercase flex-4 text-left pl-2 dark:text-white text-black">
            Nome
          </th>
          <th className="uppercase flex-2 text-left dark:text-white text-black">
            Estado civil
          </th>
          <th className="uppercase flex-1 dark:text-white text-black">
            Filhos
          </th>
          <th className="uppercase flex-3 text-left pl-4 dark:text-white text-black">
            Data de nascimento
          </th>
          <th className="uppercase flex-3 text-left dark:text-white text-black">
            Número da sorte
          </th>
          <th className="uppercase flex-1 dark:text-white text-black">Ações</th>
        </tr>
      </thead>
      <tbody className="font-grotesk">
        <tr className="flex items-center py-4 border-b-2 dark:border-gray-500">
          <td className="flex-2 dark:text-white text-black text-center">
            asdf541
          </td>
          <td className="flex-4 dark:text-white text-black pl-2 capitalize">
            Carlos Alberto de Nobrega
          </td>
          <td className="flex-2 dark:text-white text-black">Solteiro</td>
          <td className="flex-1 dark:text-white text-black text-center uppercase">
            Não
          </td>
          <td className="flex-3 dark:text-white text-black pl-4">17/01/1998</td>
          <td className="flex-3 dark:text-white text-black text-left">07</td>
          <td className="flex-1 dark:text-white text-black flex gap-2 items-center">
            <Button className="border-2 dark:border-white dark:bg-black border-black bg-white p-1">
              <Icon
                svg={Pencil}
                color="primary"
              />
            </Button>
            <Button className="border-2 dark:border-white dark:bg-black border-black bg-white p-1">
              <Icon
                svg={Trash2}
                color="primary"
              />
            </Button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default UsersList;
