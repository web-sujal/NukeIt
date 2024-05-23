"use client";

import { useEffect, useState } from "react";

import AuthModal from "@/components/AuthModal";
import CreateTaskModal from "@/components/CreateTaskModal";
import EditTaskModal from "@/components/EditTaskModal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <AuthModal />
      <CreateTaskModal />
      <EditTaskModal />
    </>
  );
};

export default ModalProvider;
