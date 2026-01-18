import { useState } from "react";
import { useAuth } from "../hooks/auth";
import { api } from "../services/api";
import { z, ZodError } from "zod";
import { AxiosError } from "axios";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";

const signInSchema = z.object({
  email: z.string().email({ message: "Informe um e-mail válido!" }),
  password: z
    .string()
    .min(6, { message: "Informe uma senha com no mínimo 6 dígitos!" }),
});

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formErrors, setFormErrors] = useState<
    Record<string, string[] | undefined>
  >({});

  const auth = useAuth();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      const data = signInSchema.parse({
        email,
        password,
      });

      const response = await api.post("/sessions", data);
      auth.save(response.data);
    } catch (error) {
      if (error instanceof ZodError) {
        const { fieldErrors } = error.flatten();
        setFormErrors(fieldErrors);
        return;
      }

      if (error instanceof AxiosError) {
        setFormErrors({
          api: [error.response?.data.message || "Erro no servidor"],
        });
        return;
      }

      setFormErrors({ api: ["Não foi possível entrar!"] });
    }
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

      {formErrors.email && (
        <span className="text-red-500 text-sm font-bold">
          {formErrors.email[0]}
        </span>
      )}

      <Input
        required
        type="password"
        legend="senha"
        placeholder="123456"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {formErrors.password && (
        <span className="text-red-500 text-sm font-bold">
          {formErrors.password[0]}
        </span>
      )}

      {formErrors.api && (
        <div className="text-red-500 text-sm font-bold">
          {formErrors.api[0]}
        </div>
      )}

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
