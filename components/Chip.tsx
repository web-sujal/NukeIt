"use client";

import * as Select from "@radix-ui/react-select";
import { twMerge } from "tailwind-merge";
import { GoDotFill } from "react-icons/go"; // TODO: improve ui with dot on lg screens

import { Status } from "@/types";

interface ChipProps {
  status:
    | "in progress"
    | "tomorrow"
    | "not started"
    | "completed"
    | "haven't done";
}

const getColor = (status: string): string => {
  let bgColor = "";

  switch (status) {
    case "completed":
      bgColor = "bg-green-700 dark:bg-green-800";
      break;
    case "haven't done":
      bgColor = "bg-red-700 dark:bg-red-800";
      break;
    case "tomorrow":
      bgColor = "bg-orange-700 dark:bg-orange-800";
      break;
    case "not started":
      bgColor = "bg-gray-700 dark:bg-gray-800";
      break;
    case "in progress":
    default:
      bgColor = "bg-blue-700 dark:bg-blue-800";
      break;
  }
  return bgColor;
};

const getDotColor = (status: string): string => {
  let color = "";

  switch (status) {
    case "completed":
      color = "text-green-400";
      break;
    case "haven't done":
      color = "text-red-400";
      break;
    case "tomorrow":
      color = "text-orange-400";
      break;
    case "not started":
      color = "text-gray-400";
      break;
    case "in progress":
    default:
      color = "text-blue-400";
      break;
  }
  return color;
};

const Chip: React.FC<ChipProps> = ({ status }) => {
  return (
    <Select.Root
      defaultValue="not started"
      value={status}
      // open={true}
      // onOpenChange={onChange}
      // onValueChange={onValueChange}
    >
      <Select.Trigger
        aria-label="task status"
        className={twMerge(
          `flex items-center justify-between gap-x-1 rounded-2xl px-3 py-1 text-xs text-white`,
          getColor(status),
        )}
      >
        {/* <Select.Icon>
          <GoDotFill className={getDotColor(status)} size={15} />
        </Select.Icon> */}
        <Select.Value>{status}</Select.Value>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content
          position="popper"
          className="overflow-hidden rounded-2xl bg-modal-highlight-primary py-2  dark:bg-modal-highlight-secondary dark:text-white"
        >
          <Select.Viewport className="p-2">
            {/* To-do */}
            <Select.Group>
              <Select.Label className="text-center text-xs leading-[25px] opacity-65">
                To-do
              </Select.Label>
              <SelectItem value="tomorrow" label="Tomorrow" />
              <SelectItem value="not started" label="Not started" />
              <SelectItem value="haven't done" label="Unfinished/not done" />
            </Select.Group>

            <Select.Separator className="m-[5px] h-[1px] bg-primary-heading opacity-30 dark:bg-secondary-heading" />

            {/* In progress */}
            <Select.Group>
              <Select.Label className="text-center text-xs leading-[25px] opacity-65">
                In progress
              </Select.Label>
              <SelectItem value="in progress" label="In progress" />
            </Select.Group>

            <Select.Separator className="m-[5px] h-[1px] bg-primary-heading opacity-30 dark:bg-secondary-heading" />

            {/* Complete */}
            <Select.Group>
              <Select.Label className="text-center text-xs leading-[25px] opacity-65">
                Complete
              </Select.Label>
              <SelectItem value="completed" label="Done" />
            </Select.Group>
          </Select.Viewport>
          <Select.Arrow />
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

const SelectItem = ({ value, label }: { value: Status; label: string }) => {
  return (
    <Select.Item
      value={value}
      className="flex items-center rounded-md px-2 py-1 text-primary-subheading transition-all data-[highlighted]:bg-primary/35 data-[highlighted]:text-black data-[highlighted]:outline-none dark:text-secondary-subheading dark:data-[highlighted]:bg-secondary/35 dark:data-[highlighted]:text-white"
    >
      <Select.ItemText>{label}</Select.ItemText>
    </Select.Item>
  );
};

export default Chip;
