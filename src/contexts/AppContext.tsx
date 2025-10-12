import { createContext, type Dispatch, type SetStateAction } from "react";

export interface IAppContext {
  globalData: IGlobalData;
  setGlobalData: Dispatch<SetStateAction<IGlobalData>>;
}

export interface IGlobalData {
  user?: IUserState;
}

export interface IUserState {
  username: string | null;
  connected: boolean;
  loggedInAt: Date | null;
}

export const AppContext = createContext<IAppContext | null>(null);
