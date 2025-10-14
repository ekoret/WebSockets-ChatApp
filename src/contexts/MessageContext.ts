import { createContext } from "react";
import type { WebSocketMessage } from "../hooks/useWebSocket";

interface IMessageContext {
  globalChatMessages: WebSocketMessage[];
  setGlobalChatMessages: React.Dispatch<
    React.SetStateAction<WebSocketMessage[]>
  >;
}

export const MessageContext = createContext<IMessageContext | null>(null);
