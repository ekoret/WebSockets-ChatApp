import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { AppContext, type IUserState } from "../contexts/AppContext";
import Sidebar from "../components/Sidebar";

export const Route = createRootRoute({
  component: RootComponent,
});

export interface LayoutProps {
  children: React.ReactNode;
}

function RootComponent() {
  const user: IUserState = {
    username: "ekoret",
    connected: true,
    loggedInAt: null,
  };

  const initialGlobalState = {
    user,
  };

  const [globalData, setGlobalData] = React.useState(initialGlobalState);

  return (
    <AppContext value={{ globalData, setGlobalData }}>
      <div className="flex h-full gap-4">
        <Sidebar />
        <main
          className="bg-surface text-text-base
        shadow-[inset_-10px_20px_80px_8px_rgba(0,0,0,0.35)] flex-1 rounded-4xl p-6"
        >
          <Outlet />
        </main>
      </div>
    </AppContext>
  );
}
