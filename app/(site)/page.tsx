import Box from "@/components/Box";
import NothingHere from "@/components/NothingHere";
import Task from "@/components/Task";
import Title from "@/components/Title";

export default function Home() {
  return (
    <Box>
      <Title label="Tasks" />
      {/* <NothingHere /> */}
      <div className="md:scrollbar no-scrollbar flex h-full w-full flex-1 flex-col gap-y-4 overflow-y-auto pt-2">
        <Task
          title="Bhagavad Gita"
          status="completed"
          startTime="8:30 AM"
          endTime="9:00 AM"
          alarm
          desc="read a verse"
          priority="high"
        />
      </div>
    </Box>
  );
}

// TODO:
//  <a href="https://storyset.com/data">Data illustrations by Storyset</a>
