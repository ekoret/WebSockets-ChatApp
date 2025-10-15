import { useState } from "react";
import { MessageContext } from "../contexts/MessageContext";
import type { ProviderProps, WebSocketMessage } from "../global";

export const MessageProvider = ({ children }: ProviderProps) => {
  const [globalChatMessages, setGlobalChatMessages] = useState<
    WebSocketMessage[]
  >([]);

  return (
    <MessageContext value={{ globalChatMessages, setGlobalChatMessages }}>
      {children}
    </MessageContext>
  );
};
