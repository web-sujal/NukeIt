import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "selector",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        // Primary color
        primary: "#FE7D7D",
        "primary-dark": "#ee5353",
        "primary-darker": "#ec4141",

        // Secondary color, used in dark mode as primary
        secondary: "#8564F7",
        "secondary-dark": "#7046f6",
        "secondary-darker": "#6133f5",

        // Text color
        "primary-heading": "#4b576c",
        "primary-subheading": "#606f8a",
        "secondary-heading": "#A1A5F3",
        "secondary-subheading": "#81819A",

        // Background colors
        light: "#E3F0FA", // Background color with primary
        dark: "#121215", // Background color with secondary

        // Modals
        "modal-primary": "#f4f8fc",
        "modal-secondary": "#18181C",
        "modal-highlight-primary": "#e4edf8",
        "modal-highlight-secondary": "#2F2D36",
      },
    },
  },
  plugins: [],
};

export default config;

/*
  colors: {
        // Primary color
        primary: "#F06666",
        "primary-dark": "#ee5353",
        "primary-darker": "#ec4141",

        // Secondary color, used in dark mode as primary
        secondary: "#8564F7",
        "secondary-dark": "#7046f6",
        "secondary-darker": "#6133f5",

        // Text color
        "primary-heading": "#7A89A3", // just for headings
        "secondary-heading": "#A1A5F3", // just for headings
        "secondary-subheading": "#81819A", // just for headings

        // Background colors
        light: "#F6F2F3", // Background color with primary
        dark: "#121215", // Background color with secondary

        // Modals
        "modal-primary": "#FEFCFD",
        "modal-secondary": "#18181C",
        "modal-highlight-primary": "#D3DDE2",
        "modal-highlight-secondary": "#2F2D36",
      },
*/
