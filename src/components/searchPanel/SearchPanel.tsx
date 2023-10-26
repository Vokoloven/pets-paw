"use client";
import React, { ChangeEvent, useState, useEffect } from "react";
import Image from "next/image";
import search from "../../../public/search.svg";
import { useClearPathname } from "@/hooks/useClearPathname";
import { PreferenceButtons, buttons } from "../preferenceButtons/";

export const SearchPanel = () => {
  const [value, setValue] = useState<string>("");

  const pathname = useClearPathname();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    pathname !== "/" && (
      <div className="flex">
        <div className="relative w-full">
          <input
            onChange={handleChange}
            type="text"
            name="search"
            placeholder="Search for breeds by name"
            className={`px-5 py-[13px] rounded-2.5xl w-full text-black outline-none text-xl leading-[30px] placeholder:text-placeholder border-2 border-solid  ${
              Boolean(value)
                ? "border-darkPink"
                : "border-transparent hover:border-lightPink"
            }`}
          />
          <div className="p-2.5 rouned rounded-1.5lg bg-lightPink absolute top-[10px] right-[10px]">
            <Image src={search} alt={"Search Icon"} />
          </div>
        </div>
        <div className="flex gap-[10px] ml-[10px]">
          {buttons(pathname).map((button) => (
            <React.Fragment key={button.id}>
              <PreferenceButtons button={button} pathname={pathname} />
            </React.Fragment>
          ))}
        </div>
      </div>
    )
  );
};
