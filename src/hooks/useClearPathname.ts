"use client";

import { usePathname } from "next/navigation";

export const useClearPathname = () => {
  const pathname = usePathname();

  const clearPathname = pathname.replace(/\//, "");
  const nestedUrl = clearPathname.match(/(.+?)\//);

  if (pathname === "/") {
    return "/";
  } else if (nestedUrl) {
    return nestedUrl[1];
  } else {
    return clearPathname;
  }
};
