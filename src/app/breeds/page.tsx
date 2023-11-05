"use client";

import { Backtab } from "@/components/backtab";
import { DropdownIcon, SortAZIcon, SortZAIcon } from "@/components/icons";
import { Select } from "@/components/form";
import { useState } from "react";
import { GridImages } from "@/components/gridImages";
import { useBreeds } from "@/hooks";
import { MenuItem } from "@/components/form";
import React from "react";

export default function Breeds() {
  const [breed, setBreed] = useState<string | null>(null);
  const [perPage, setPerPage] = useState<string | null>(null);

  const { breeds } = useBreeds();
  console.log(breeds);

  return (
    <Backtab
      boxProps="flex"
      childrenProps="flex flex-col"
      heading="Breeds"
      boxElement={
        <div className="flex">
          <Select
            sx={
              "w-[226px] ml-2.5 bg-body px-2.5 py-1.5 rounded-1.5lg text-placeholder leading-6 flex justify-between items-center border-2 border-transparent border-solid transition hover:border-lightPink hover:transition"
            }
            paper={
              "w-[300px] h-[300px] text-placeholder leading-6 absolute top-0 left-0 translate-y-11 rounded-[30px] py-5 bg-white z-10"
            }
            paperList={
              "mb-2.5 last:mb-0 px-5 hover:bg-lightPink transition hover:transition"
            }
            icon={<DropdownIcon color={"fill-placeholder"} />}
            setValue={setBreed}
            value={breed}
            defaultState="All breeds"
          >
            {breeds.map(({ id, name }) => (
              <React.Fragment key={id}>
                <MenuItem value={id}>{name}</MenuItem>
              </React.Fragment>
            ))}
          </Select>
          {/* <Select
            sx={
              "w-[101px] ml-2.5 bg-body px-2.5 py-1.5 rounded-1.5lg text-placeholder leading-6 flex justify-between items-center border-2 border-transparent border-solid transition hover:border-lightPink hover:transition"
            }
            paper={
              " w-[300px] text-placeholder leading-6 absolute top-0 left-0 translate-y-11 rounded-[30px] py-5 bg-white z-10"
            }
            paperList={
              "mb-2.5 last:mb-0 px-5 hover:bg-lightPink transition hover:transition"
            }
            icon={<DropdownIcon color={"fill-placeholder"} />}
          /> */}
          <button
            type="button"
            className="ml-2.5 bg-body py-1.5 px-2 rounded-1.5lg border-2 border-transparent border-solid hover:border-lightPink group transition hover:transition"
          >
            <SortAZIcon
              color={
                "fill-placeholder transition group-hover:fill-darkPink group-hover:transition"
              }
            />
          </button>
          <button
            type="button"
            className="ml-2.5 bg-body py-1.5 px-2 rounded-1.5lg border-2 border-transparent border-solid hover:border-lightPink group transition hover:transition"
          >
            <SortZAIcon
              color={
                "fill-placeholder transition group-hover:fill-darkPink group-hover:transition"
              }
            />
          </button>
        </div>
      }
    >
      <GridImages images={Array.from(Array(20))} perPage={perPage} />
    </Backtab>
  );
}
