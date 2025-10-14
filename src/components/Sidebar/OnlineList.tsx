function OnlineList() {
  return (
    <div className="border-1 rounded-xl h-[400px]  p-4 overflow-y-auto">
      <h2 className="font-bold mb-4">Online Members</h2>
      <ul>
        {mockUsers.map((user) => {
          return (
            <li key={user} className="mb-1">
              {user}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default OnlineList;
