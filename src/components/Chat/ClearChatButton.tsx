import { useMessageContext } from "../../hooks/useMessageContext";
import AppIcon from "../AppIcon";
import { Eraser } from "lucide-react";

const ClearChatButton = () => {
  const messageContext = useMessageContext();

  const setGlobalChatMessages = messageContext.setGlobalChatMessages;

  const handleOnClick = () => {
    setGlobalChatMessages([]);
  };

  return (
    <button
      onClick={handleOnClick}
      className="bg-bg-base dark:bg-white
       dark:text-bg-base rounded-lg text-white
        py-2 px-4 flex justify-center align-center
        cursor-pointer transition-colors
         hover:bg-amber-400 dark:hover:bg-indigo-400
         items-center gap-2"
      type="button"
    >
      <AppIcon Icon={Eraser} className="max-w-3" /> Clear Chat
    </button>
  );
};

export default ClearChatButton;
