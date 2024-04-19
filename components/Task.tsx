"use client";

import { IoAlarmOutline } from "react-icons/io5";
import { FaFlag } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";

import Chip from "./Chip";

interface TaskProps {
  title: string;
  priority?: "high" | "medium" | "low";
  startTime?: string;
  endTime?: string;
  status:
    | "in progress"
    | "tomorrow"
    | "not started"
    | "completed"
    | "haven't done";
  alarm?: boolean;
  desc?: string;
}

const Task: React.FC<TaskProps> = ({
  title,
  startTime,
  endTime,
  status,
  alarm,
  desc,
  priority = "low",
}) => {
  let bgColor = "";

  switch (status) {
    case "completed":
      bgColor = "bg-green-100 dark:bg-green-700/15";
      break;
    case "haven't done":
      bgColor = "bg-red-700/20 dark:bg-red-800/10";
      break;
    case "tomorrow":
    case "not started":
    case "in progress":
    default:
      bgColor = "bg-modal-highlight-primary dark:bg-modal-highlight-secondary";
      break;
  }

  return (
    <div
      className={twMerge(
        "flex min-h-16 w-full flex-col rounded-md p-2 py-2",
        bgColor,
      )}
    >
      {/* top */}
      <div className="flex w-full items-center justify-between gap-x-2">
        <div className="flex items-center justify-between gap-x-2">
          <FaFlag
            className={twMerge(
              "text-green-500",
              priority === "medium" && "text-yellow-400",
              priority === "high" && "text-red-500",
            )}
            size={15}
          />
          <span className="truncate text-lg">{title}</span>
        </div>

        <Chip status={status} />
      </div>

      {/* bottom */}
      <div className="flex w-full items-center justify-between gap-x-3 px-1 text-sm text-primary-subheading dark:text-secondary-subheading">
        <div className="max-w-xs flex-1 truncate pl-5">{desc}</div>
        <div className="flex-1">
          {startTime}
          {endTime && ` - ${endTime}`}
        </div>
        <div className="flex-1">{alarm && <IoAlarmOutline size={20} />}</div>
      </div>
    </div>
  );
};

export default Task;
