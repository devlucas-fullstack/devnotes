import { useState } from "react";
import { z, ZodError } from "zod";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log(name, email, password);
  }

  return (
    <form className="w-full flex flex-col gap-4" onSubmit={onSubmit}>
      <Input
        required
        legend="name"
        placeholder="Seu nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        required
        type="email"
        legend="e-mail"
        placeholder="seu@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        required
        type="password"
        legend="senha"
        placeholder="123456"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Input
        required
        type="password"
        legend="Confirme a senha"
        placeholder="123456"
        value={passwordConfirm}
        onChange={(e) => setPasswordConfirm(e.target.value)}
      />
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
