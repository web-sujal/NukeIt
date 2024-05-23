import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import { Task } from "@/types";

interface GetUserTasksResult {
  data: Task[] | null;
  error: string | null;
}

const getUserTasks = async (): Promise<GetUserTasksResult> => {
  try {
    const supabase = createClientComponentClient();

    // Retrieve session data
    const {
      data: { session },
      error: sessionError,
    } = await supabase.auth.getSession();

    if (sessionError) {
      console.error("Error retrieving session:", sessionError.message);
      return { data: null, error: sessionError.message };
    }

    const { data, error } = await supabase
      .from("tasks")
      .select("*")
      .eq("user_id", session?.user.id)
      .order("order", { ascending: true });

    if (error) {
      console.error("Error fetching user tasks:", error.message);
      return { data: null, error: error.message };
    }

    return { data, error: null };
  } catch (error) {
    console.error(
      "Unexpected error while fetching tasks:",
      (error as Error).message,
    );
    return { data: null, error: (error as Error).message };
  }
};

export default getUserTasks;
