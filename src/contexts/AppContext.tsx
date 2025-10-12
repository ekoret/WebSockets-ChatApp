import { createContext, type Dispatch, type SetStateAction } from "react";
import type User from "../classes/User";

export interface IAppContext {
  globalData: IGlobalData;
  setGlobalData: Dispatch<SetStateAction<IGlobalData>>;
}

export interface IGlobalData {
  user?: User;
}

export const AppContext = createContext<IAppContext | null>(null);
