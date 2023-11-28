import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        upload: "url('../../public/upload-bg.png')",
        main: "url(../../public/home-bg2x.png)",
      },
      colors: {
        body: "#F8F8F7",
        placeholder: "#8C8C8C",
        cardPurple: "#B4B7FF",
        cardGreen: "#97EAB9",
        rgbaCardGreen: "rgba(151, 234, 185, 0.3)",
        cardYellow: "#FFD280",
        rgbaCardYellow: "rgba(255, 210, 128, 0.3)",
        semiTransparentWhite: "rgba(255, 255, 255, 0.4)",
        lightPink: "#FBE0DC",
        darkPink: "#FF868E",
        rgbaDarkPink: "rgba(255, 134, 142, 0.3)",
        backdrop: "rgba(29, 29, 29, 0.6)",
      },
      fontSize: {
        "4.5xl": ["2.75rem", "3.625rem"],
      },
      spacing: {
        "15": "7.5rem",
      },
      borderRadius: {
        "2.5xl": "1.25rem",
        "1.5lg": "0.625rem",
      },
    },
    screens: {
      mobile: { min: "375px", max: "767px" },
      tablet: { min: "768px", max: "1023px" },
      laptop: { min: "1024px", max: "1279px" },
      desktop: { min: "1280px" },
    },
    container: {
      center: true,
      padding: {
        mobile: "20px",
        tablet: "30px",
        laptop: "30px",
        desktop: "30px",
      },
    },
  },
  darkMode: "class",
  plugins: [require("autoprefixer")],
};
export default config;
