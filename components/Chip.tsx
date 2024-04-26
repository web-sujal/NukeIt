"use client";

import * as Select from "@radix-ui/react-select";
import { BsArrowDown } from "react-icons/bs";
import { ImCheckmark } from "react-icons/im";
import { twMerge } from "tailwind-merge";

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
      bgColor = "bg-green-700";
      break;
    case "haven't done":
      bgColor = "bg-red-700";
      break;
    case "tomorrow":
      bgColor = "bg-orange-700";
      break;
    case "not started":
      bgColor = "bg-gray-700";
      break;
    case "in progress":
    default:
      bgColor = "bg-blue-700";
      break;
  }
  return bgColor;
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
          `flex items-center justify-between gap-x-2 rounded-2xl px-3 py-1 text-xs text-white`,
          getColor(status),
        )}
      >
        <Select.Value>{status}</Select.Value>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content>
          <Select.ScrollUpButton />
          <Select.Viewport>
            <Select.Group>
              <Select.Label>To-do</Select.Label>
              <Select.Item value="tomorrow">
                <Select.ItemText>Tomorrow</Select.ItemText>
              </Select.Item>

              <Select.Item value="not started">
                <Select.ItemText>Not started</Select.ItemText>
              </Select.Item>

              <Select.Item value="haven't done">
                <Select.ItemText>Unfinished/not done</Select.ItemText>
              </Select.Item>
            </Select.Group>

            <Select.Separator />

            <Select.Group>
              <Select.Label>In progress</Select.Label>
              <Select.Item value="in progress">
                <Select.ItemText>In progress</Select.ItemText>
              </Select.Item>
            </Select.Group>

            <Select.Separator />

            <Select.Group>
              <Select.Label>Complete</Select.Label>
              <Select.Item value="completed">
                <Select.ItemText>Done</Select.ItemText>
              </Select.Item>
            </Select.Group>

            <Select.Separator />
          </Select.Viewport>
          <Select.ScrollDownButton />
          <Select.Arrow />
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

export default Chip;
