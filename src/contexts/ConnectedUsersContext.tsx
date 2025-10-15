import { createContext } from "react";
import type { OnlineUser } from "../global";

interface ConnectedUsersContext {
  users: OnlineUser[];
  setUsers: React.Dispatch<React.SetStateAction<OnlineUser[]>>;
}

export const ConnectedUsersContext =
  createContext<ConnectedUsersContext | null>(null);
