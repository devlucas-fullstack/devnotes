import { BrowserRouter } from "react-router-dom";
import { AuthRoutes } from "./AuthRoutes";

export function Routes() {
  return (
    <BrowserRouter>
      <AuthRoutes />
    </BrowserRouter>
  );
}
