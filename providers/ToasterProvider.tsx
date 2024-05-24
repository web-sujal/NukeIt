"use client";

import { Toaster } from "react-hot-toast";

import useTheme from "@/hooks/useTheme";

const ToasterProvider = () => {
  const { isDarkMode } = useTheme();

  return (
    <Toaster
      toastOptions={{
        style: {
          background: isDarkMode ? "#333" : "white",
          color: isDarkMode ? "#fff" : "#000",
        },
      }}
    />
  );
};

export default ToasterProvider;
