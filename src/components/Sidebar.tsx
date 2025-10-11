import UserDetails from "./UserDetails";
import ThemeToggle from "./ThemeToggle";

function Sidebar() {
  return (
    <aside className="bg-sidebar flex flex-col gap-2 min-w-[250px] max-w[300px]">
      <h1 className="mt-20 mb-8 text-4xl font-bold">SocketChat</h1>
      <nav className="flex flex-col gap-4">
        <a href="/">Dashboard</a>
        <a href="/settings">Settings</a>
      </nav>
      <div className="mt-auto flex flex-col gap-4">
        <ThemeToggle />
        <UserDetails />
      </div>
    </aside>
  );
}

export default Sidebar;
