import type { ReactNode } from "react";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="flex h-full gap-4">
      <Sidebar />
      <main className="flex-1 bg-main rounded p-4">{children}</main>
    </div>
  );
}

export default Layout;
