import { useState } from "react";
import { LocalStorageManager } from "../classes/LocalStorageManager";
import type User from "../classes/User";
import { UserContext } from "../contexts/UserContext";
import type { ProviderProps } from "../global";

export const UserProvider = ({ children }: ProviderProps) => {
  const userLocalStorage = LocalStorageManager.getItem("user");

  const initialUser: User | null = userLocalStorage
    ? JSON.parse(userLocalStorage)
    : null;

  const [user, setUser] = useState<User | null>(initialUser);

  return <UserContext value={{ user, setUser }}>{children}</UserContext>;
};

export default UserProvider;
