import { useContext, useEffect } from "react";
import { ConnectedUsersContext } from "../../contexts/ConnectedUsersContext";
import { WebSocketContext } from "../../contexts/WebSocketContext";

function OnlineList() {
  const { users, setUsers } = useContext(ConnectedUsersContext)!;
  const { latestMessage } = useContext(WebSocketContext)!;

  useEffect(() => {
    if (!latestMessage) return;
    const { type, sender } = latestMessage;
    if (!sender) return;

    // TODO: properly type the users in the list
    setUsers((prev) => {
      if (type === "connect") {
        // avoid duplicates
        return prev.includes(sender) ? prev : [...prev, sender];
      }
      if (type === "disconnect") {
        return prev.filter((u) => u !== sender);
      }
      return prev;
    });
  }, [latestMessage, setUsers]);

  return (
    <div className="border-1 rounded-xl h-[400px]  p-4 overflow-y-auto">
      <h2 className="font-bold mb-4">Online Members</h2>
      <ul>
        {users.map((user) => {
          return <li key={user}>{user}</li>;
        })}
      </ul>
    </div>
  );
}

export default OnlineList;
