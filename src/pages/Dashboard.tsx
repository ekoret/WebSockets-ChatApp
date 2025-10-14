import { useUserContext } from "../hooks/useUserContext";

function Dashboard() {
  const userContext = useUserContext();

  /**
   * TODO: is null assertion safe here?
   *
   * The router will never navigate to this page if
   * the user is null due to the router guard.
   */
  const user = userContext.user!;

  return (
    <div className="h-full overflow-y-auto">
      <div className="flex-col gap-4 mt-52">
        <div className="mb-8">
          <h2 className="text-3xl mb-4">
            Welcome,<br></br>
            <span className="text-4xl">{user?.username}</span>
          </h2>
          <p>You're all set. Jump into the chat!</p>
        </div>
        <div className="mb-4">
          <small>You logged in at</small>

          <h3 className="font-bold">
            {new Date(user?.connectedAt).toLocaleTimeString()}
          </h3>
        </div>
        <div className="mb-4">
          <small>Connection Status</small>

          <h3 className="font-bold">
            {user?.connected ? "Online" : "Offline"}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
