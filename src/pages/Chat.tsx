import { useState } from "react";
import ChatControls from "../components/Chat/ChatControls";
import ChatSettings from "../components/Chat/ChatSettings";
import ChatWindow from "../components/Chat/ChatWindow";
import type { WebSocketMessage } from "../hooks/useWebSocket";
import { MessageContext } from "../contexts/MessageContext";

export interface IChatMessage {
  sender?: string;
  message: string;
}

function Chat() {
  const [globalChatMessages, setGlobalChatMessages] = useState<
    WebSocketMessage[]
  >([]);

  return (
    <div className="h-full flex flex-col">
      <MessageContext value={{ globalChatMessages, setGlobalChatMessages }}>
        <ChatSettings />
        <ChatWindow />
        <ChatControls />
      </MessageContext>
    </div>
  );
}

export default Chat;
