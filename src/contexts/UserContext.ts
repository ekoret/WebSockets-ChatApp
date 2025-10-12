import { createContext } from "react";
import type User from "../classes/User";

export interface IUserContext {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

export const UserContext = createContext<IUserContext | null>(null);
