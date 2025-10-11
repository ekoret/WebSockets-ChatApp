import { useEffect, type RefObject } from "react";
import type { IChatMessage } from "../pages/Chat";

export type ChatWindowRef = RefObject<HTMLDivElement | null>;

function useChatWindowAutoScroll(
  chatMessages: IChatMessage[],
  chatWindowRef: ChatWindowRef
): boolean {
  useEffect(() => {
    const chatWindowEl = chatWindowRef.current;

    if (!chatMessages) return;
    if (!chatWindowEl) return;

    const scrollBottom =
      chatWindowEl.scrollHeight -
      chatWindowEl.clientHeight -
      chatWindowEl.scrollTop;

    if (scrollBottom <= 100) {
      chatWindowEl.scroll({
        top: chatWindowEl.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [chatMessages]);

  // Handles first load
  useEffect(() => {
    const chatWindowEl = chatWindowRef.current;
    if (!chatMessages) return;
    if (!chatWindowEl) return;
    chatWindowEl.scroll({
      top: chatWindowEl.scrollHeight,
      behavior: "instant",
    });
  }, []);

  return true;
}

export default useChatWindowAutoScroll;
