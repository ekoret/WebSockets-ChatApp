const ChatControls = () => {
  return (
    <form className="min-h-[100px] flex gap-2">
      <button
        className="bg-bg-base rounded-xl text-white dark:bg-white dark:text-bg-base min-w-[100px]"
        type="button"
      >
        Send
      </button>
      <textarea className="bg-bg-base rounded-xl text-white dark:bg-white dark:text-bg-base w-full h-full p-2"></textarea>
    </form>
  );
};

export default ChatControls;
