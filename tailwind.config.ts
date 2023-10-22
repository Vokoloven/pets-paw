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
        "regal-purple": "#B4B7FF",
        "regal-green": "#97EAB9",
        "regal-yellow": "#FFD280",
        "regal-rgba-0.6": "rgba(255, 255, 255, 0.4)",
        "regal-active-pink": "#FF868E",
        "regal-hover-pink": "#FBE0DC",
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
