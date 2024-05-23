"use client";

import Box from "@/components/Box";
import NothingHere from "@/components/NothingHere";
import Task from "@/components/Task";
import Title from "@/components/Title";
import useTaskStore from "@/hooks/useTaskStore";
import Loader from "@/components/Loader";

const ThisMonth = () => {
  const { isLoading, getTasksByType } = useTaskStore();
  const monthlyTasks = getTasksByType("monthly");

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Box>
      <Title label="Monthly Goals" />

      {monthlyTasks.length ? (
        <div className="md:scrollbar no-scrollbar flex h-full w-full flex-1 flex-col gap-y-3 overflow-y-auto pt-2">
          {monthlyTasks.map((task) => (
            <Task
              key={task.id}
              title={task.title}
              type={task.type}
              status={task.status}
              start_time={task.start_time}
              end_time={task.end_time}
              alarm={task.alarm}
              desc={task.desc}
              priority={task.priority}
            />
          ))}
        </div>
      ) : (
        <NothingHere />
      )}
    </Box>
  );
};

export default ThisMonth;
