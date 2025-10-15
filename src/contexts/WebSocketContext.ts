import { createContext } from "react";
import type { WebSocketMessage } from "../global";

export interface WebSocketContext {
  isReady: boolean;
  latestMessage: WebSocketMessage | null;
  send: (data: WebSocketMessage) => void;
}

export const WebSocketContext = createContext<WebSocketContext | null>(null);
