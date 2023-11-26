"use client";

import { usePathname } from "next/navigation";

export const useClearPathname = () => {
  const pathname = usePathname();

  const clearPathname = pathname.replace(/\//, "");

  if (pathname === "/") {
    return "/";
  } else {
    return clearPathname;
  }
};
