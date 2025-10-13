import { useState } from "react";
import ChatControls from "../components/Chat/ChatControls";
import ChatSettings from "../components/Chat/ChatSettings";
import ChatWindow from "../components/Chat/ChatWindow";

export interface IChatMessage {
  sender: string;
  message: string;
}

function Chat() {
  const [chatMessages, setChatMessages] = useState<IChatMessage[]>([]);

  return (
    <div className="h-full flex flex-col">
      <ChatSettings setChatMessages={setChatMessages} />
      <ChatWindow chatMessages={chatMessages} />
      <ChatControls setChatMessages={setChatMessages} />
    </div>
  );
}

export default Chat;
