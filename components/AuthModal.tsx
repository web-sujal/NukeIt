"use client";

import {
  useSessionContext,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";
import { usePathname, useRouter } from "next/navigation";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { Auth } from "@supabase/auth-ui-react";
import { useEffect } from "react";

import useAuthModal from "@/hooks/useAuthModal";

import useTheme from "@/hooks/useTheme";

import Modal from "./Modal";
import useTaskForm from "@/hooks/useTaskForm";
import { getTaskTypeFromRoute } from "@/libs/helpers";

const AuthModal = () => {
  const supabaseClient = useSupabaseClient();
  const router = useRouter();
  const { session } = useSessionContext();

  const { isDarkMode } = useTheme();
  const { isOpen, onClose } = useAuthModal();

  const { setType } = useTaskForm();
  const pathName = usePathname();
  const taskType = getTaskTypeFromRoute(pathName);

  useEffect(() => {
    if (session) {
      router.refresh();
      setType(taskType);
      onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onClose, router, session]);

  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  return (
    <Modal
      title="Welcome back"
      description="Login to your account"
      isOpen={isOpen}
      onChange={onChange}
    >
      <Auth
        theme={isDarkMode ? "dark" : "light"}
        magicLink
        providers={["google", "github"]}
        supabaseClient={supabaseClient}
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                brand: isDarkMode ? "#8564F7" : "#FE7D7D",
                brandAccent: isDarkMode ? "#7046f6" : "#ee5353",
              },
            },
          },
        }}
      />
    </Modal>
  );
};

export default AuthModal;
