"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useClearPathname } from "@/hooks";
import Image from "next/image";
import { handleBgColor, handleButtonActions, handleCardActions } from "@/utils";
import type { TNavCardMobile } from "@/types";

export const NavCardMobile = ({ card, setOpen }: TNavCardMobile) => {
  const [hover, setHover] = useState<boolean>(false);
  const [focus, setFocus] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);

  const router = useRouter();
  const pathname = useClearPathname();

  useEffect(() => {
    pathname === card.name ? setActive(true) : setActive(false);
  }, [pathname]);

  return (
    <div
      className="cursor-pointer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      onClick={() => {
        router.push(`/${card.name}`);
        setOpen(false);
      }}
    >
      <div className="flex justify-center items-center flex-col">
        <div
          className={`flex justify-center items-center rounded-2.5xl w-[138px] h-[198px] border-4 border-solid ${handleBgColor(
            card.name
          )} ${handleCardActions(hover, focus, active)} transition`}
        >
          <Image src={card.src} alt={card.alt} priority className="w-auto" />
        </div>
        <button
          type="button"
          aria-label={card.ariaLabel}
          className={`rounded-1.5lg w-full py-2.5 mt-2.5  font-medium text-xs outline-none ${handleButtonActions(
            hover,
            focus,
            active
          )} transition`}
        >
          {card.name.toUpperCase()}
        </button>
      </div>
    </div>
  );
};
