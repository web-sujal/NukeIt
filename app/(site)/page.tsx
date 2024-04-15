import NothingHere from "@/components/NothingHere";

export default function Home() {
  return (
    <main className="flex h-full w-full flex-col gap-y-2 bg-modal-primary p-4 text-start md:rounded-t-2xl lg:rounded-2xl lg:drop-shadow-xl dark:bg-modal-secondary">
      <h2 className="truncate text-3xl font-bold text-primary-heading md:text-2xl dark:text-secondary-heading">
        Tasks
      </h2>
      <NothingHere />
    </main>
  );
}

// TODO:
//  <a href="https://storyset.com/data">Data illustrations by Storyset</a>
