import { Button } from "../components/Button";

export function CreateNote() {
  return (
    <form className="w-full lg:max-w-lg flex flex-col bg-gray-300 p-10 rounded-2xl mx-auto my-8 gap-4">
      <h1 className="text-xl font-bold">Criar nota</h1>
      <textarea
        name="notes"
        id="notes"
        className="
    w-full
    rounded-lg
    border
    border-gray-900
    bg-gray-300
    px-3
    py-2
    text-sm
    focus:outline-none
    focus:ring-2
    focus:ring-gray-900
    focus:border-black
    resize-none
  "
        placeholder="Digite sua nota..."
      ></textarea>
      <select
        name="category"
        id="category"
        className="
    w-full
    rounded-lg
    border
    border-gray-900
    bg-gray-300
    px-3
    py-2
    text-sm
    focus:outline-none
    focus:ring-2
    focus:ring-gray-900
    focus:border-black
  "
      >
        <option value="" disabled>
          Selecione uma opção
        </option>
        <option value="professional">Profissional</option>
        <option value="guys">Pessoal</option>
        <option value="workouts">Treinos</option>
      </select>
      <Button type="button">Criar</Button>
    </form>
  );
}
