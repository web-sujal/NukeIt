import { TaskType } from "@/types";

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
