import { useNavigate } from "react-router-dom";

export function Dashboard() {
  const navigate = useNavigate();

  function createNote() {
    navigate("/create");
  }

  return (
    <div>
      <div className="w-full lg:max-w-270.5 flex flex-col mx-auto bg-gray-300 p-10 rounded-2xl my-8">
        <h1 className="text-xl font-bold flex-1 border-b border-b-gray-400 pb-6">
          Notas
        </h1>
        <div className="mt-6 w-full flex flex-row flex-wrap gap-5">
          <p>Lorem ipsum dolor sit amet </p>
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
