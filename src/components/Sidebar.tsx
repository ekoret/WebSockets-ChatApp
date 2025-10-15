/**
 * TODO: at the moment connected users
 * are only displayed in the sidebar. in the
 * future if this feature get's exapanded,
 * we'll have to lift the context up.
 *
 * for now its ok
 */
import UserDetails from "./UserDetails";
import ThemeToggle from "./ThemeToggle";
import Navbar from "./Navbar";
import OnlineList from "./Sidebar/OnlineList";
import { useUserContext } from "../hooks/useUserContext";
import { ConnectedUsersProvider } from "../providers/ConnectedUsersProvider";

function Sidebar() {
  const { user } = useUserContext();

  return (
    <aside className="bg-sidebar flex flex-col gap-2 min-w-[250px] max-w[300px]">
      <h1 className="mt-20 mb-8 text-4xl font-bold">SocketChat</h1>
      <Navbar />
      <div className="mt-auto flex flex-col gap-4">
        {user && (
          <ConnectedUsersProvider>
            <OnlineList />
          </ConnectedUsersProvider>
        )}

        <ThemeToggle />
        {user && <UserDetails />}
      </div>
    </aside>
  );
}

export default Sidebar;
