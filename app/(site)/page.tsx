import Box from "@/components/Box";
import NothingHere from "@/components/NothingHere";
import Task from "@/components/Task";
import Title from "@/components/Title";

export default function Home() {
  return (
    <Box>
      <Title label="Tasks" />
      {/* <NothingHere /> */}
      <div className="flex flex-col gap-y-2 overflow-auto">
        <Task
          title="Bhagavad Gita"
          status="not started"
          startTime="8:30 AM"
          endTime="9:00 AM"
          alarm="done"
          desc="read a verse"
        />
      </div>
    </Box>
  );
}

// TODO:
//  <a href="https://storyset.com/data">Data illustrations by Storyset</a>
