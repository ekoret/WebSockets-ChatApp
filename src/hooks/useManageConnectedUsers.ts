import { useEffect } from "react";
import { useWebSocketContext } from "./useWebSocketContext";
import { useConnectedUsersContext } from "./useConnectedUsersContext";

export const useManageConnectedUsers = () => {
  const { users, setUsers } = useConnectedUsersContext();
  const { latestMessage } = useWebSocketContext();

  useEffect(() => {
    if (!latestMessage) return;
    const { type, sender } = latestMessage;
    if (!sender) return;

    setUsers((prev) => {
      if (type === "connect") {
        // avoid duplicates
        const senderExists = prev.some((user) => user.username === sender);
        if (senderExists) return prev;

        return [...prev, { username: sender, id: 1 }];
      } else if (type === "disconnect") {
        return prev.filter((user) => user.username !== sender);
      }
      return prev;
    });
  }, [latestMessage, setUsers]);

  return { users };
};
