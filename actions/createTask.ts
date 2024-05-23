import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import { Task } from "@/types";

type CreateTaskResult = {
  success?: boolean;
  error?: string;
};

const createTask = async (newTask: Task): Promise<CreateTaskResult> => {
  try {
    const supabase = createClientComponentClient();

    // Retrieve session data
    const {
      data: { session },
      error: sessionError,
    } = await supabase.auth.getSession();

    if (sessionError) {
      console.error("Error retrieving session:", sessionError.message);
      return { success: false, error: sessionError.message };
    }

    // Retrieve user ID from session data
    const userId = session?.user.id;
    if (!userId) {
      const errorMessage = "User ID not found in session data";
      console.error(errorMessage);
      return { success: false, error: errorMessage };
    }

    // Insert the new task into the database
    const { error: insertError } = await supabase.from("tasks").insert({
      ...newTask,
      user_id: userId,
    });

    if (insertError) {
      console.error("Error creating task:", insertError.message);
      return { success: false, error: insertError.message };
    }

    return { success: true };
  } catch (error) {
    console.error("Unexpected error in createTask:", (error as Error).message);
    return { error: (error as Error).message };
  }
};

export default createTask;
