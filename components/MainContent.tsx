const MainContent = () => {
  return (
    <div className="flex-3 flex h-full w-full flex-col items-start justify-start rounded-2xl bg-modal-primary p-6 text-start drop-shadow-2xl lg:drop-shadow-xl">
      <h3 className="w-full truncate p-4 text-4xl">
        <p className="mt-2 truncate pl-3 text-2xl font-bold text-primary-heading">
          Tasks
        </p>
        <p className="mt-2 w-full cursor-pointer truncate rounded-lg bg-modal-highlight-primary py-2 pl-5 text-lg">
          Task 1
        </p>
        <p className="mt-2 w-full cursor-pointer truncate rounded-lg bg-modal-highlight-primary py-2 pl-5 text-lg">
          Task 2
        </p>
        <p className="mt-2 w-full cursor-pointer truncate rounded-lg bg-modal-highlight-primary py-2 pl-5 text-lg">
          Task 3
        </p>
        <p className="mt-2 w-full cursor-pointer truncate rounded-lg bg-modal-highlight-primary py-2 pl-5 text-lg">
          Task 4
        </p>
        <p className="mb-auto mt-2 w-full cursor-pointer truncate rounded-lg bg-modal-highlight-primary py-2 pl-5 text-lg">
          Task 5
        </p>

        <button className="ml-auto rounded-2xl bg-primary px-3 py-2 text-sm text-white">
          Add Task
        </button>
      </h3>
    </div>
  );
};

export default MainContent;
