import { useManageConnectedUsers } from "../../hooks/useManageConnectedUsers";

function OnlineList() {
  const { users } = useManageConnectedUsers();

  return (
    <div className="border-1 rounded-xl h-[400px]  p-4 overflow-y-auto">
      <h2 className="font-bold mb-4">Online Members</h2>
      <ul>
        {users.map((user) => {
          return <li key={user.username}>{`#${user.id} ${user.username}`}</li>;
        })}
      </ul>
    </div>
  );
}

export default OnlineList;
