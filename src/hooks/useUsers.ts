import { useEffect, useState } from "react";
import type UserType from "../types/user.type";

export default function useUsers() {
  const [users, setUsers] = useState<UserType[]>([]);
  //   const [error, setError] = useState<string>("");

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    async function getUsers() {
      try {
        const fetchUsers = await fetch("http://localhost:3000/users", {
          signal,
        });
        if (fetchUsers.ok) {
          const arrayUser = await fetchUsers.json();
          setUsers(arrayUser);
        }
      } catch (error) {
        setUsers([]);
        console.log(error);
      }
    }

    getUsers();

    return () => {
      controller.abort();
    };
  }, []);

  const deleteUser = (userId: string) => {
    setUsers((users) =>
      users.filter((user) => {
        if (user.id !== userId) {
          return user;
        }
      }),
    );
  };

  return { users, deleteUser };
}
