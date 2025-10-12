import React from "react";
import type { IChatMessage } from "../../pages/Chat";

export interface ClearChatButtonProps {
  setChatMessages: React.Dispatch<React.SetStateAction<IChatMessage[]>>;
}

const ClearChatButton = ({ setChatMessages }: ClearChatButtonProps) => {
  const handleOnClick = () => {
    setChatMessages([]);
  };

  return (
    <button
      onClick={handleOnClick}
      className="bg-bg-base dark:bg-white
       dark:text-bg-base rounded text-white
        py-2 px-4 flex justify-center align-center
        cursor-pointer transition-colors
         hover:bg-amber-400 dark:hover:bg-indigo-400"
      type="button"
    >
      Clear Chat
    </button>
  );
};

export default ClearChatButton;
