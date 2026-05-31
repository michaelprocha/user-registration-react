import Button from "../ui/Button";
import Icon from "../ui/Icon";
import { Pencil, Trash2 } from "lucide-react";

function UsersList() {
  return (
    <table className="w-full grid ">
      <thead className="dark:bg-gray-700 bg-gray-300">
        <tr className="grid justify-between w-full border-y-2 dark:border-y-white border-y-black font-grotesk">
          <th className="uppercase py-4 px-6 dark:text-white text-black">ID</th>
          <th className="uppercase p-4 dark:text-white text-black">Nome</th>
          <th className="uppercase p-4 dark:text-white text-black">
            Estado civil
          </th>
          <th className="uppercase p-4 dark:text-white text-black">Filhos</th>
          <th className="uppercase p-4 dark:text-white text-black">
            Data de nascimento
          </th>
          <th className="uppercase p-4 dark:text-white text-black">
            Número da sorte
          </th>
          <th className="uppercase py-4 px-6 dark:text-white text-black">
            Ações
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="flex justify-between pl-4 pr-4 border-b-2 dark:border-gray-500">
          <td className="p-4 flex-1">asdf541</td>
          <td className="p-4 flex-2">Carlos</td>
          <td className="p-4 flex-1">Solteiro</td>
          <td className="p-4 flex-1">Não</td>
          <td className="p-4 flex-1">17/01/1998</td>
          <td className="p-4 flex-1">07</td>
          <td className="p-4">
            <Button>
              <Icon svg={Pencil} />
            </Button>
            <Button>
              <Icon svg={Trash2} />
            </Button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default UsersList;
