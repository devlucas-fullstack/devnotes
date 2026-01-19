import { Link } from "react-router-dom";

export type NoteItemProps = {
  id: string;
  description: string;
  category: "professional" | "guys" | "workouts";
};

const categoryLabels = {
  professional: "Profissional",
  guys: "Pessoal",
  workouts: "Treinos",
};

type Props = React.ComponentProps<typeof Link> & {
  data: NoteItemProps;
};

export function NoteItem({ data, ...rest }: Props) {
  return (
    <Link {...rest} className="flex flex-col items-center gap-3">
      <div className="w-full rounded-xl border border-zinc-200 bg-white p-4 shadow-sm transition hover:shadow-md  hover:bg-gray-600 cursor-pointer">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
            {categoryLabels[data.category]}
          </span>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-zinc-800 line-clamp-3">
          {data.description}
        </p>
      </div>
    </Link>
  );
}
