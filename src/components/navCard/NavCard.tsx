"use client";

import { useState } from "react";
import Image from "next/image";
import { handleCardStyle } from "./handleCardStyle";
import { StaticImageData } from "next/image";

type TProps = {
  card: {
    src: StaticImageData;
    alt: string;
    width: number;
    height: number;
  };
};

export const NavCard = ({ card }: TProps) => {
  const [active, setActive] = useState<boolean>(false);
  const [focus, setFocus] = useState<boolean>(false);

  return (
    <div
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
    >
      <div className="flex justify-center items-center flex-col" key={card.alt}>
        <div
          className={`flex justify-center items-center rounded-2.5xl w-[138px] h-[198px] border-4 border-solid ${handleCardStyle(
            card.alt
          )} ${active && "border-white"} ${focus && "border-regal-hover-pink"}`}
        >
          <Image
            src={card.src}
            alt={card.alt}
            width={card.width}
            height={card.height}
            priority
          />
        </div>
        <button
          type="button"
          className={`bg-white rounded-[10px] w-full py-2.5 mt-2.5 text-regal-active-pink font-medium text-xs focus:outline-none ${
            active && "bg-regal-hover-pink"
          } ${focus && "bg-regal-active-pink text-white"} `}
        >
          {card.alt.toUpperCase()}
        </button>
      </div>
    </div>
  );
};
