import { RouterProvider } from "@tanstack/react-router";
import { router } from "./router";
import { WebSocketProvider } from "./providers/WebSocketProvider";
import UserProvider from "./providers/UserProvider";
import { useUserContext } from "./hooks/useUserContext";

/**
 * Wrap app in global providers.
 */
function App() {
  return (
    <UserProvider>
      <WebSocketProvider>
        <RouterWithContextProvider />
      </WebSocketProvider>
    </UserProvider>
  );
}

/**
 * Provide global state to the router context.
 * This will enable handling state during route
 * changes.
 */
function RouterWithContextProvider() {
  const { user } = useUserContext();

  return <RouterProvider router={router} context={{ user }} />;
}

export default App;
