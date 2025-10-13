import { createContext } from "react";
import type { IChatMessage } from "../pages/Chat";

interface IMessageContext {
  globalChatMessages: IChatMessage[];
  setGlobalChatMessages: React.Dispatch<React.SetStateAction<IChatMessage[]>>;
}

export const MessageContext = createContext<IMessageContext | null>(null);
