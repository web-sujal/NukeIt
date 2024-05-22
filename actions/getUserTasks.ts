import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import { Task } from "@/types";

const getUserTasks = async (): Promise<Task[]> => {
  try {
    const supabase = createServerComponentClient({
      cookies: cookies,
    });

    // Retrieve session data
    const {
      data: { session },
      error: sessionError,
    } = await supabase.auth.getSession();

    if (sessionError) {
      console.error("Error retrieving session:", sessionError.message);
      return [];
    }

    const { data, error } = await supabase
      .from("tasks")
      .select("*")
      .eq("user_id", session?.user.id)
      .order("order", { ascending: true });

    if (error) {
      console.error("Error fetching user tasks:", error.message);
    }

    return (data as any) || [];
  } catch (error) {
    console.error(
      "Unexpected error while fetching tasks:",
      (error as Error).message,
    );
    return [];
  }
};

export default getUserTasks;
