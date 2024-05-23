import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

type DeleteTaskResult = {
  success?: boolean;
  error?: string;
};

const deleteTaskById = async (taskId: string): Promise<DeleteTaskResult> => {
  try {
    const supabase = createClientComponentClient();

    const { error } = await supabase.from("tasks").delete().eq("id", taskId);

    if (error) {
      console.error("Error deleting task:", error.message);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error) {
    console.error(
      "Unexpected error while deleting task:",
      (error as Error).message,
    );
    return { success: false, error: (error as Error).message };
  }
};

export default deleteTaskById;
