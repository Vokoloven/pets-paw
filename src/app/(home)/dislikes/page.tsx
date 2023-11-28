"use client";

import { Backtab } from "@/components/backtab";
import { GridImages } from "@/components/gridImages";
import { GridImagesPreference } from "@/components/gridImages/GridImagesPreference";

export default function Dislikes() {
  return (
    <Backtab
      heading="Dislikes"
      boxName="DISLIKES"
      childrenProps="flex flex-col"
      boxProps="px-[30px] py-[5px] bg-darkPink rounded-1.5lg text-white font-medium text-xl leading-[30px]"
    >
      <GridImages>
        <GridImagesPreference pref={-1} />
      </GridImages>
    </Backtab>
  );
}
