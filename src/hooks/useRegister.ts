import type UserType from "../types/user.type";

type NewUserType = Pick<
  UserType,
  "name" | "dataOfBirth" | "favoriteNumber" | "kids" | "maritalStatus"
>;

export default function useRegister() {
  const registerNewUser = async (newUser: NewUserType) => {
    try {
      const fetchNewUser = await fetch(`http://localhost:3000/users`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          ...newUser,
          dataOfBirth: new Date(newUser.dataOfBirth).toISOString(),
        }),
      });

      if (fetchNewUser.ok) {
        console.log("deu certo");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { registerNewUser };
}
