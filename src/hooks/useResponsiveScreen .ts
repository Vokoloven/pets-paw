"use client";

import { useState, useEffect } from "react";

// const getWindowWidth = () => {
//   if (global?.window) {
//     const { innerWidth: width } = window;
//     return width;
//   }

//   return 0;
// };

const getScreenName = (width: number) => {
  if (width <= 767) {
    return "mobile";
  } else if (width <= 1023) {
    return "tablet";
  } else if (width <= 1279) {
    return "laptop";
  } else {
    return "desktop";
  }
};

export const useResponsiveScreen = () => {
  const [width, setWidth] = useState<number>(0);
  const [screen, setScreen] = useState<
    "mobile" | "tablet" | "laptop" | "desktop"
  >(getScreenName(width));

  const handleWindowWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    setScreen(getScreenName(width));
  }, [width]);

  useEffect(() => {
    handleWindowWidth();

    window.addEventListener("resize", handleWindowWidth);

    return () => window.removeEventListener("resize", handleWindowWidth);
  }, []);

  return { screen };
};
