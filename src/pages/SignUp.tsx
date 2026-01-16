import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { z, ZodError } from "zod";
import { AxiosError } from "axios";
import { api } from "../services/api";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";

const signUpSchema = z
  .object({
    name: z.string().min(2, { message: "Informe um nome válido!" }),
    email: z.string().email({ message: "Informe um e-mail válido!" }),
    password: z
      .string()
      .trim()
      .min(6, { message: "Informe uma senha com no mínimo 6 dígitos!" }),
    passwordConfirm: z.string({ message: "Confirme a senha!" }),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "As senhas são diferentes!",
    path: ["passwordConfirm"],
  });

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [formErrors, setFormErrors] = useState<
    Record<string, string[] | undefined>
  >({});

  const navigate = useNavigate();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      const data = signUpSchema.parse({
        name,
        email,
        password,
        passwordConfirm,
      });

      await api.post("/users", data);

      navigate("/");
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

      setFormErrors({ api: ["Não foi possível cadastrar!"] });
    }
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

      {formErrors.name && (
        <span className="text-red-500 text-sm font-bold">
          {formErrors.name[0]}
        </span>
      )}

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

      <Input
        required
        type="password"
        legend="Confirme a senha"
        placeholder="123456"
        value={passwordConfirm}
        onChange={(e) => setPasswordConfirm(e.target.value)}
      />

      {formErrors.passwordConfirm && (
        <span className="text-red-500 text-sm font-bold">
          {formErrors.passwordConfirm[0]}
        </span>
      )}

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
