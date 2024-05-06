import { supabaseAdmin } from "@/libs/supabaseAdmin";

const deleteTaskById = async (taskId: string): Promise<boolean> => {
  try {
    const { error } = await supabaseAdmin
      .from("tasks")
      .delete()
      .eq("id", taskId);

    if (error) {
      console.error("Error deleting task:", error.message);
      return false;
    }

    return true;
  } catch (error) {
    console.error(
      "Unexpected error while deleting task:",
      (error as Error).message,
    );
    return false;
  }
};

export default deleteTaskById;
