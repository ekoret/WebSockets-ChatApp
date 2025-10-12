import UserDetails from "./UserDetails";
import ThemeToggle from "./ThemeToggle";
import Navbar from "./Navbar";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import OnlineList from "./Sidebar/OnlineList";

function Sidebar() {
  const data = useContext(AppContext);
  const user = data?.globalData.user;

  return (
    <aside className="bg-sidebar flex flex-col gap-2 min-w-[250px] max-w[300px]">
      <h1 className="mt-20 mb-8 text-4xl font-bold">SocketChat</h1>
      <Navbar />
      <div className="mt-auto flex flex-col gap-4">
        {user && <OnlineList />}
        <ThemeToggle />
        {user && <UserDetails />}
      </div>
    </aside>
  );
}

export default Sidebar;
