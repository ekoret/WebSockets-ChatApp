import { useContext, useEffect, useRef, useState } from "react";
import AppIcon from "../AppIcon";
import { Send } from "lucide-react";
import { useUserContext } from "../../hooks/useUserContext";
import { WebSocketContext } from "../../contexts/WebSocketContext";

const ChatControls = () => {
  const userContext = useUserContext();

  const socketContext = useContext(WebSocketContext);
  const { send } = socketContext!;

  const formRef = useRef<HTMLFormElement>(null);

  const [textareaValue, setTextareaValue] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formEl = e.target as HTMLFormElement;

    const form = new FormData(formEl);

    const message = form.get("message") as string | null;

    if (!message) return;

    send({
      type: "message",
      message,
      sender: userContext.user?.username,
    });
    setTextareaValue("");
  };

  useEffect(() => {
    const formEl = formRef.current;

    if (!formEl) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        e.preventDefault();
        formEl.requestSubmit();
      }
    };

    formEl.addEventListener("keydown", handleKeyDown);
    return () => formEl.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <form
      ref={formRef}
      onSubmit={(e) => handleSubmit(e)}
      className="min-h-[100px] flex gap-2"
    >
      <textarea
        onChange={(e) => setTextareaValue(e.target.value)}
        disabled={!userContext.user?.connected}
        name="message"
        className="bg-bg-base rounded-xl text-white dark:bg-white
         dark:text-bg-base w-full h-full p-4 focus-visible:outline-0"
        value={textareaValue}
      ></textarea>
      <button
        disabled={!userContext.user?.connected}
        className="bg-bg-base cursor-pointer rounded-xl mt-auto
        p-4 text-white dark:bg-white dark:text-bg-base 
        max-w-[80px] max-h-[50px] flex items-center justify-center gap-2"
        type="submit"
      >
        <AppIcon Icon={Send} />
      </button>
    </form>
  );
};

export default ChatControls;
