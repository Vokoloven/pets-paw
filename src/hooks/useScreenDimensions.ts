"use client";

import { useState, useEffect } from "react";

const getScreenDimensions = () => {
  const { innerHeight: height, innerWidth: width } = window;

  return { height, width };
};

const getScreenName = (dimension: { width: number; height: number }) => {
  const { width } = dimension;

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

export const useScreenDimensions = () => {
  const [screen, setScreen] = useState<
    "mobile" | "tablet" | "laptop" | "desktop"
  >(getScreenName(getScreenDimensions()));

  useEffect(() => {
    const setScreenDimension = () =>
      setScreen(getScreenName(getScreenDimensions()));

    window.addEventListener("resize", setScreenDimension);

    return () => window.removeEventListener("resize", setScreenDimension);
  }, []);

  return { screen };
};
