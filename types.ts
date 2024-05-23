// import Stripe from "stripe";

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
  id?: string;
  title: string;
  type: TaskType;
  priority?: Priority;
  start_time?: string;
  end_time?: string;
  status?: TaskStatus;
  alarm?: boolean;
  desc?: string;
  subtasks?: Subtask[]; // Array of subtasks associated with the task
  order?: number; // Order of the task, for sorting and display purposes
  user_id?: string; // User ID associated with the task (owner of the task)
}

export interface Inputs {
  title: string;
  desc?: string;
  type: TaskType;
  start_time?: string;
  end_time?: string;
  priority?: Priority;
  status?: TaskStatus;
  alarm?: boolean;
  subtasks?: Subtask[];
  order?: number;
}

export interface UserDetails {
  id: string;
  first_name: string;
  last_name: string;
  full_name?: string;
  avatar_url?: string;
  // billing_address?: Stripe.Address;
  // payment_method?: Stripe.PaymentMethod[Stripe.PaymentMethod.Type];
}
