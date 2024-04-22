"use client";

import { useEffect } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useRouter } from "next/navigation";
import { useSessionContext } from "@supabase/auth-helpers-react";

import useAuthModal from "@/hooks/useAuthModal";
import { supabaseAdmin } from "@/libs/supabaseAdmin";
import useTheme from "@/hooks/useTheme";

import Modal from "./Modal";

const AuthModal = () => {
  const { isDarkMode } = useTheme();
  const { session } = useSessionContext();
  const router = useRouter();

  const { isOpen, onClose } = useAuthModal();

  useEffect(() => {
    if (session) {
      router.refresh();
      onClose();
    }
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
        supabaseClient={supabaseAdmin}
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
