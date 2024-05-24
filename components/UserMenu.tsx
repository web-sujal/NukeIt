"use client";

import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { CiLogin } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import toast from "react-hot-toast";
import { twMerge } from "tailwind-merge";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";

import useTheme from "@/hooks/useTheme";
import { useUser } from "@/hooks/useUser";
import useAuthModal from "@/hooks/useAuthModal";
import useTaskStore from "@/hooks/useTaskStore";
import useMoreOptionsModal from "@/hooks/useMoreOptionsModal";

interface UserMenuProps {
  className?: string;
}

const UserMenu: React.FC<UserMenuProps> = ({ className }) => {
  const supabaseClient = useSupabaseClient();
  const { user, isLoading } = useUser();
  const { isDarkMode, toggleDarkMode } = useTheme();
  const router = useRouter();
  const { onOpen } = useAuthModal();
  const { resetStore } = useTaskStore();
  const moreOptionsModal = useMoreOptionsModal();

  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut();

    if (error) {
      toast.error(error.message);
      console.error(error);
    } else {
      toast.success("Logged out!");
      resetStore();
      moreOptionsModal.onClose();
      router.refresh();
    }
  };

  return (
    <div
      className={twMerge(
        "mt-auto flex w-full flex-col items-start justify-between gap-y-4 px-4",
        className,
      )}
    >
      <p className="font-bold text-primary-heading dark:text-secondary-heading">
        user:{" "}
        <span className="font-normal text-primary-subheading dark:text-secondary-subheading">
          {isLoading ? (
            <span>Loading...</span>
          ) : user ? (
            user?.email
          ) : (
            <span>not logged in.</span>
          )}
        </span>
      </p>

      <div className="flex w-full items-center justify-between gap-x-6">
        {/* Dark mode icon */}
        {isDarkMode ? (
          <MdDarkMode
            onClick={() => toggleDarkMode(isDarkMode)}
            size={40}
            className="cursor-pointer text-primary-heading transition hover:scale-105 dark:text-secondary-heading"
          />
        ) : (
          <MdOutlineDarkMode
            onClick={() => toggleDarkMode(isDarkMode)}
            size={40}
            className="cursor-pointer text-primary-heading transition hover:scale-105 dark:text-secondary-heading"
          />
        )}

        {/* Separator */}
        <div className="h-full w-1 border-l-2 border-secondary-heading opacity-70" />

        {/* Sign in Log out icon */}
        {user ? (
          <IoIosLogOut
            onClick={handleLogout}
            className="cursor-pointer text-primary-heading transition hover:scale-105 dark:text-secondary-heading"
            size={40}
          />
        ) : (
          <CiLogin
            onClick={() => onOpen()}
            className="cursor-pointer text-primary-heading transition hover:scale-105 dark:text-secondary-heading"
            size={40}
          />
        )}
      </div>
    </div>
  );
};

export default UserMenu;
