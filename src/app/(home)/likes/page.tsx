"use client";

import { Backtab } from "@/components/backtab";
import { GridImages } from "@/components/gridImages";
import { GridImagesPreference } from "@/components/gridImages/GridImagesPreference";

export default function Likes() {
  return (
    <Backtab
      heading="Likes"
      boxName="LIKES"
      childrenProps="flex flex-col"
      boxProps="px-[30px] py-[5px] bg-darkPink rounded-1.5lg text-white font-medium text-xl leading-[30px] tracking-[2px]"
    >
      <GridImages>
        <GridImagesPreference pref={1} />
      </GridImages>
    </Backtab>
  );
}
