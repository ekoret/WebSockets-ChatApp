import { useEffect, useRef, useState } from "react";
import { useUserContext } from "./useUserContext";
import type { WebSocketMessage } from "../global";

export const useWebSocket = (
  url: string = "ws://localhost:8080"
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
      console.log(`Connected to server as ${user.username}`);
      socket.send(
        JSON.stringify({
          type: "connect",
          roomId: 0,
          sender: user.username,
          message: `${user.username} has joined the chat!`,
        })
      );
      setIsReady(true);
      if (user) setUser({ ...user, connected: true });
    };
    socket.onclose = () => {
      setIsReady(false);
    };
    socket.onmessage = (event) => {
      console.log("Message from server received: ", event.data);
      setLatestMessage(JSON.parse(event.data));
    };

    return () => {
      /**
       * TODO: is adding setTimeout allowed in useEffect?
       *
       * added this because when disconnecting,
       * the tcp handshake wouoldnt complete when
       * sending the disconnect message and closing.
       */
      setTimeout(() => {
        socket.close();
      }, 50);
    };
  }, [url, user?.username, setUser]);

  const send = (data: WebSocketMessage) => {
    if (socketRef.current?.readyState !== WebSocket.OPEN) {
      throw new Error("Attempting to send message when socket not ready");
    }
    socketRef.current.send(JSON.stringify(data));
  };

  return [isReady, latestMessage, send];
};
