import { useRef } from "react";
import type { IChatMessage } from "../../pages/Chat";
import useChatWindowAutoScroll from "../../hooks/useChatWindowAutoScroll";

interface ChatWindowProps {
  chatMessages: IChatMessage[];
}

const ChatWindow = ({ chatMessages }: ChatWindowProps) => {
  const chatWindowRef = useRef<HTMLDivElement>(null);

  // TODO: fix this
  useChatWindowAutoScroll(chatMessages, chatWindowRef);

  return (
    <div
      ref={chatWindowRef}
      className="flex-1 overflow-y-auto mb-4 flex flex-col-reverse gap-4"
    >
      {[...chatMessages].reverse().map((message, index) => {
        return (
          <div key={index}>
            <h3 className="font-bold">{message.sender} says:</h3>
            <p>{message.message}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ChatWindow;
