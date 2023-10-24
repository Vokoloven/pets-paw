"use client";

import { ChangeEvent, useState } from "react";
import Image from "next/image";
import Search from "../../../public/search.svg";

export const SearchPanel = () => {
  const [value, setValue] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="relative">
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
        <Image src={Search} alt={"Search Icon"} />
      </div>
    </div>
  );
};
