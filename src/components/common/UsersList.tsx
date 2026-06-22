import { tv } from "tailwind-variants";
import User from "./User";
import useUsers from "../../hooks/useUsers";
import { useNavigate } from "react-router";

const userListVariant = tv({
  slots: {
    table: "w-full flex flex-col",
    head: "dark:bg-gray-700 bg-gray-300",
    line: "flex w-full items-center py-4 border-y-2 dark:border-y-white border-y-black font-grotesk",
    id: "uppercase flex-2 dark:text-white text-black",
    name: "uppercase flex-4 text-left pl-2 dark:text-white text-black",
    status: "uppercase flex-2 text-left dark:text-white text-black",
    kids: "uppercase flex-1 dark:text-white text-black",
    date: "uppercase flex-3 text-left pl-4 dark:text-white text-black",
    number: "uppercase flex-3 text-left dark:text-white text-black",
    action: "uppercase flex-1 dark:text-white text-black",
    body: "font-grotesk",
  },
});

type UserListProps = {
  filterList: string;
};

function UsersList({ filterList }: UserListProps) {
  const { users, deleteUser } = useUsers();
  const navigate = useNavigate();

  const handleDeleteUser = (userId: string) => {
    deleteUser(userId);
  };

  const HandleChangePageToEdit = (userId: string) => {
    navigate(`/edit?user=${userId}`);
  };

  const {
    table,
    head,
    line,
    id,
    name,
    status,
    kids,
    date,
    number,
    action,
    body,
  } = userListVariant();
  return (
    <table className={table()}>
      <thead className={head()}>
        <tr className={line()}>
          <th className={id()}>ID</th>
          <th className={name()}>Nome</th>
          <th className={status()}>Estado civil</th>
          <th className={kids()}>Filhos</th>
          <th className={date()}>Data de nascimento</th>
          <th className={number()}>Número da sorte</th>
          <th className={action()}>Ações</th>
        </tr>
      </thead>
      <tbody className={body()}>
        {filterList
          ? users
              .filter(
                (user) => user.name.toLowerCase() === filterList.toLowerCase(),
              )
              .map((user, index) => (
                <User
                  key={`${index}-${user.id}-${user.name}`}
                  user={user}
                  handleDeleteUser={handleDeleteUser}
                  HandleChangePageToEdit={HandleChangePageToEdit}
                />
              ))
          : users.map((user, index) => (
              <User
                key={`${index}-${user.id}-${user.name}`}
                user={user}
                handleDeleteUser={handleDeleteUser}
                HandleChangePageToEdit={HandleChangePageToEdit}
              />
            ))}
      </tbody>
    </table>
  );
}

export default UsersList;
