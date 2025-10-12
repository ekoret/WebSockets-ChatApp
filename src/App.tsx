import { RouterProvider } from "@tanstack/react-router";
import { router } from "./router";
import { useState } from "react";
import { UserContext, type IUserContext } from "./contexts/UserContext";
import type User from "./classes/User";

function App() {
  const [user, setUser] = useState<User | null>(null);

  const userContextValues: IUserContext = {
    user,
    setUser,
  };

  return (
    <UserContext value={userContextValues}>
      <RouterProvider router={router} context={{ user }} />
    </UserContext>
  );
}

export default App;
