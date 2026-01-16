import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";

export function SignIn() {
  return (
    <form className="w-full flex flex-col gap-4">
      <Input
        required
        type="email"
        legend="e-mail"
        placeholder="seu@email.com"
      />
      <Input required type="password" legend="senha" placeholder="123456" />
      <Button type="submit">Entrar</Button>

      <Link
        to="/signup"
        className="text-center text-sm font-semibold text-gray-900 hover:text-black transition ease-linear mt-8"
      >
        Criar conta
      </Link>
    </form>
  );
}
