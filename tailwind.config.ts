import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        placeholder: "#8C8C8C",
        "base-purple": "#B4B7FF",
        "base-green": "#97EAB9",
        "base-yellow": "#FFD280",
        "base-rgba-0.6": "rgba(255, 255, 255, 0.4)",
        "base-hover-pink": "#FBE0DC",
        "base-active-pink": "#FF868E",
      },
      fontSize: {
        "4.5xl": ["2.75rem", "3.625rem"],
      },
      spacing: {
        "15": "7.5rem",
      },
      borderRadius: {
        "2.5xl": "1.25rem",
      },
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
export default config;
