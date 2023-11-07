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
  const [breedId, setBreedId] = useState<string | null>("all");
  const [perPage, setPerPage] = useState<string | null>("5");
  const { breeds, loadingBreeds, loadingImages, breedImages } = useBreeds(
    breedId,
    perPage
  );

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
            paperWrapper={
              "w-[300px] h-[300px] py-5 leading-6 absolute top-0 left-0 translate-y-11 rounded-[30px] bg-white z-10 overflow-y-auto scrollbar-width scrollbar-thumb"
            }
            paper={"text-placeholder"}
            paperList={
              "mb-2.5 last:mb-0 px-5 hover:bg-lightPink transition hover:transition"
            }
            icon={<DropdownIcon color={"fill-placeholder"} />}
            setValue={setBreedId}
            value={breedId}
            defaultLabel="All breeds"
            defaultValue="all"
            loader={Array.from({ length: 15 }, (_, index) => (
              <div
                key={index}
                className="h-2 w-[260px] mb-2.5 last:mb-0 animate-pulse mx-auto rounded bg-placeholder"
              ></div>
            ))}
            loading={loadingBreeds}
          >
            {Boolean(breeds.length) && (
              <MenuItem value={"all"}>{"All breeds"}</MenuItem>
            )}
            {breeds?.map(({ id, name }) => (
              <React.Fragment key={id}>
                <MenuItem value={id}>{name}</MenuItem>
              </React.Fragment>
            ))}
          </Select>
          <Select
            sx={
              "w-[101px] ml-2.5 bg-body px-2.5 py-1.5 rounded-1.5lg text-placeholder leading-6 flex justify-between items-center border-2 border-transparent border-solid transition hover:border-lightPink hover:transition"
            }
            paperWrapper={
              "w-[300px] py-5 leading-6 absolute top-0 left-0 translate-y-11 rounded-[30px] bg-white z-10"
            }
            paper={"text-placeholder"}
            paperList={
              "mb-2.5 last:mb-0 px-5 hover:bg-lightPink transition hover:transition"
            }
            icon={<DropdownIcon color={"fill-placeholder"} />}
            defaultLabel="Limit: 5"
            defaultValue="5"
            value={perPage}
            setValue={setPerPage}
          >
            {["5", "10", "15", "20"].map((item, index) => (
              <React.Fragment key={index}>
                <MenuItem value={item}>{`Limit: ${item}`}</MenuItem>
              </React.Fragment>
            ))}
          </Select>
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
      <GridImages images={breedImages} breedId={breedId} />
    </Backtab>
  );
}
