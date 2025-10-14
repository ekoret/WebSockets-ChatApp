import { RouterProvider } from "@tanstack/react-router";
import { router } from "./router";
import { useState } from "react";
import { UserContext } from "./contexts/UserContext";
import type User from "./classes/User";
import { LocalStorageManager } from "./classes/LocalStorageManager";

function App() {
  const userLocalStorage = LocalStorageManager.getItem("user");

  const initialUser: User | null = userLocalStorage
    ? JSON.parse(userLocalStorage)
    : null;

  const [user, setUser] = useState<User | null>(initialUser);

  return (
    <UserContext value={{ user, setUser }}>
      <RouterProvider router={router} context={{ user }} />
    </UserContext>
  );
}

export default App;
