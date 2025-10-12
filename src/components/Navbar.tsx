import { Link } from "@tanstack/react-router";
import { LayoutDashboard, MessageCircle, Settings2 } from "lucide-react";
import AppIcon from "./AppIcon";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

const Navbar = () => {
  const data = useContext(AppContext);
  const user = data?.globalData.user;

  const loggedInNavLinks = [
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

  const loggedOutNavLinks = [
    {
      name: "Login",
      icon: MessageCircle,
      to: "/login",
    },
  ];

  const navIconClasses = "max-w-[24px]";
  const navLinkClasses =
    "flex gap-4 items-center transition-colors hover:text-amber-400 dark:hover:text-indigo-400";

  return (
    <>
      {user && (
        <nav className="flex flex-col gap-8">
          {loggedInNavLinks.map((link) => {
            return (
              <Link key={link.name} to={link.to} className={navLinkClasses}>
                <AppIcon Icon={link.icon} className={navIconClasses} />
                {link.name}
              </Link>
            );
          })}
        </nav>
      )}
    </>
  );
};

export default Navbar;
