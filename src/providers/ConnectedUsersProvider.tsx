import { useState } from "react";
import { ConnectedUsersContext } from "../contexts/ConnectedUsersContext";
import type { ProviderProps } from "../global";
import type User from "../classes/User";

export const ConnectedUsersProvider = ({ children }: ProviderProps) => {
  const [users, setUsers] = useState<User[]>([]);

  return (
    <ConnectedUsersContext value={{ users, setUsers }}>
      {children}
    </ConnectedUsersContext>
  );
};
