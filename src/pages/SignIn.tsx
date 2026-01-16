import { useState } from "react";
import { z, ZodError } from "zod";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";

const signInSchema = z.object({
  email: z.string().email({ message: "Informe um e-mai válido!" }),
  password: z
    .string()
    .min(6, { message: "Informe uma senha com no mínimo 6 dígitos!" }),
});

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      const data = signInSchema.parse({
        email,
        password,
      });

      console.log(data);
    } catch (error) {}
  }

  return (
    <form className="w-full flex flex-col gap-4" onSubmit={onSubmit}>
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
