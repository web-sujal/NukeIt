import { supabaseAdmin } from "@/libs/supabaseAdmin";
import { Task } from "@/types";

const updateTask = async (
  taskId: string,
  updatedTask: Partial<Task>,
): Promise<Task | null> => {
  try {
    // TODO: fix ts type error after creating update modal
    const { data: updatedTaskData, error } = await supabaseAdmin
      .from("tasks")
      .update(updatedTask)
      .eq("id", taskId)
      .single();

    if (error) {
      console.error("Error updating task:", error.message);
      return null;
    }

    return updatedTaskData || null;
  } catch (error) {
    console.error(
      "Unexpected error while updating task:",
      (error as Error).message,
    );
    return null;
  }
};

export default updateTask;
