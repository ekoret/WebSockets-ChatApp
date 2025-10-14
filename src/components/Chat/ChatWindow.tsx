import { useContext, useEffect, useRef } from "react";
import useChatWindowAutoScroll from "../../hooks/useChatWindowAutoScroll";
import { useMessageContext } from "../../hooks/useMessageContext";
import { WebSocketContext } from "../../contexts/WebSocketContext";

const ChatWindow = () => {
  const chatWindowRef = useRef<HTMLDivElement>(null);
  const messageContext = useMessageContext();
  const globalChatMessages = messageContext.globalChatMessages;
  const { latestMessage } = useContext(WebSocketContext);

  // TODO: fix this
  useChatWindowAutoScroll(globalChatMessages, chatWindowRef);

  useEffect(() => {
    if (!latestMessage) return;
    messageContext.setGlobalChatMessages((prev) => {
      return [...prev, latestMessage];
    });
  }, [latestMessage]);

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
