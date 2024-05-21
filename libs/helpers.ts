import { TaskStatus, TaskType } from "@/types";

export function getCurrentTime(): string {
  const d = new Date();
  const fullTime = d.toLocaleTimeString();

  const time = fullTime.slice(0, 5);
  const [hours, minutes] = time.split(":");

  return `${hours.toString().padStart(2, "0")}:${minutes}`;
}

export function convertTo12HourFormat(time: string): string {
  const [hours, minutes] = time.split(":");
  const hour = +hours % 12 || 12; // Convert '0' to '12'
  const period = +hours < 12 ? "AM" : "PM";
  return `${hour.toString().padStart(2, "0")}:${minutes} ${period}`;
}

export function getTaskTypeFromRoute(pathName: string): TaskType {
  switch (pathName) {
    case "/":
      return "daily";

    case "/this-week":
      return "weekly";

    case "/this-month":
      return "monthly";

    case "/misc":
      return "misc";

    default:
      return "daily";
  }
}

export const getColor = (status: TaskStatus): string => {
  switch (status) {
    case "completed":
      return "bg-green-700 dark:bg-green-800";
    case "haven't done":
      return "bg-red-700 dark:bg-red-800";
    case "tomorrow":
      return "bg-orange-700 dark:bg-orange-800";
    case "not started":
      return "bg-gray-700 dark:bg-gray-800";
    case "in progress":
    default:
      return "bg-blue-700 dark:bg-blue-800";
  }
};

export const getDotColor = (status: TaskStatus): string => {
  switch (status) {
    case "completed":
      return "text-green-400";
    case "haven't done":
      return "text-red-400";
    case "tomorrow":
      return "text-orange-400";
    case "not started":
      return "text-gray-400";
    case "in progress":
    default:
      return "text-blue-400";
  }
};
