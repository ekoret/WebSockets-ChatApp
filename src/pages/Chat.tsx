import ChatControls from "../components/Chat/ChatControls";
import ChatSettings from "../components/Chat/ChatSettings";
import ChatWindow from "../components/Chat/ChatWindow";

export interface IChatMessage {
  sender?: string;
  message: string;
}

function Chat() {
  return (
    <div className="h-full flex flex-col">
      <ChatSettings />
      <ChatWindow />
      <ChatControls />
    </div>
  );
}

export default Chat;
