"use client";

import { useEffect, useState } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof localStorage !== "undefined") {
      const data = JSON.parse(localStorage.getItem("theme")!);
      return data ? data : "light";
    } else {
      return "light";
    }
  });

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));

    const html = document.querySelector("html");
    if (theme === "dark") {
      html?.classList.add("dark");
    } else {
      html?.classList.remove("dark");
    }
  }, [theme]);

  return { theme, setTheme };
};
