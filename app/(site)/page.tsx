export default function Home() {
  return (
    <main className="flex h-full w-full flex-col gap-y-2 bg-modal-primary p-4 text-start md:rounded-t-2xl lg:rounded-2xl lg:drop-shadow-xl dark:bg-modal-secondary">
      <h2 className="truncate text-3xl font-bold text-primary-heading md:text-2xl dark:text-secondary-heading">
        Tasks
      </h2>
      <p className="w-full cursor-pointer truncate rounded-lg bg-modal-highlight-primary py-2 pl-3 text-lg dark:bg-modal-highlight-secondary">
        Improve ui for mobile devices
      </p>
    </main>
  );
}
