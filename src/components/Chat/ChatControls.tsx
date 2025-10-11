import { useContext, useEffect, useRef, useState } from "react";
import type { IChatMessage } from "../../pages/Chat";
import { AppContext } from "../../contexts/AppContext";

const ChatControls = ({
  setChatMessages,
}: {
  setChatMessages: React.Dispatch<React.SetStateAction<IChatMessage[]>>;
}) => {
  const data = useContext(AppContext);
  const user = data?.globalData.user;
  const formRef = useRef<HTMLFormElement>(null);

  const [textareaValue, setTextareaValue] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formEl = e.target as HTMLFormElement;

    const form = new FormData(formEl);

    const message = form.get("message");

    if (!message) return;

    setChatMessages((prevMessages) => [
      ...prevMessages,
      { sender: "ekoret", message: message.toString() },
    ]);

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
      <button
        disabled={!user?.connected}
        className="bg-bg-base cursor-pointer rounded-xl text-white dark:bg-white dark:text-bg-base min-w-[100px]"
        type="submit"
      >
        Send
      </button>
      <textarea
        onChange={(e) => setTextareaValue(e.target.value)}
        disabled={!user?.connected}
        name="message"
        className="bg-bg-base rounded-xl text-white dark:bg-white dark:text-bg-base w-full h-full p-2"
        value={textareaValue}
      ></textarea>
    </form>
  );
};

export default ChatControls;
