"use client";

import { Backtab } from "@/components/backtab";
import { GridImages, GridImagesFavourites } from "@/components/gridImages";

export default function Likes() {
  return (
    <Backtab
      heading="Favourites"
      boxName="FAVOURITES"
      childrenProps="flex flex-col"
      boxProps="px-[30px] py-[5px] bg-darkPink rounded-1.5lg text-white font-medium text-xl leading-[30px]"
    >
      <GridImages>
        <GridImagesFavourites />
      </GridImages>
    </Backtab>
  );
}
