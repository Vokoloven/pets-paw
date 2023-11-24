"use client";

import { useState, useEffect } from "react";

export const getScreenDimensions = () => {
  const { innerHeight: height, innerWidth: width } = window;

  return { height, width };
};

export const useScreenDimensions = (
  getScreenDimensions: () => { width: number; height: number }
) => {
  const [dimension, setDimension] = useState<{
    width: number;
    height: number;
  }>(getScreenDimensions());

  useEffect(() => {
    const setScreenDimension = () => setDimension(getScreenDimensions());

    window.addEventListener("resize", setScreenDimension);

    return () => window.removeEventListener("resize", setScreenDimension);
  }, []);

  return { dimension };
};
