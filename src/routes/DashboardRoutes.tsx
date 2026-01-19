import { Routes, Route } from "react-router-dom";
import { DashboardLayout } from "../components/DashboardLayout";
import { Dashboard } from "../pages/Dashboard";
import { CreateNote } from "../pages/CreateNote";

export function DashboardRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/create" element={<CreateNote />} />
      </Route>
    </Routes>
  );
}
