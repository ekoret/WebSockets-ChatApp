import { useContext } from "react";
import { WebSocketContext } from "../contexts/WebSocketContext";

const HOOK_NAME = "useWebSocketContext";
const MUST_USE_CONTEXT = "WebSocketContext";

export const useWebSocketContext = () => {
  const ctx = useContext(WebSocketContext);

  if (!ctx)
    throw new Error(
      `${HOOK_NAME} must be used within a <${MUST_USE_CONTEXT}.Provider>`
    );

  return ctx;
};
