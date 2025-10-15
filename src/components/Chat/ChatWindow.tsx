import { useEffect, useRef } from "react";
import useChatWindowAutoScroll from "../../hooks/useChatWindowAutoScroll";
import { useMessageContext } from "../../hooks/useMessageContext";
import { useWebSocketContext } from "../../hooks/useWebSocketContext";

const ChatWindow = () => {
  const chatWindowRef = useRef<HTMLDivElement>(null);
  const { globalChatMessages, setGlobalChatMessages } = useMessageContext();
  const { latestMessage } = useWebSocketContext();

  // TODO: fix this
  useChatWindowAutoScroll(globalChatMessages, chatWindowRef);

  useEffect(() => {
    if (!latestMessage) return;
    setGlobalChatMessages((prev) => {
      return [...prev, latestMessage];
    });
  }, [latestMessage, setGlobalChatMessages]);

  return (
    <div
      ref={chatWindowRef}
      className="flex-1 overflow-y-auto mb-4 flex flex-col-reverse gap-4"
    >
      {[...globalChatMessages].reverse().map((message, index) => {
        return (
          <div key={index}>
            {message.type === "message" && (
              <h3 className="font-bold">{message.sender} says:</h3>
            )}
            <p>{message.message}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ChatWindow;
