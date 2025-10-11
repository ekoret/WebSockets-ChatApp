import ThemeToggle from "./ThemeToggle";

function Sidebar() {
  return (
    <aside className="bg-sidebar flex flex-col gap-2 min-w-[170px] max-w[300px]">
      <h1 className="mb-8 text-4xl font-bold">SocketChat</h1>
      <nav className="flex flex-col gap-4">
        <a href="/">Dashboard</a>
        <a href="/settings">Settings</a>
      </nav>
      <div className="mt-auto">
        <ThemeToggle />
      </div>
    </aside>
  );
}

export default Sidebar;
