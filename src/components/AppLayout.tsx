import { ReactNode } from "react";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";

const AppLayout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <AppHeader />
    <main className="flex-1">{children}</main>
    <AppFooter />
  </div>
);

export default AppLayout;
