import { TBreedCat } from "@/types";

export const breedsIdsCollector = (breeds: TBreedCat[]): string => {
  const breedsIds = breeds?.reduce((acc, breed, index, arr) => {
    if (arr.length - 1 === index) {
      acc = acc + breed.id;
    } else {
      acc = acc + breed.id + ",";
    }

    return acc;
  }, "");

  return breedsIds;
};

export const matchedSearch = (breeds: TBreedCat[], search: string | null) => {
  const filter = breeds.filter(({ id, name }) =>
    name.match(new RegExp(`${search}`, "gi"))
  );
  return filter;
};

export const searchWrapper = (
  breeds: TBreedCat[],
  search: string | null,
  matchedSearch: (breeds: TBreedCat[], search: string | null) => TBreedCat[]
) => {
  const filter = matchedSearch(breeds, search);

  return (func: (breeds: TBreedCat[]) => string) => func(filter);
};
