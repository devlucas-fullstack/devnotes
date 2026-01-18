import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../hooks/auth";
import { AuthRoutes } from "./AuthRoutes";
import { DashboardRoutes } from "./DashboardRoutes";

export function Routes() {
  const { session } = useAuth();

  return (
    <BrowserRouter>
      {session?.user ? <DashboardRoutes /> : <AuthRoutes />}
    </BrowserRouter>
  );
}
