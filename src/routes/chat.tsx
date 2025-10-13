import { createFileRoute } from "@tanstack/react-router";
import Chat from "../pages/Chat";
import { ChatSocket } from "../classes/ChatSocket";
import { useEffect, useRef } from "react";

export const Route = createFileRoute("/chat")({
  component: RouteComponent,
});

function RouteComponent() {
  const socketRef = useRef<ChatSocket | null>(null);

  useEffect(() => {
    console.log("Mount");
    if (socketRef.current) return;

    const socketConnection = new ChatSocket(8765);

    // Connection opened
    socketConnection.socket.addEventListener("open", (_) => {
      socketConnection.send({ type: "connect", message: "hello" });
    });

    // Listen for messages
    socketConnection.socket.addEventListener("message", (event) => {
      console.log("Message from server ", event.data);
    });

    socketRef.current = socketConnection;

    return () => {
      console.log("Unmount");
      socketConnection.socket.close();
    };
  }, []);

  return <Chat />;
}
