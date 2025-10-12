import { Link } from "@tanstack/react-router";
import { LayoutDashboard, MessageCircle, Settings2 } from "lucide-react";
import AppIcon from "./AppIcon";
import { useUserContext } from "../hooks/useUserContext";

const Navbar = () => {
  const userContext = useUserContext();

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

  const navIconClasses = "max-w-[24px]";
  const navLinkClasses =
    "flex gap-4 items-center transition-colors hover:text-amber-400 dark:hover:text-indigo-400";

  return (
    <>
      {userContext.user && (
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
