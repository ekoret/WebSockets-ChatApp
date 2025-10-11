import { useState, type ReactNode } from "react";
import Sidebar from "./Sidebar";
import { AppContext, type IUserState } from "../contexts/AppContext";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  const user: IUserState = {
    username: "ekoret",
    connected: false,
    loggedInAt: null,
  };

  const initialGlobalState = {
    user,
  };

  const [globalData, setGlobalData] = useState(initialGlobalState);

  return (
    <AppContext value={{ globalData, setGlobalData }}>
      <div className="flex h-full gap-4">
        <Sidebar />
        <main className="bg-surface text-text-base flex-1 rounded-4xl p-6">
          {children}
        </main>
      </div>
    </AppContext>
  );
}

export default Layout;
