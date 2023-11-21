"use client";

import { Backtab } from "@/components/backtab";
import { GridImages, GridImagesPreference } from "@/components/gridImages";

export default function Likes() {
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
