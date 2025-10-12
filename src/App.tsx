import { RouterProvider } from "@tanstack/react-router";
import { router } from "./router";
import { useState } from "react";
import { AppContext, type IGlobalData } from "./contexts/AppContext";

function App() {
  const [globalData, setGlobalData] = useState<IGlobalData>({});
  const user = globalData.user;
  return (
    <AppContext value={{ globalData, setGlobalData }}>
      <RouterProvider router={router} context={{ user }} />
    </AppContext>
  );
}

export default App;
