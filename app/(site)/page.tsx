export default function Home() {
  return (
    <div className="flex-3 flex h-full w-full flex-col items-start justify-start rounded-2xl bg-modal-primary p-6 text-start drop-shadow-2xl lg:drop-shadow-xl dark:bg-modal-secondary">
      <h2 className="mt-2 truncate pl-3 text-2xl font-bold text-primary-heading dark:text-secondary-heading">
        Tasks
      </h2>
      <p className="mt-2 w-full cursor-pointer truncate rounded-lg bg-modal-highlight-primary py-2 pl-5 text-lg dark:bg-modal-highlight-secondary">
        Task 3
      </p>
      <button className="ml-auto mt-auto rounded-2xl bg-primary px-3 py-2 text-sm text-white dark:bg-secondary">
        Add Task
      </button>
    </div>
  );
}
