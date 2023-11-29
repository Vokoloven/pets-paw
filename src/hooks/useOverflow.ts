"use client";

import { useEffect } from "react";

export const useOverflow = (open: boolean) => {
  useEffect(() => {
    const body = document?.querySelector("body");
    open
      ? body?.classList.add("overflow-hidden")
      : body?.classList.remove("overflow-hidden");
  }, [open]);
};
