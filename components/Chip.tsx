"use client";

import { forwardRef } from "react";
import * as Select from "@radix-ui/react-select";
import { twMerge } from "tailwind-merge";
import { GoDotFill } from "react-icons/go";

import { TaskStatus } from "@/types";

interface ChipProps extends React.InputHTMLAttributes<HTMLInputElement> {
  status: TaskStatus | undefined;
  onValueChange: (value: TaskStatus) => void;
  disabled?: boolean;
}

const getColor = (status: TaskStatus): string => {
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

const getDotColor = (status: TaskStatus): string => {
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

const Chip: React.FC<ChipProps> = ({
  status,
  onValueChange,
  disabled = false,
}) => {
  return (
    <Select.Root
      defaultValue="not started"
      value={status}
      disabled={disabled}
      onValueChange={onValueChange}
    >
      <Select.Trigger
        aria-label="task status"
        className={twMerge(
          `flex items-center justify-between gap-x-1 rounded-2xl px-3 py-1 text-xs text-white focus:border-none focus:outline-none`,
          status && getColor(status),
        )}
      >
        <Select.Icon>
          <GoDotFill
            className={twMerge(
              "hidden md:inline-flex",
              status && getDotColor(status),
            )}
            size={15}
          />
        </Select.Icon>
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

interface SelectItemProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: TaskStatus;
  label: string;
}

const SelectItem = forwardRef<HTMLInputElement, SelectItemProps>(
  ({ value, label, ...props }, ref) => {
    return (
      <Select.Item
        value={value}
        className="flex items-center rounded-md px-2 py-1 text-primary-subheading transition-all data-[highlighted]:bg-primary/35 data-[highlighted]:text-black data-[highlighted]:outline-none dark:text-secondary-subheading dark:data-[highlighted]:bg-secondary/35 dark:data-[highlighted]:text-white"
        {...props}
        ref={ref}
      >
        <Select.Icon>
          <GoDotFill className={getDotColor(value)} size={15} />
        </Select.Icon>
        <Select.ItemText>{label}</Select.ItemText>
      </Select.Item>
    );
  },
);

SelectItem.displayName = "SelectItem";

export default Chip;
