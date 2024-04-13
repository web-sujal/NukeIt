export default function Home() {
  return (
    <div className="bg-light text-dark flex h-screen w-screen flex-col items-center justify-center p-10">
      <h1 className="w-full pb-6 text-start text-3xl font-extrabold">
        ❄️ Nuke<span className="text-primary">It</span>
      </h1>

      <div className="flex h-full w-full items-center justify-center gap-6">
        <div className="bg-modal-primary flex h-full w-full min-w-[300px] flex-1 flex-col items-start justify-start rounded-2xl p-6 text-start drop-shadow-xl">
          <p className="text-primary-heading mt-2 truncate pl-3 text-2xl font-bold">
            Filters
          </p>
          <p className="mt-2 w-full cursor-pointer truncate pl-5 text-lg">
            Today
          </p>
          <p className="bg-modal-highlight-primary mt-2 w-full cursor-pointer truncate rounded-lg pl-5 text-lg">
            Week
          </p>
          <p className="mt-2 w-full cursor-pointer truncate pl-5 text-lg">
            Month
          </p>

          <p className="text-primary-heading mt-10 truncate pl-3 text-2xl font-bold">
            Features:
          </p>
          <p className="mt-2 w-full cursor-pointer truncate pl-5 text-lg">
            System
          </p>
          <p className="mt-2 w-full cursor-pointer truncate pl-5 text-lg">
            Reports
          </p>
        </div>

        {/* right side */}
        <div className="bg-modal-primary flex-3 flex h-full w-full flex-col items-start justify-start rounded-2xl p-6 text-start drop-shadow-xl">
          <h3 className="w-full truncate p-4 text-4xl">
            <p className="text-primary-heading mt-2 truncate pl-3 text-2xl font-bold">
              Tasks
            </p>
            <p className="bg-modal-highlight-primary mt-2 w-full cursor-pointer truncate rounded-lg py-2 pl-5 text-lg">
              Task 1
            </p>
            <p className="bg-modal-highlight-primary mt-2 w-full cursor-pointer truncate rounded-lg py-2 pl-5 text-lg">
              Task 2
            </p>
            <p className="bg-modal-highlight-primary mt-2 w-full cursor-pointer truncate rounded-lg py-2 pl-5 text-lg">
              Task 3
            </p>
            <p className="bg-modal-highlight-primary mt-2 w-full cursor-pointer truncate rounded-lg py-2 pl-5 text-lg">
              Task 4
            </p>
            <p className="bg-modal-highlight-primary mb-auto mt-2 w-full cursor-pointer truncate rounded-lg py-2 pl-5 text-lg">
              Task 5
            </p>

            <button className="bg-primary ml-auto rounded-2xl px-3 py-2 text-sm text-white">
              Add Task
            </button>
          </h3>
        </div>
      </div>
    </div>
  );
}
