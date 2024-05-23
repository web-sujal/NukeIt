"use client";

import Box from "@/components/Box";
import Loader from "@/components/Loader";
import NothingHere from "@/components/NothingHere";
import Task from "@/components/Task";
import Title from "@/components/Title";
import useTaskStore from "@/hooks/useTaskStore";

const ThisWeek = () => {
  const { isLoading, getTasksByType } = useTaskStore();
  const weeklyTasks = getTasksByType("weekly");

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Box>
      <Title label="Weekly Goals" />

      {weeklyTasks.length ? (
        <div className="md:scrollbar no-scrollbar flex h-full w-full flex-1 flex-col gap-y-3 overflow-y-auto pt-2">
          {weeklyTasks.map((task) => (
            <Task key={task.id} taskData={task} />
          ))}
        </div>
      ) : (
        <NothingHere />
      )}
    </Box>
  );
};

export default ThisWeek;
