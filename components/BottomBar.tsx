"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { CiMenuKebab } from "react-icons/ci";

import { BottomBarItems } from "@/constants";

const BottomBar = () => {
  const pathName = usePathname();

  return (
    <div className="mb-4 flex h-10 w-full items-center justify-between px-0 text-primary-heading sm:px-6 lg:hidden dark:text-secondary-subheading">
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
        <CiMenuKebab size={12} className="" />
        <span className="">More</span>
      </button>
    </div>
  );
};

export default BottomBar;
