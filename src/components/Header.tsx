import logo from "../assets/icon.svg";
import logout from "../assets/logout3.svg";
import { useAuth } from "../hooks/auth";

export function Header() {
  const { session, remove } = useAuth();

  return (
    <header className="w-full flex justify-between">
      <div className="flex items-center gap-2">
        <img src={logo} alt="Logo Notes" className="w-5 h-5" />
        <h1 className="text-lg font-bold text-gray-100">DevNotes</h1>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-sm font-semibold text-gray-100">
          Olá, {session?.user.name}
        </span>
        <img
          src={logout}
          alt="Sair"
          className="w-6 h-6 cursor-pointer hover:opacity-75 transition ease-linear"
          onClick={remove}
        />
      </div>
    </header>
  );
}
