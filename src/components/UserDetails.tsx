import imgUrl from "../assets/neo-banana-cat.jpg";
import AppIcon from "./AppIcon";
import { LogOut } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";
import { useUserContext } from "../hooks/useUserContext";

function UserDetails() {
  const navigate = useNavigate();

  const userContext = useUserContext();

  const handleLogout = () => {
    userContext?.setUser(null);

    navigate({
      to: "/login",
    });
  };

  return (
    <div className="bg-user-details-bg rounded py-2 px-4 flex gap-4">
      <div>
        <img className="rounded-full max-w-[50px]" src={imgUrl} />
      </div>
      <div>
        <small>Logged in as</small>
        <h3>{userContext.user?.username}</h3>
      </div>
      <div
        onClick={handleLogout}
        title="Logout"
        className="ml-auto cursor-pointer"
      >
        <AppIcon Icon={LogOut} />
      </div>
    </div>
  );
}

export default UserDetails;
