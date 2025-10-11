import { useEffect, type RefObject } from "react";
import type { IChatMessage } from "../pages/Chat";

export type ChatWindowRef = RefObject<HTMLDivElement | null>;

function useChatWindowAutoScroll(
  chatMessages: IChatMessage[],
  chatWindowRef: ChatWindowRef
): boolean {
  useEffect(() => {
    if (!chatMessages) return;
    if (!chatWindowRef.current) return;

    console.log("Scrolling down");
    chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
  }, [chatMessages]);

  return true;
}

export default useChatWindowAutoScroll;
