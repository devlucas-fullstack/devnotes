import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";

export function DashboardRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
}
