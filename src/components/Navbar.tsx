import { Link } from "@tanstack/react-router";

const Navbar = () => {
  return (
    <nav className="flex flex-col gap-4">
      <Link to="/">Dashboard</Link>
      <Link to="/chat">Chat</Link>
      <Link to="/settings">Settings</Link>
    </nav>
  );
};

export default Navbar;
