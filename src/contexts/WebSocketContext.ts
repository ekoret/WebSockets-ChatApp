import { createContext } from "react";
import type { WebSocketMessage } from "../hooks/useWebSocket";

export interface IWebSocketContext {
  isReady: boolean;
  latestMessage: WebSocketMessage | null;
  send: (data: WebSocketMessage) => void;
}

export const WebSocketContext = createContext<IWebSocketContext | null>(null);
