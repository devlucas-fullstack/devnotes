import { Outlet } from "react-router-dom";
import { Header } from "./Header";

export function DashboardLayout() {
  return (
    <div className="w-screen h-full bg-gray-900 flex flex-col items-center">
      <main className="p-3 w-full">
        <Header />
        <Outlet />
      </main>
    </div>
  );
}
