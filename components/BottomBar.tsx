"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { CiMenuKebab } from "react-icons/ci";

import { BottomBarItems } from "@/constants";

interface BottomBarProps {
  children: React.ReactNode;
}

const BottomBar: React.FC<BottomBarProps> = ({ children }) => {
  const pathName = usePathname();
  return (
    <div className="flex h-full w-full flex-col md:drop-shadow-2xl">
      {children}

      <div className="border-primary-subheading flex w-full items-center justify-around border-t-2 border-opacity-50 bg-modal-primary p-4 text-primary-heading md:rounded-b-2xl lg:hidden dark:border-secondary-subheading dark:bg-modal-secondary dark:text-secondary-subheading">
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
    </div>
  );
};

export default BottomBar;
