"use client";

import { useEffect } from "react";

import useTheme from "@/hooks/useTheme";
import { SidebarFilterItems, SidebarFeatureItems } from "@/constants";
import { useUser } from "@/hooks/useUser";

import SidebarItem from "./SidebarItem";
import Header from "./Header";
import BottomBar from "./BottomBar";
import UserMenu from "./UserMenu";
import useTaskStore from "@/hooks/useTaskStore";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const { toggleDarkMode } = useTheme();
  const { user } = useUser();
  const { fetchAndSetTasks, resetStore } = useTaskStore();

  useEffect(() => {
    const initializeTaskStore = async () => {
      if (user) {
        await fetchAndSetTasks();
      }
    };

    initializeTaskStore();
  }, [user]);

  useEffect(() => {
    if (window.localStorage.getItem("isDarkMode") === "true") {
      toggleDarkMode(true);
    } else {
      toggleDarkMode(false);
    }
  }, []);

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-light text-dark md:px-20 md:py-10 dark:bg-dark dark:text-white">
      <Header />

      <div className="flex h-full w-full gap-x-6">
        <div className="hidden h-full w-full min-w-[300px] flex-1 flex-col items-start justify-start rounded-2xl bg-modal-primary p-6 text-start drop-shadow-xl lg:flex dark:bg-modal-secondary">
          {/* filters */}
          <h2 className="mt-2 truncate pl-3 text-2xl font-bold text-primary-heading dark:text-secondary-heading">
            Filters
          </h2>
          {SidebarFilterItems.map((item) => (
            <SidebarItem
              key={item.label}
              Icon={item.icon}
              label={item.label}
              path={item.path}
            />
          ))}

          {/* Features */}
          <p className="mt-10 truncate pl-3 text-2xl font-bold text-primary-heading dark:text-secondary-heading">
            Features:
          </p>
          {SidebarFeatureItems.map((item) => (
            <SidebarItem
              key={item.label}
              Icon={item.icon}
              label={item.label}
              path={item.path}
            />
          ))}

          {/* User email && Dark mode / auth */}
          <UserMenu />
        </div>

        <div className="flex-3 flex h-full w-full">
          <BottomBar>{children}</BottomBar>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
