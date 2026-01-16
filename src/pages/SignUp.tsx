import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";

export function SignUp() {
  return (
    <form className="w-full flex flex-col gap-4">
      <Input required legend="name" placeholder="Seu nome" />
      <Input
        required
        type="email"
        legend="e-mail"
        placeholder="seu@e-mail.com"
      />
      <Input required type="password" legend="senha" placeholder="123456" />
      <Button type="submit">Cadastrar</Button>

      <Link
        to="/"
        className="text-center text-sm font-semibold text-gray-900 hover:text-black transition ease-linear mt-8"
      >
        Já tenho uma conta
      </Link>
    </form>
  );
}
