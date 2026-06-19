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
            .toISOString()
            .split("T")[0]
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

  const sendUserEdited = async (
    userEdited: Pick<
      UserType,
      "name" | "favoriteNumber" | "dataOfBirth" | "kids" | "maritalStatus"
    >,
  ) => {
    try {
      const fetchSendUserEdit = await fetch(
        `http://localhost:3000/users/${userId}`,
        {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userEdited),
        },
      );

      if (fetchSendUserEdit.ok) {
        console.log("editado com sucesso");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { editUser, sendUserEdited };
}
