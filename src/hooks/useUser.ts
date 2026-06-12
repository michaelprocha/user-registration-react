import { useState } from "react";
import type User from "../types/user.type";

export default function useUser(userToState: User) {
  const [userState, setUserState] = useState<User>(userToState);

  function updadeUser(updateToUpdate: User) {
    setUserState(updateToUpdate);
  }

  return { updadeUser, userState };
}
