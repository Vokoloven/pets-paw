"use client";

import { GridImages } from "@/components/gridImages";
import { Backtab } from "@/components/backtab";
import { GridImagesFavourites } from "@/components/gridImages/GridImagesFavourites";

export default function Favourites() {
  return (
    <Backtab
      heading="Favourites"
      boxName="FAVOURITES"
      childrenProps="flex flex-col"
      boxProps="px-[30px] py-[5px] bg-darkPink rounded-1.5lg text-white font-medium text-xl leading-[30px] tracking-[2px]"
    >
      <GridImages>
        <GridImagesFavourites />
      </GridImages>
    </Backtab>
  );
}
