export interface Task {
  title: string;
  priority?: "high" | "medium" | "low";
  startTime?: string;
  endTime?: string;
  status?:
    | "in progress"
    | "tomorrow"
    | "not started"
    | "completed"
    | "haven't done";
  alarm?: boolean;
  desc?: string;
}
