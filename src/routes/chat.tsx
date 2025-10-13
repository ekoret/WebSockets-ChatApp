import { createFileRoute } from "@tanstack/react-router";
import Chat from "../pages/Chat";
import ChatProvider from "../providers/ChatProvider";

export const Route = createFileRoute("/chat")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <ChatProvider>
      <Chat />
    </ChatProvider>
  );
}
