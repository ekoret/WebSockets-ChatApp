import { useContext } from "react";
import { MessageContext } from "../contexts/MessageContext";

const HOOK_NAME = "useMessageContext";
const MUST_USE_CONTEXT = "MessageContext";

export function useMessageContext() {
  const context = useContext(MessageContext);

  if (!context) {
    throw new Error(
      `${HOOK_NAME} must be used within a <${MUST_USE_CONTEXT}.Provider>`
    );
  }

  return context;
}
