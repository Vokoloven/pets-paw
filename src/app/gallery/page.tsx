"use client";

import { Backtab } from "@/components/backtab";
import { UploadIcon, UpdateIcon } from "@/components/icons";
import { Select } from "@/components/form";
import { DropdownIcon } from "@/components/icons";
import { useState } from "react";
import { GridImages } from "@/components/gridImages";

export default function Gallery() {
  const [order, setOrder] = useState<string | null>(null);
  const [type, setType] = useState<string | null>(null);
  const [breed, setBreed] = useState<string | null>(null);
  const [limit, setLimit] = useState<string | null>(null);

  return (
    <Backtab
      heading="Gallery"
      boxProps="flex justify-between"
      childrenProps="flex flex-col"
      boxElement={
        <button className="py-3 px-[30px] bg-lightPink rounded-1.5lg flex items-center hover:bg-darkPink hover:transition-colors transition-colors group">
          <UploadIcon
            color={
              "fill-darkPink group-hover:fill-white group-hover:transition-colors transition-colors"
            }
          />
          <span className="ml-2.5 font-medium text-darkPink text-base leading-4 tracking-[2px] group-hover:text-white group-hover:transition-colors transition-colors">
            UPLOAD
          </span>
        </button>
      }
    >
      <div className="bg-body rounded-2.5xl pb-5 pt-2.5 px-5 mt-5">
        <div className="flex gap-5">
          <div className="flex flex-col w-full">
            <span className="pl-2.5 leading-[18px] font-medium text-[10px] text-placeholder">
              ORDER
            </span>
            <Select
              sx={
                "w-full bg-white px-2.5 py-1.5 rounded-1.5lg text-black leading-6 flex justify-between items-center border-2 border-transparent border-solid transition hover:border-lightPink hover:transition"
              }
              paper={
                "w-[300px] text-placeholder leading-6 absolute top-0 left-0 translate-y-11 rounded-[30px] py-5 bg-white z-10"
              }
              paperList={
                "mb-2.5 last:mb-0 px-5 hover:bg-lightPink transition hover:transition"
              }
              icon={<DropdownIcon color={"fill-placeholder"} />}
              setState={setOrder}
              state={order}
              defaultState="Random"
              list={Array.from(["Random", "Desc", "Asc"])}
            />
          </div>
          <div className="flex flex-col w-full">
            <span className="pl-2.5 leading-[18px] font-medium text-[10px] text-placeholder">
              TYPE
            </span>
            <Select
              sx={
                "w-full bg-white px-2.5 py-1.5 rounded-1.5lg text-black leading-6 flex justify-between items-center border-2 border-transparent border-solid transition hover:border-lightPink hover:transition"
              }
              paper={
                "w-[300px] text-placeholder leading-6 absolute top-0 left-0 translate-y-11 rounded-[30px] py-5 bg-white z-10"
              }
              paperList={"mb-2.5 last:mb-0 px-5 hover:bg-lightPink"}
              icon={<DropdownIcon color={"fill-placeholder"} />}
              setState={setType}
              state={type}
              defaultState="All"
              list={Array.from(["All", "Static", "Animated"])}
            />
          </div>
        </div>
        <div className="flex gap-5 mt-2.5 items-end">
          <div className="flex flex-col w-full">
            <span className="pl-2.5 leading-[18px] font-medium text-[10px] text-placeholder">
              BREED
            </span>
            <Select
              sx={
                "w-full bg-white px-2.5 py-1.5 rounded-1.5lg text-black leading-6 flex justify-between items-center border-2 border-transparent border-solid transition hover:border-lightPink hover:transition"
              }
              paper={
                "w-[300px] text-placeholder leading-6 absolute top-0 left-0 translate-y-11 rounded-[30px] py-5 bg-white z-10"
              }
              paperList={
                "mb-2.5 last:mb-0 px-5 hover:bg-lightPink transition hover:transition"
              }
              icon={<DropdownIcon color={"fill-placeholder"} />}
              setState={setBreed}
              state={breed}
              defaultState="None"
              list={Array.from(["None", "Abyssinian", "Bengal", "Agean"])}
            />
          </div>
          <div className="flex flex-col w-full">
            <span className="pl-2.5 leading-[18px] font-medium text-[10px] text-placeholder">
              LIMIT
            </span>
            <Select
              sx={
                "w-full bg-white px-2.5 py-1.5 rounded-1.5lg text-black leading-6 flex justify-between items-center border-2 border-transparent border-solid transition hover:border-lightPink hover:transition"
              }
              paper={
                "w-[300px] text-placeholder leading-6 absolute top-0 left-0 translate-y-11 rounded-[30px] py-5 bg-white z-10"
              }
              paperList={"mb-2.5 last:mb-0 px-5 hover:bg-lightPink"}
              icon={<DropdownIcon color={"fill-placeholder"} />}
              setState={setLimit}
              state={limit}
              defaultState="5 items per page"
              list={Array.from([
                "5 items per page",
                "10 items per page",
                "15 items per page",
                "20 items per page",
              ])}
            />
          </div>
          <button className="p-2.5 bg-white rounded-1.5lg transition-colors group hover:bg-darkPink">
            <UpdateIcon
              color={
                "fill-darkPink transition-colors group-hover:fill-white group-hover:transition-colors"
              }
            />
          </button>
        </div>
      </div>
      <GridImages images={Array.from(Array(20))} perPage={limit} />
    </Backtab>
  );
}
