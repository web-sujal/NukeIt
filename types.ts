export type Status =
  | "in progress"
  | "tomorrow"
  | "not started"
  | "completed"
  | "haven't done";

export interface Task {
  title: string;
  priority?: "high" | "medium" | "low";
  startTime?: string;
  endTime?: string;
  status?: Status;
  alarm?: boolean;
  desc?: string;
}
