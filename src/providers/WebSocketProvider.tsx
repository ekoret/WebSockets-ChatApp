import { WebSocketContext } from "../contexts/WebSocketContext";
import type { ProviderProps } from "../global";
import { useWebSocket } from "../hooks/useWebSocket";

export const WebSocketProvider = ({ children }: ProviderProps) => {
  const [isReady, latestMessage, send] = useWebSocket();

  return (
    <WebSocketContext value={{ isReady, latestMessage, send }}>
      {children}
    </WebSocketContext>
  );
};
