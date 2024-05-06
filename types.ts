export type TaskType = "daily" | "weekly" | "monthly" | "misc";

export type Priority = "high" | "medium" | "low";

export type TaskStatus =
  | "in progress"
  | "tomorrow"
  | "not started"
  | "completed"
  | "haven't done";

export interface Subtask {
  title: string;
  completed: boolean;
  order: number;
}

export interface Task {
  id: string;
  title: string;
  type: TaskType;
  priority?: Priority;
  startTime?: string;
  endTime?: string;
  status?: TaskStatus;
  alarm?: boolean;
  desc?: string;
  subtasks?: Subtask[]; // Array of subtasks associated with the task
  order: number; // Order of the task, for sorting and display purposes
  user_id: string; // User ID associated with the task (owner of the task)
}
