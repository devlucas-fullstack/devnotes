import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { AxiosError } from "axios";
import { NoteItem, type NoteItemProps } from "../components/NoteItem";
import { api } from "../services/api";

type NotesResponse = NotesAPIResponse[];

export function Dashboard() {
  const [notes, setNotes] = useState<NoteItemProps[]>([]);
  const [formErrors, setFormErrors] = useState<Record<string, string[]>>({});

  const navigate = useNavigate();

  async function fetchNotes() {
    try {
      const response = await api.get<NotesResponse>("/notes");

      setNotes(
        response.data.map((note) => ({
          id: note.id,
          description: note.description,
          category: note.category,
        })),
      );
    } catch (error) {
      if (error instanceof AxiosError) {
        setFormErrors({
          api: [error.response?.data.message || "Erro no servidor"],
        });
        return;
      }
    }
  }

  function createNote() {
    navigate("/create");
  }

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div>
      <div className="w-full lg:max-w-270.5 flex flex-col mx-auto bg-gray-300 p-10 rounded-2xl my-8">
        <h1 className="text-xl font-bold flex-1 border-b border-b-gray-400 pb-6">
          Notas
        </h1>
        <div className="flex flex-col gap-3 mt-8">
          {notes.map((item) => (
            <NoteItem to={`/refund/${item.id}`} key={item.id} data={item} />
          ))}
        </div>
      </div>
      <button
        type="button"
        className="
    fixed
    bottom-4
    right-4
    bg-blue-600
    text-white
    px-4
    py-2
    rounded-full
    shadow-lg
    hover:bg-blue-700
  "
        onClick={createNote}
      >
        +
      </button>
    </div>
  );
}
