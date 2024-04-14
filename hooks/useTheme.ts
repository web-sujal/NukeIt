"use client";

import { create } from "zustand";

interface UseThemeStore {
  isDarkMode: boolean;
  toggleDarkMode: (value: boolean) => void;
}

const toggleDarkClass = (isDarkMode: boolean) => {
  const root = window.document.documentElement;
  if (isDarkMode) {
    root.classList.add("dark");
    window.localStorage.setItem("isDarkMode", "true");
  } else {
    root.classList.remove("dark");
    window.localStorage.setItem("isDarkMode", "false");
  }
};

const useTheme = create<UseThemeStore>((set) => ({
  isDarkMode: window.localStorage.getItem("isDarkMode") === "true",
  toggleDarkMode: (state: boolean) => {
    toggleDarkClass(state);
    set({ isDarkMode: !state });
  },
}));

export default useTheme;
