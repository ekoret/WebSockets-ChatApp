import ChatControls from "../components/Chat/ChatControls";
import ChatSettings from "../components/Chat/ChatSettings";
import ChatWindow from "../components/Chat/ChatWindow";
import { MessageProvider } from "../providers/MessageProvider";

function Chat() {
  return (
    <div className="h-full flex flex-col">
      <MessageProvider>
        <ChatSettings />
        <ChatWindow />
        <ChatControls />
      </MessageProvider>
    </div>
  );
}

export default Chat;
