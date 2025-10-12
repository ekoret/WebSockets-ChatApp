import { RouterProvider } from "@tanstack/react-router";
import { router } from "./router";

function App() {
  const user = null;

  return <RouterProvider router={router} context={{ user }} />;
}

export default App;
