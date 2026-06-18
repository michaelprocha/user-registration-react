import { useEffect, useState } from "react";
import type UserType from "../types/user.type";

export default function useEditUser(userId: string | null) {
  const [editUser, setEditUser] = useState<UserType>({} as UserType);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const getToEditUser = async () => {
      try {
        const fetchToEdit = await fetch(
          `http://localhost:3000/users/${userId}`,
          { signal },
        );
        if (fetchToEdit.ok) {
          const userToEdit = await fetchToEdit.json();
          const { dataOfBirth } = userToEdit;
          const dateToEdit = new Date(dataOfBirth)
            .toLocaleDateString("en-US", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })
            .toString();
          console.log(dateToEdit);
          setEditUser({ ...userToEdit, dataOfBirth: dateToEdit });
        }
      } catch (error) {
        if (error instanceof Error) {
          if (error.name === "AbortError") {
            console.log("cancelado o request");
          } else {
            console.log(error);
          }
        }
      }
    };

    if (userId) {
      getToEditUser();
    }

    return () => {
      controller.abort();
    };
  }, [userId]);

  return { editUser };
}
