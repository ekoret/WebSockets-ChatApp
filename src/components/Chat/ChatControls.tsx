import { useContext } from "react";
import type { IChatMessage } from "../../pages/Chat";
import { AppContext } from "../../contexts/AppContext";

const ChatControls = ({
  setChatMessages,
}: {
  setChatMessages: React.Dispatch<React.SetStateAction<IChatMessage[]>>;
}) => {
  const data = useContext(AppContext);
  const user = data?.globalData.user;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("handling");
    const formEl = e.target as HTMLFormElement;

    const form = new FormData(formEl);

    const message = form.get("message");

    if (!message) return;

    setChatMessages((prevMessages) => [
      ...prevMessages,
      { sender: "ekoret", message: message.toString() },
    ]);
  };
  return (
    <form
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
        disabled={!user?.connected}
        name="message"
        className="bg-bg-base rounded-xl text-white dark:bg-white dark:text-bg-base w-full h-full p-2"
      ></textarea>
    </form>
  );
};

export default ChatControls;
