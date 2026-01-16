import { Routes, Route } from "react-router-dom";
import { AuthLayout } from "../components/AuthLayout";
import { SignUp } from "../pages/SignUp";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="/" element={<SignUp />} />
      </Route>
    </Routes>
  );
}
