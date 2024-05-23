import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import { Task } from "@/types";

type UpdateTaskResult = {
  success?: boolean;
  error?: string | null;
};

const updateTask = async (updatedTask: Task): Promise<UpdateTaskResult> => {
  try {
    const supabase = createClientComponentClient();

    const { error } = await supabase
      .from("tasks")
      .update(updatedTask)
      .eq("id", updatedTask.id);

    if (error) {
      console.error("Error updating task:", error.message);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error) {
    console.error(
      "Unexpected error while updating task:",
      (error as Error).message,
    );
    return { success: false, error: (error as Error).message };
  }
};

export default updateTask;
