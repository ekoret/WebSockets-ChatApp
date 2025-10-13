import { createFileRoute } from "@tanstack/react-router";
import Chat from "../pages/Chat";
import { ChatSocket } from "../classes/ChatSocket";
import { useEffect } from "react";

export const Route = createFileRoute("/chat")({
  component: RouteComponent,
});

function RouteComponent() {
  useEffect(() => {
    const socketConnection = new ChatSocket(8765);

    return () => {
      socketConnection.socket.close();
    };
  }, []);

  return <Chat />;
}
