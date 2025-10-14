import {
  createRootRouteWithContext,
  Outlet,
  redirect,
} from "@tanstack/react-router";
import Sidebar from "../components/Sidebar";
import type User from "../classes/User";
import { WebSocketContext } from "../contexts/WebSocketContext";
import { useWebSocket } from "../hooks/useWebSocket";

interface GlobalRouterContext {
  user: User | null;
}

export const Route = createRootRouteWithContext<GlobalRouterContext>()({
  component: RootComponent,
  beforeLoad: ({ context, location }) => {
    const publicRoutes = ["/login"];

    const isPublic = publicRoutes.includes(location.pathname);
    const user = context.user;

    // Redirect to login page if user is not logged in
    if (!user && !isPublic) {
      throw redirect({ to: "/login" });
    }

    // Redirect to dashboard if user is logged in
    if (user && isPublic) {
      throw redirect({ to: "/" });
    }
  },
});

function RootComponent() {
  const [isReady, latestMessage, send] = useWebSocket();

  return (
    <WebSocketContext value={{ isReady, latestMessage, send }}>
      <div className="flex h-full gap-4">
        <Sidebar />
        <main
          className="bg-surface text-text-base
        shadow-[inset_-10px_20px_80px_8px_rgba(0,0,0,0.35)] flex-1 rounded-4xl p-6"
        >
          <Outlet />
        </main>
      </div>
    </WebSocketContext>
  );
}
