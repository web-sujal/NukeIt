"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { CiMenuKebab } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";

import { BottomBarItems } from "@/constants";
import useCreateTaskModal from "@/hooks/useCreateTaskModal";
import { useUser } from "@/hooks/useUser";
import useAuthModal from "@/hooks/useAuthModal";

interface BottomBarProps {
  children: React.ReactNode;
}

const BottomBar: React.FC<BottomBarProps> = ({ children }) => {
  const pathName = usePathname();
  const authModal = useAuthModal();
  const createTaskModal = useCreateTaskModal();
  const { user } = useUser();

  const handleClick = () => {
    if (!user) {
      return authModal.onOpen();
    }

    return createTaskModal.onOpen();
  };

  return (
    <div className="relative flex h-full max-h-screen w-full flex-col md:drop-shadow-2xl">
      <div className="flex h-full max-h-[calc(100vh-108px)] md:max-h-[calc(100vh-220px)] lg:max-h-[calc(100vh-108px)]">
        {children}
      </div>

      {/* bottom bar */}
      <div className="flex w-full items-center justify-around border-t-2 border-primary-subheading border-opacity-50 bg-modal-primary p-4 text-primary-heading md:rounded-b-2xl lg:hidden dark:border-secondary-subheading dark:bg-modal-secondary dark:text-secondary-subheading">
        {BottomBarItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={twMerge(
              "flex cursor-pointer flex-col items-center justify-center gap-y-2 rounded-2xl p-4 text-center text-sm transition hover:bg-modal-highlight-primary/80 hover:dark:bg-modal-highlight-secondary/80",
              pathName === item.path &&
                "bg-modal-highlight-primary dark:bg-modal-highlight-secondary",
            )}
          >
            {item.icon}
            {item.label}
          </Link>
        ))}

        <button
          onClick={() => {}}
          className="flex flex-col items-center justify-between gap-y-2 rounded-2xl p-4 text-center text-sm transition hover:bg-modal-highlight-primary/80 dark:hover:bg-modal-highlight-secondary/80"
        >
          <CiMenuKebab size={12} />
          <span>More</span>
        </button>
      </div>

      {/* create task button */}
      <div className="absolute bottom-20 left-[50%] -translate-x-[50%] lg:bottom-10 lg:left-auto lg:right-10 lg:-translate-x-0">
        <button
          aria-label="create task button"
          onClick={handleClick}
          className="flex size-16 items-center justify-center rounded-full border-none bg-white text-primary shadow-xl outline-none transition hover:bg-primary/20 focus:outline-none dark:bg-modal-highlight-secondary dark:text-secondary dark:hover:bg-secondary/25"
        >
          <FaPlus size={25} />
        </button>
      </div>
    </div>
  );
};

export default BottomBar;
