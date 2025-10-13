import { useEffect, useRef, useState } from "react";
import { ChatSocket } from "../classes/ChatSocket";
import { useUserContext } from "../hooks/useUserContext";
import { MessageContext } from "../contexts/MessageContext";
import type { IChatMessage } from "../pages/Chat";

function ChatProvider({ children }: { children: React.ReactNode }) {
  const socketRef = useRef<ChatSocket | null>(null);
  const userContext = useUserContext();

  const [globalChatMessages, setGlobalChatMessages] = useState<IChatMessage[]>(
    []
  );

  if (!userContext.user) throw new Error("User not found when loading /chat");

  const user = userContext.user;
  const username = user.username;

  useEffect(() => {
    if (socketRef.current) return;

    // Update the users connected status
    userContext.setUser({
      ...user,
      connected: true,
    });

    // Connect to the socket
    const socketConnection = new ChatSocket(8765);

    // Connection opened
    socketConnection.socket.addEventListener("open", (_) => {
      socketConnection.send({
        type: "connect",
        message: `${username} has connected to the chat!`,
      });
    });

    // Listen for messages
    socketConnection.socket.addEventListener("message", (event) => {
      console.log("Message from server ", event.data);
      const data = JSON.parse(event.data);

      const type = data.type;

      switch (type) {
        case "connect":
          // Add it to global messages
          setGlobalChatMessages((prevMessages) => [
            ...prevMessages,
            { message: data.message, sentAt: data.sentAt },
          ]);
          break;
        case "message":
          setGlobalChatMessages((prevMessages) => [
            ...prevMessages,
            { sender: data.sender, message: data.message },
          ]);
          break;
        case "disconnect":
          setGlobalChatMessages((prevMessages) => [
            ...prevMessages,
            { message: data.message, sentAt: data.sentAt },
          ]);
          break;
        default:
          throw new Error("Unknown message type");
      }
    });

    socketRef.current = socketConnection;

    return () => {
      socketConnection.socket.close();
      userContext.setUser({
        ...user,
        connected: false,
      });
    };
  }, []);

  return (
    <MessageContext value={{ globalChatMessages, setGlobalChatMessages }}>
      {children}
    </MessageContext>
  );
}

export default ChatProvider;
