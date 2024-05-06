import { supabaseAdmin } from "@/libs/supabaseAdmin";
import { Task } from "@/types";

const getUserTasks = async (): Promise<Task[]> => {
  try {
    // Retrieve session data
    const { data: sessionData, error: sessionError } =
      await supabaseAdmin.auth.getSession();

    if (sessionError) {
      console.error("Error retrieving session:", sessionError.message);
      return [];
    }

    // Retrieve user ID from session data
    const userId = sessionData.session?.user.id;
    if (!userId) {
      console.error("User ID not found in session data");
      return [];
    }

    // Fetch user tasks
    const { data, error } = await supabaseAdmin
      .from("tasks")
      .select("*")
      .eq("user_id", userId || "")
      .order("order", { ascending: true });

    if (error) {
      console.error("Error fetching user tasks:", error.message);
      return [];
    }

    return (data as any) || [];
  } catch (error) {
    console.error(
      "Unexpected error in getUserTasks:",
      (error as Error).message,
    );
    return [];
  }
};

export default getUserTasks;
