import getUserTasks from "@/actions/getUserTasks";
import Box from "@/components/Box";
import NothingHere from "@/components/NothingHere";
import Task from "@/components/Task";
import Title from "@/components/Title";

export default async function Home() {
  const tasks = await getUserTasks();

  // TODO: format end time and start time before rendering 03:26:00

  return (
    <Box>
      <Title label="Tasks" />

      {tasks.length ? (
        <div className="md:scrollbar no-scrollbar flex h-full w-full flex-1 flex-col gap-y-3 overflow-y-auto pt-2">
          {tasks.map((task) => (
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
}

// TODO:
//  <a href="https://storyset.com/data">Data illustrations by Storyset</a>
//  long title screen overflow bug fix
