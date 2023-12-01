import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import type { TPreferenceButtons } from "@/types";

export const PreferenceButtons = ({ button, pathname }: TPreferenceButtons) => {
  const [active, setActive] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    if (button.name === pathname) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [pathname]);

  return (
    <button
      type="button"
      aria-label={button.ariaLabel}
      onClick={() => router.push(`/${button.name}`)}
      className={`p-[15px] rounded-2.5xl outline-none ${
        active
          ? "bg-darkPink dark:bg-rgbaDarkPinkLow"
          : "bg-white dark:bg-rgbaNightBlack dark:hover:bg-rgbaDarkPinkLow hover:bg-lightPink focus:bg-lightPink transition cursor-pointer"
      }`}
    >
      {button.icon}
    </button>
  );
};
