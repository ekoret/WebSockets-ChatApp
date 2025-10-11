function Sidebar() {
  return (
    <aside className="bg-sidebar flex flex-col gap-2 min-w-[236px] max-w[300px]">
      <h1 className="mb-8 text-4xl font-bold">MyApp</h1>
      <nav className="flex flex-col gap-4">
        <a href="/">Dashboard</a>
        <a href="/settings">Settings</a>
      </nav>
    </aside>
  );
}

export default Sidebar;
