import { supabaseAdmin } from "@/libs/supabaseAdmin";
import { Task } from "@/types";

const createTask = async (newTask: Task): Promise<Task | null> => {
  try {
    // Retrieve session data
    const { data: sessionData, error: sessionError } =
      await supabaseAdmin.auth.getSession();

    if (sessionError) {
      console.error("Error retrieving session:", sessionError.message);
      return null;
    }

    // Retrieve user ID from session data
    const userId = sessionData.session?.user.id;
    if (!userId) {
      console.error("User ID not found in session data");
      return null;
    }

    // Set the user_id field of the new task to the authenticated user's ID
    const taskWithUserId: Task = { ...newTask, user_id: userId };

    // Insert the new task into the database
    // TODO: fix typescript error after creating upload modal
    const { data: createdTask, error: insertError } = await supabaseAdmin
      .from("tasks")
      .insert(taskWithUserId);

    if (insertError) {
      console.error("Error creating task:", insertError.message);
      return null;
    }

    // Return the newly created task
    return createdTask ?? null;
  } catch (error) {
    console.error("Unexpected error in createTask:", (error as Error).message);
    return null;
  }
};

export default createTask;
