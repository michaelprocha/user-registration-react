import { tv } from "tailwind-variants";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import { Pencil, Trash2 } from "lucide-react";
import type UserType from "../../types/user.type";
import useUser from "../../hooks/useUser";

const userVariant = tv({
  slots: {
    line: "flex items-center py-4 border-b-2 dark:border-gray-500",
    id: "flex-2 dark:text-white text-black text-center",
    name: "flex-4 dark:text-white text-black pl-2 capitalize",
    status: "flex-2 dark:text-white text-black",
    kids: "flex-1 dark:text-white text-black text-center uppercase",
    date: "flex-3 dark:text-white text-black pl-4",
    number: "flex-3 dark:text-white text-black text-left",
    actions: "flex-1 dark:text-white text-black flex gap-2 items-center",
    buttonAction:
      "border-2 dark:border-white dark:bg-black border-black bg-white p-1",
  },
});

type UserProps = {
  user: UserType;
  handleDeleteUser: (userId: string) => void;
};

function User({ user, handleDeleteUser }: UserProps) {
  const { userState } = useUser(user);
  const { line, id, name, status, kids, date, number, actions, buttonAction } =
    userVariant();
  return (
    <>
      <tr className={line()}>
        <td className={id()}>{userState.id}</td>
        <td className={name()}>{userState.name}</td>
        <td className={status()}>{userState.maritalStatus}</td>
        <td className={kids()}>{userState.kids}</td>
        <td className={date()}>{`${userState.dataOfBirth}`}</td>
        <td className={number()}>{userState.favoriteNumber}</td>
        <td className={actions()}>
          <Button className={buttonAction()}>
            <Icon
              svg={Pencil}
              color="primary"
            />
          </Button>
          <Button
            className={buttonAction()}
            onClick={() => handleDeleteUser(user.id)}
          >
            <Icon
              svg={Trash2}
              color="primary"
            />
          </Button>
        </td>
      </tr>
    </>
  );
}

export default User;
