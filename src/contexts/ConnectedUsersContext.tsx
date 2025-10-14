import { createContext, useState } from "react";
import type User from "../classes/User";
import type { ProviderProps } from "../global";

interface IConnectedUsersContext {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
}

export const ConnectedUsersContext =
  createContext<IConnectedUsersContext | null>(null);

export const ConnectedUsersProvider = ({ children }: ProviderProps) => {
  const [users, setUsers] = useState<User[]>([]);

  return (
    <ConnectedUsersContext value={{ users, setUsers }}>
      {children}
    </ConnectedUsersContext>
  );
};
