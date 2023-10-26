"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useClearPathname } from "@/hooks/useClearPathname";
import Image from "next/image";
import { StaticImageData } from "next/image";
import {
  handleBgColor,
  handleButtonActions,
  handleCardActions,
} from "@/helpers/handleActions";

type TProps = {
  card: {
    id: string;
    src: StaticImageData;
    alt: string;
  };
};

export const NavCard = ({ card }: TProps) => {
  const [hover, setHover] = useState<boolean>(false);
  const [focus, setFocus] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);

  const router = useRouter();
  const pathname = useClearPathname();

  useEffect(() => {
    pathname === card.alt ? setActive(true) : setActive(false);
  }, [pathname]);

  return (
    <div
      className="cursor-pointer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      onClick={() => router.push(`/${card.alt}`)}
    >
      <div className="flex justify-center items-center flex-col" key={card.alt}>
        <div
          className={`flex justify-center items-center rounded-2.5xl w-[138px] h-[198px] border-4 border-solid ${handleBgColor(
            card.id
          )} ${handleCardActions(hover, focus, active)} transition`}
        >
          <Image src={card.src} alt={card.alt} priority className="w-auto" />
        </div>
        <button
          type="button"
          aria-label={card.alt}
          className={`rounded-[10px] w-full py-2.5 mt-2.5  font-medium text-xs focus:outline-none ${handleButtonActions(
            hover,
            focus,
            active
          )} transition`}
        >
          {card.alt.toUpperCase()}
        </button>
      </div>
    </div>
  );
};
