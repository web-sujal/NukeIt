import BottomBar from "@/components/BottomBar";

export default function Home() {
  return (
    <div className="flex-3 items-between flex h-full w-full flex-col justify-start gap-y-4 rounded-2xl bg-modal-primary text-start drop-shadow-2xl lg:drop-shadow-xl dark:bg-modal-secondary">
      <div className="flex h-full w-full flex-col items-start justify-start p-6">
        <h2 className="mt-2 truncate pl-3 text-2xl font-bold text-primary-heading dark:text-secondary-heading">
          Tasks
        </h2>
        <p className="mt-2 w-full cursor-pointer truncate rounded-lg bg-modal-highlight-primary py-2 pl-5 text-lg dark:bg-modal-highlight-secondary">
          Task 3
        </p>
        <button className="ml-auto mt-auto rounded-full bg-primary p-6 text-sm text-white dark:bg-secondary">
          +
        </button>
      </div>

      <BottomBar />
    </div>
  );
}
