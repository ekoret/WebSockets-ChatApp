import imgUrl from "../assets/neo-banana-cat.jpg";
import AppIcon from "./AppIcon";
import { LogOut } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";
import { useUserContext } from "../hooks/useUserContext";
import { LocalStorageManager } from "../classes/LocalStorageManager";
import { useWebSocketContext } from "../hooks/useWebSocketContext";

function UserDetails() {
  const navigate = useNavigate();

  const { user, setUser } = useUserContext();
  const { send } = useWebSocketContext();

  const handleLogout = () => {
    send({
      type: "disconnect",
      sender: user!.username,
      message: `${user!.username} has left the chat..`,
    });
    setTimeout(() => {
      setUser(null);

      LocalStorageManager.removeItem("user");

      navigate({
        to: "/login",
      });
    }, 200);
  };

  return (
    <div className="bg-user-details-bg rounded py-2 px-4 flex gap-4">
      <div>
        <img className="rounded-full max-w-[50px]" src={imgUrl} />
      </div>
      <div>
        <small>Logged in as</small>
        <h3>{user?.username}</h3>
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
