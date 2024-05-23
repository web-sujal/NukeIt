"use client";

import { twMerge } from "tailwind-merge";
import { IoAlarmOutline } from "react-icons/io5";
import { FaFlag } from "react-icons/fa6";
import { MdOutlineDragIndicator } from "react-icons/md";

import { TaskStatus, Task as TaskType } from "@/types";
import { convertTo12HourFormat } from "@/libs/helpers";
import useEditTaskModal from "@/hooks/useEditTaskModal";
import useTaskStore from "@/hooks/useTaskStore";

import Chip from "./Chip";
import Checkbox from "./Checkbox";
import toast from "react-hot-toast";

interface TaskProps {
  taskData: TaskType;
}

const Task: React.FC<TaskProps> = ({ taskData }) => {
  const { onOpen } = useEditTaskModal();
  const { updateTask, error } = useTaskStore();

  const { title, start_time, end_time, status, alarm, desc, priority } =
    taskData;

  const onChange = async (status: TaskStatus) => {
    try {
      const updatedTask: TaskType = {
        ...taskData,
        status,
      };

      await updateTask(updatedTask);

      if (error) {
        toast.error(`Failed to update task: ${error}`);
        console.error("failed to update task: ", error);
        return;
      }

      toast.success("Task updated successfully.");
    } catch (error) {
      toast.error("An unexpected error occurred.");
      console.error("Unexpected error in updating task status: ", error);
    }
  };

  const onCheckboxChange = async (value: any) => {
    toast.success("oye hoye te kudiyan sherdiya");
    console.log("value: ", value);
  };

  const task: TaskType = {
    ...taskData,
  };

  return (
    <div
      onClick={() => onOpen(task)}
      className={twMerge(
        "flex cursor-pointer items-center justify-between gap-x-2 rounded-md border border-neutral-800/20 p-2 pl-3 text-primary-subheading dark:border-modal-highlight-secondary/80 dark:text-secondary-subheading",
        status === "completed" &&
          "border-none bg-green-100 dark:bg-green-700/15",
        status === "haven't done" &&
          "border-none bg-red-100 dark:bg-red-800/15",
      )}
    >
      <Checkbox
        isChecked={status === "completed"}
        onChange={onCheckboxChange}
      />

      <div className="flex w-full flex-col">
        {/* title and status */}
        <div className="flex items-center justify-between text-black md:file:text-lg dark:text-white">
          <div className="flex items-center justify-between gap-x-2">
            <FaFlag
              className={twMerge(
                "text-green-500",
                priority === "medium" && "text-yellow-400",
                priority === "high" && "text-red-500",
              )}
              size={15}
            />
            <span
              className={twMerge(
                "truncate font-semibold",
                status === "completed" && "line-through transition",
              )}
            >
              {title}
            </span>
          </div>

          <div className="md:pr-5">
            <Chip status={status} onValueChange={onChange} />
          </div>
        </div>

        {/* desc and others */}
        <div className="flex w-full items-center justify-between gap-x-1 text-sm md:gap-x-3">
          <div className="max-w-xs flex-1 truncate">{desc}</div>
          <div className="flex-1 text-xs md:text-sm">
            {start_time && convertTo12HourFormat(start_time)}
            {end_time && ` - ${convertTo12HourFormat(end_time)}`}
          </div>
          <div className="flex-1">
            {alarm && (
              <IoAlarmOutline
                className="mx-auto text-center lg:mx-0 lg:text-left"
                size={20}
              />
            )}
          </div>
        </div>
      </div>

      <MdOutlineDragIndicator
        size={40}
        className="text-primary-heading dark:text-secondary-subheading"
      />
    </div>
  );
};

export default Task;
