import type { Config } from "tailwindcss";

const config: Config = {
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
        primary: "#F06666",
        "primary-dark": "#ee5353",
        "primary-darker": "#ec4141",

        // Secondary color, used in dark mode as primary
        secondary: "#7046F6",
        "secondary-dark": "#7046f6",
        "secondary-darker": "#6133f5",

        // Text color
        "text-primary": "#7A89A3", // just for headings
        "text-secondary": "#84849D", // just for headings

        // Background colors
        "bg-primary": "#F6F2F3", // Background color with primary
        "bg-secondary": "#121215", // Background color with secondary

        // Modals
        "bg-modal-primary": "#FEFCFD",
        "bg-modal-secondary": "#18181C",
        "bg-modal-highlight-primary": "#D3DDE2",
        "bg-modal-highlight-secondary": "#2F2D36",
      },
    },
  },
  plugins: [],
};

export default config;
