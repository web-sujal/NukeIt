"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconType } from "react-icons";

interface SidebarItemProps {
  Icon: React.ReactElement<IconType>;
  label: string;
  path: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ Icon, label, path }) => {
  const pathName = usePathname();

  return (
    <Link
      href={path}
      className={`mt-2 flex w-full cursor-pointer items-center justify-start gap-x-2 truncate rounded-lg  py-2 pl-5 text-lg transition hover:bg-modal-highlight-primary/85 dark:hover:bg-modal-highlight-secondary/85 ${
        pathName === path &&
        "bg-modal-highlight-primary dark:bg-modal-highlight-secondary"
      } ${
        pathName == "/" &&
        label === "Today" &&
        "bg-modal-highlight-primary dark:bg-modal-highlight-secondary"
      }`}
    >
      <span className="text-primary-heading">{Icon}</span> {label}
    </Link>
  );
};

export default SidebarItem;
