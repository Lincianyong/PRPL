import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main_blue: "#0D6EFD",
        sec_blue: "#EBF3FF",
        black: "#1E1E1E",
        dark_grey: "#676767",
        light_grey: "#C4C4C4",
        yellow: "#E9AE00",
        green: "#02562F",
        red: "#9E0F0B"
      },
    },
  },
  plugins: [],
};
export default config;
