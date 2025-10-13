import { createFileRoute } from "@tanstack/react-router";
import Chat from "../pages/Chat";
import { ChatSocket } from "../classes/ChatSocket";
import { useEffect, useRef } from "react";
import { useUserContext } from "../hooks/useUserContext";

export const Route = createFileRoute("/chat")({
  component: RouteComponent,
});

function RouteComponent() {
  const socketRef = useRef<ChatSocket | null>(null);
  const userContext = useUserContext();

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
          /**
           * TODO: figure out a way to add it to
           * the global messages without having
           * to move context up.
           *
           * Why NOT move it up?
           * If it get's moved up, the only option
           * to wrap the context provider is to
           * wrap most of the app excluding sidebar.
           * This will cause a lot of re-renders
           * on child components when they're not
           * needed.
           */
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

  return <Chat />;
}
