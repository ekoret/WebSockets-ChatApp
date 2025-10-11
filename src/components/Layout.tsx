import type { ReactNode } from "react";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="flex h-full gap-4">
      <Sidebar />
      <main className="bg-surface text-text-base flex-1 rounded-4xl p-6">
        {children}
      </main>
    </div>
  );
}

export default Layout;
