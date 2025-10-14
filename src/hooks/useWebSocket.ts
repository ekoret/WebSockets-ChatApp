import { useEffect, useRef, useState } from "react";
import { useUserContext } from "./useUserContext";

export interface WebSocketMessage {
  type: "connect" | "disconnect" | "message";
  message: string;
  sender?: string;
  sentAt?: Date;
}

export const useWebSocket = (
  url: string = "ws://localhost:8765"
): [boolean, WebSocketMessage | null, (data: WebSocketMessage) => void] => {
  const [isReady, setIsReady] = useState<boolean>(false);
  const [latestMessage, setLatestMessage] = useState<WebSocketMessage | null>(
    null
  );
  const userContext = useUserContext();
  const { user, setUser } = userContext;

  const socketRef = useRef<WebSocket>(null);

  useEffect(() => {
    if (!user) {
      return;
    }
    const socket = new WebSocket(url);
    socketRef.current = socket;

    socket.onopen = () => {
      setIsReady(true);
      if (user) setUser({ ...user, connected: true });
    };
    socket.onclose = () => setIsReady(false);
    socket.onmessage = (event) => setLatestMessage(event.data);

    return () => socket.close();
  }, [url, user?.username]);

  const send = (data: WebSocketMessage) => {
    if (socketRef.current?.readyState !== WebSocket.OPEN) {
      throw new Error("Attempting to send message when socket not ready");
    }
    socketRef.current.send(JSON.stringify(data));
  };

  return [isReady, latestMessage, send];
};
