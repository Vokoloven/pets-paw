"use client";

import { Backtab } from "@/components/backtab";
import { useSearchParams } from "next/navigation";
import { useBreeds, useSearch } from "@/hooks";
import { breedsIdsCollector, matchedSearch, searchWrapper } from "@/utils";
import { GridImages } from "@/components/gridImages";
import { GridImagesSearch } from "@/components/gridImages/GridImagesSearch";

import { Spinner } from "@/components/spinner";

export default function Search() {
  const searchParams = useSearchParams();
  const search = searchParams.get("text");
  const { breeds } = useBreeds();
  const { breedImages, loading } = useSearch(
    searchWrapper(breeds, search, matchedSearch)(breedsIdsCollector)
  );

  return (
    <Backtab
      heading="Search"
      boxName="SEARCH"
      childrenProps="flex flex-col"
      boxProps="px-[30px] py-[5px] bg-darkPink rounded-1.5lg text-white font-medium text-xl leading-[30px] tracking-[2px]"
    >
      <div className="mt-5">
        <p className="text-placeholder text-xl leading-none">
          Search result for:{" "}
          <span className="text-black font-medium dark:text-white">
            {search}
          </span>
        </p>
        {loading ? (
          <div className="flex justify-center mt-5">
            <Spinner sx={"h-8 w-8 border-4 text-darkPink"} />
          </div>
        ) : Boolean(breedImages.length) ? (
          <GridImages>
            <GridImagesSearch breedImages={breedImages} />
          </GridImages>
        ) : (
          <p className="text-xl text-nightBlack dark:text-white mt-5">
            No matching breeds found
          </p>
        )}
      </div>
    </Backtab>
  );
}
