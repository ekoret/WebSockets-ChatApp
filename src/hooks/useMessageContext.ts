// useUserContext.ts
import { useContext } from "react";
import { MessageContext } from "../contexts/MessageContext";

export function useMessageContext() {
  const context = useContext(MessageContext);

  if (!context) {
    throw new Error(
      "useMessageContext must be used within a <MessageContext.Provider>"
    );
  }

  return context;
}
