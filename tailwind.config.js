import { nextui } from "@nextui-org/react";
import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#fff', 
        secondary: '#111', 
      },
    },
  },
  darkMode: "class",
  plugins: [daisyui, nextui()],
};

export default config;
