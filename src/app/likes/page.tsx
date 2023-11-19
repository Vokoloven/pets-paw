"use client";

import { Backtab } from "@/components/backtab";
import { GridImages, GridImagesPreference } from "@/components/gridImages";
import { useVotes } from "@/hooks";

export default function Likes() {
  const { voteImages } = useVotes();

  return (
    <Backtab
      heading="Likes"
      boxName="LIKES"
      childrenProps="flex flex-col"
      boxProps="px-[30px] py-[5px] bg-darkPink rounded-1.5lg text-white font-medium text-xl leading-[30px]"
    >
      <GridImages>
        <GridImagesPreference
          images={voteImages?.filter(({ value }) => value === 1)}
        />
      </GridImages>
    </Backtab>
  );
}
