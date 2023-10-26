"use client";
import React, { ChangeEvent, useState } from "react";
import Image from "next/image";
import search from "../../../public/search.svg";
import { useClearPathname } from "@/hooks/useClearPathname";
import { PreferenceButtons, buttons } from "../preferenceButtons/";
import { SearchIcon } from "../icons";

export const SearchPanel = () => {
  const [value, setValue] = useState<string>("");

  const pathname = useClearPathname();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    pathname !== "/" && (
      <div className="flex">
        <form className="relative w-full">
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
          <button
            type="submit"
            aria-label="search"
            className="p-2.5 rouned rounded-1.5lg bg-lightPink absolute top-[10px] right-[10px] hover:bg-darkPink focus:outline-none focus:bg-darkPink transition group"
          >
            <SearchIcon
              color={
                "fill-darkPink group-hover:fill-white group-focus:fill-white"
              }
            />
          </button>
        </form>
        <div className="flex gap-[10px] ml-2.5">
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
