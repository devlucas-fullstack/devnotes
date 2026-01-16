import { Outlet } from "react-router-dom";
import icon from "../../public/icon.svg";

export function AuthLayout() {
  return (
    <div className="w-screen h-screen bg-gray-900 flex justify-center items-center">
      <main className="w-full md:w-115.5 sm:mx-4 bg-gray-300 rounded-2xl p-8 flex flex-col justify-center items-center">
        <div className="flex justify-center items-center gap-2.5 mb-8">
          <img src={icon} alt="Ícone de nota" className="w-5 h-5" />
          <h1 className="text-lg font-bold">DevNotes</h1>
        </div>
        <Outlet />
      </main>
    </div>
  );
}
