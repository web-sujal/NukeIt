"use client";

import useTaskStore from "@/hooks/useTaskStore";
import Box from "@/components/Box";
import NothingHere from "@/components/NothingHere";
import Task from "@/components/Task";
import Title from "@/components/Title";
import Loader from "@/components/Loader";

export default function Home() {
  const { isLoading, getTasksByType } = useTaskStore();
  const dailyTasks = getTasksByType("daily");

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Box>
      <Title label="Tasks" />

      {dailyTasks.length ? (
        <div className="md:scrollbar no-scrollbar flex h-full w-full flex-1 flex-col gap-y-3 overflow-y-auto pt-2">
          {dailyTasks.map((task) => (
            <Task key={task.id} taskData={task} />
          ))}
        </div>
      ) : (
        <NothingHere />
      )}
    </Box>
  );
}

// TODO: long title screen overflow bug fix
