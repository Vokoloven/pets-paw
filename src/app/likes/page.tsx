"use client";

import { Backtab } from "@/components/backtab";
import { GridImages, GridImagesPreference } from "@/components/gridImages";

export default function Likes() {
  return (
    <Backtab
      heading="Likes"
      boxName="LIKES"
      childrenProps="flex flex-col"
      boxProps="px-[30px] py-[5px] bg-darkPink rounded-1.5lg text-white font-medium text-xl leading-[30px]"
    >
      <GridImages>
        <GridImagesPreference />
      </GridImages>
    </Backtab>
  );
}
