const Sidebar = () => {
  return (
    <div className="hidden h-full w-full min-w-[300px] flex-1 flex-col items-start justify-start rounded-2xl bg-modal-primary p-6 text-start drop-shadow-xl lg:flex">
      <p className="mt-2 truncate pl-3 text-2xl font-bold text-primary-heading">
        Filters
      </p>
      <p className="mt-2 w-full cursor-pointer truncate pl-5 text-lg">Today</p>
      <p className="mt-2 w-full cursor-pointer truncate rounded-lg bg-modal-highlight-primary pl-5 text-lg">
        Week
      </p>
      <p className="mt-2 w-full cursor-pointer truncate pl-5 text-lg">Month</p>

      <p className="mt-10 truncate pl-3 text-2xl font-bold text-primary-heading">
        Features:
      </p>
      <p className="mt-2 w-full cursor-pointer truncate pl-5 text-lg">System</p>
      <p className="mt-2 w-full cursor-pointer truncate pl-5 text-lg">
        Reports
      </p>
    </div>
  );
};

export default Sidebar;
