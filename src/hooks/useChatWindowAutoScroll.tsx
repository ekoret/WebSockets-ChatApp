import { useEffect, type RefObject } from "react";
import type { ChatMessage } from "../global";

export type ChatWindowRef = RefObject<HTMLDivElement | null>;

function useChatWindowAutoScroll(
  chatMessages: ChatMessage[],
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

    /**
     * TODO: fix scrolling issue when a lot
     * of messages are sent.
     *
     * There is an issue where smooth scrolling
     * is not working when a new message is added
     *
     * There is also another issue where if you
     * scroll to the top of the chat window
     * while new messages are coming in, the window
     * moves. It should not move if the user is
     * viewing a message earlier in history.
     */
    if (scrollBottom <= 100) {
      chatWindowEl.scroll({
        top: chatWindowEl.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [chatMessages, chatWindowRef]);

  // Handles first load
  useEffect(() => {
    const chatWindowEl = chatWindowRef.current;
    if (!chatMessages) return;
    if (!chatWindowEl) return;
    chatWindowEl.scroll({
      top: chatWindowEl.scrollHeight,
      behavior: "instant",
    });
  }, [chatMessages, chatWindowRef]);

  return true;
}

export default useChatWindowAutoScroll;
