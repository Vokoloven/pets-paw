"use client";

import { useClearPathname, useScreenDimensions } from "@/hooks";
import type { TRouteRender } from "@/types";

export const RouteRender = ({ children, route }: TRouteRender) => {
  const pathname = useClearPathname();
  const { screen } = useScreenDimensions();

  if (route === "home") {
    return (
      (((screen === "mobile" || screen === "tablet") && pathname === "/") ||
        screen === "laptop" ||
        screen === "desktop") &&
      children
    );
  } else {
    return (
      (((screen === "mobile" || screen === "tablet") && pathname !== "/") ||
        screen === "laptop" ||
        screen === "desktop") &&
      children
    );
  }
};
