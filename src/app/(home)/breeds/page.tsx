"use client";

import { Backtab } from "@/components/backtab";
import { useState } from "react";
import { GridImages } from "@/components/gridImages";
import { GridImagesBreeds } from "@/components/gridImages/GridImagesBreeds";

import { useBreeds } from "@/hooks";
import { sortBreedsByCondition } from "@/utils";
import { BreedsSelects } from "@/components/breeds";

export default function Breeds() {
  const [imageId, setImageId] = useState<string | null>("all");
  const [perPage, setPerPage] = useState<string | null>("5");
  const [sortCondition, setSortCondition] = useState<"az" | "za" | "none">(
    "none"
  );
  const { breeds, loadingBreeds, breedImages } = useBreeds(imageId, perPage);

  return (
    <Backtab
      wrapper="flex mobile:flex-wrap laptop:flex-wrap"
      childrenProps="flex flex-col"
      heading="Breeds"
      boxName="BREEDS"
      boxProps="px-[30px] py-[5px] bg-darkPink rounded-1.5lg text-white font-medium text-xl leading-[30px] tracking-[2px]"
      boxElement={
        <BreedsSelects
          props={{
            breeds,
            imageId,
            loadingBreeds,
            perPage,
            sortCondition,
            setImageId,
            setPerPage,
            setSortCondition,
          }}
        />
      }
    >
      <GridImages>
        <GridImagesBreeds
          images={sortBreedsByCondition(breedImages, sortCondition)}
          imageId={imageId}
        />
      </GridImages>
    </Backtab>
  );
}
