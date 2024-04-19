import { twMerge } from "tailwind-merge";

interface ChipProps {
  status:
    | "in progress"
    | "tomorrow"
    | "not started"
    | "completed"
    | "haven't done";
}

const Chip: React.FC<ChipProps> = ({ status }) => {
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

  return (
    <div
      className={twMerge(
        `flex items-center justify-between gap-x-2 rounded-2xl px-3 py-1 text-xs text-white`,
        bgColor,
      )}
    >
      <>{status}</>
    </div>
  );
};

export default Chip;
