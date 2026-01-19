type CategoryNote = "professional" | "guys" | "workouts";

type NotesAPIResponse = {
  id: string;
  userId: string;
  description: string;
  category: CategoryNote;
  user: {
    email: string;
  };
};
