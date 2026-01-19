import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { api } from "../services/api";
import { z, ZodError } from "zod";
import { AxiosError } from "axios";
import { Button } from "../components/Button";

const noteSchema = z.object({
  description: z
    .string()
    .trim()
    .min(3, { message: "A nota precisa ter no mínimo 3 caracteres!" }),
  category: z.enum(["professional", "guys", "workouts"]),
});

export function CreateNote() {
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [formErrors, setFormErrors] = useState<
    Record<string, string[] | undefined>
  >({});

  const navigate = useNavigate();
  const params = useParams<{ id: string }>();
  const isEditing = Boolean(params.id);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      const data = noteSchema.parse({ description, category });

      if (isEditing) {
        await api.put(`/notes/${params.id}`, data);
      } else {
        await api.post("/notes", data);
      }

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

      setFormErrors({ api: ["Não foi possível criar nota!"] });
    }
  }

  async function fetchNotes(id: string) {
    const { data } = await api.get(`/notes/${id}`);

    setCategory(data.category);
    setDescription(data.description);
  }

  useEffect(() => {
    if (params.id) {
      fetchNotes(params.id);
    }
  }, [params.id]);

  return (
    <form
      className="w-full lg:max-w-lg flex flex-col bg-gray-300 p-10 rounded-2xl mx-auto my-8 gap-4"
      onSubmit={onSubmit}
    >
      <h1 className="text-xl font-bold">
        {isEditing ? "Editar nota" : "Criar nota"}
      </h1>
      <textarea
        required
        name="notes"
        id="notes"
        rows={10}
        className="
    w-full
    rounded-lg
    border
    border-gray-700
    bg-gray-300
    px-3
    py-2
    text-sm
    focus:outline-none
    focus:border-2
    focus:ring-gray-900
    focus:border-black
    resize-none
  "
        placeholder="Digite sua nota..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>

      {formErrors.description && (
        <span className="text-red-500 text-sm font-bold">
          {formErrors.description[0]}
        </span>
      )}

      <select
        required
        name="category"
        id="category"
        className="
    w-full
    rounded-lg
    border
    border-gray-700
    bg-gray-300
    px-3
    py-2
    text-sm
    focus:outline-none
    focus:border-2
    focus:ring-gray-900
    focus:border-black
  "
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="" disabled>
          Selecione uma opção
        </option>
        <option value="professional">Profissional</option>
        <option value="guys">Pessoal</option>
        <option value="workouts">Treinos</option>
      </select>

      {formErrors.category && (
        <span className="text-red-500 text-sm font-bold">
          {formErrors.category[0]}
        </span>
      )}

      {formErrors.api && (
        <div className="text-red-500 text-sm font-bold">
          {formErrors.api[0]}
        </div>
      )}

      <Button type="submit">{isEditing ? "Salvar" : "Criar"}</Button>
    </form>
  );
}
