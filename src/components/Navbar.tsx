import { Link } from "@tanstack/react-router";
import { LayoutDashboard, MessageCircle, Settings2 } from "lucide-react";
import AppIcon from "./AppIcon";

const Navbar = () => {
  const navLinks = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      to: "/",
    },
    {
      name: "Chat",
      icon: MessageCircle,
      to: "/chat",
    },
    {
      name: "Settings",
      icon: Settings2,
      to: "/settings",
    },
  ];

  const navIconClasses = "max-w-[24px]";
  const navLinkClasses =
    "flex gap-4 items-center transition-colors hover:text-amber-400 dark:hover:text-indigo-400";

  return (
    <nav className="flex flex-col gap-8">
      {navLinks.map((link) => {
        return (
          <Link key={link.name} to={link.to} className={navLinkClasses}>
            <AppIcon Icon={link.icon} className={navIconClasses} />
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
