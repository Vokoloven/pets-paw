"use client";

import { useState, useEffect } from "react";
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
  const [hover, setHover] = useState<boolean>(false);
  const [focus, setFocus] = useState<boolean>(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
    >
      <div className="flex justify-center items-center flex-col" key={card.alt}>
        <div
          className={`flex justify-center items-center rounded-2.5xl w-[138px] h-[198px] border-4 border-solid ${
            hover ? "border-white" : "border-base-rgba-0.6"
          } ${
            focus ? "border-base-hover-pink" : "border-base-rgba-0.6"
          } ${handleCardStyle(card.alt)}`}
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
          className={`${hover ? "bg-base-hover-pink" : "bg-white"} ${
            focus
              ? "bg-base-active-pink text-white"
              : "bg-white text-base-active-pink"
          } rounded-[10px] w-full py-2.5 mt-2.5  font-medium text-xs focus:outline-none`}
        >
          {card.alt.toUpperCase()}
        </button>
      </div>
    </div>
  );
};
