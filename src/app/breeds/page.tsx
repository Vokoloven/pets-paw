"use client";

import { Backtab } from "@/components/backtab";
import { DropdownIcon, SortAZIcon, SortZAIcon } from "@/components/icons";
import { Select } from "@/components/form";
import { useState, Fragment } from "react";
import { GridBreeds } from "@/components/gridImages";
import { useBreeds } from "@/hooks";
import { MenuItem } from "@/components/form";
import { sortBreedsByCondition } from "@/helpers";
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
      wrapper="flex"
      childrenProps="flex flex-col"
      heading="Breeds"
      boxName="BREEDS"
      boxProps="px-[30px] py-[5px] bg-darkPink rounded-1.5lg text-white font-medium text-xl leading-[30px]"
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
      <GridBreeds
        images={sortBreedsByCondition(breedImages, sortCondition)}
        imageId={imageId}
      />
    </Backtab>
  );
}
