"use client";

interface TaskProps {
  title: string;
  startTime?: string;
  endTime?: string;
  status: "in progress" | "tomorrow" | "not started" | "completed";
  alarm?: "set later" | "done";
  desc?: string;
}

const Task: React.FC<TaskProps> = ({
  title,
  startTime,
  endTime,
  status,
  alarm,
  desc,
}) => {
  return (
    <div className="flex w-full flex-col space-y-2">
      <div className="flex w-full items-center justify-between">{title}</div>
    </div>
  );
};

export default Task;

/*
  - **Task Properties**:
    - title: string; 
    - startTime: string;
    - endTime?: string;
    - status?: ["in progress", "tomorrow", "not started", "completed"];
    - alarm: ["haven't set", "done", "no need"];
    - description?: string;
*/
