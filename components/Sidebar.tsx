import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { CiLogin } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";

import { SidebarFilterItems, SidebarFeatureItems } from "@/constants";

import SidebarItem from "./SidebarItem";
import Header from "./Header";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const user = false;
  const darkMode = false;

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-light p-10 text-dark md:px-20 md:py-10 dark:bg-dark dark:text-white">
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
          <div className="mt-auto flex w-full flex-col items-start justify-between gap-y-4 px-4 text-primary-heading dark:text-secondary-heading">
            <p>
              user:{" "}
              <span className="dark:text-secondary-subheading">
                web.sujal@gmail.com
              </span>
            </p>

            <div className="flex w-full items-center justify-between gap-x-6">
              {/* Dark mode icon */}
              {darkMode ? (
                <MdDarkMode
                  size={40}
                  className="cursor-pointer text-primary-heading transition hover:scale-105 dark:text-secondary-heading"
                />
              ) : (
                <MdOutlineDarkMode
                  size={40}
                  className="cursor-pointer text-primary-heading transition hover:scale-105 dark:text-secondary-heading"
                />
              )}

              {/* Separator */}
              <div className="h-full w-1 border-l-2 border-secondary-heading opacity-70" />

              {/* Sign in Log out icon */}
              {user ? (
                <IoIosLogOut
                  className="cursor-pointer text-primary-heading transition hover:scale-105 dark:text-secondary-heading"
                  size={40}
                />
              ) : (
                <CiLogin
                  className="cursor-pointer text-primary-heading transition hover:scale-105 dark:text-secondary-heading"
                  size={40}
                />
              )}
            </div>
          </div>
        </div>

        <main className="flex-3 flex h-full w-full">{children}</main>
      </div>
    </div>
  );
};

export default Sidebar;
