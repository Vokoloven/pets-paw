import { IBreedCat } from "@/types";

export const breedsIdsCollector = (breeds: IBreedCat[]): string => {
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

export const matchedSearch = (breeds: IBreedCat[], search: string | null) => {
  const filter = breeds.filter(({ id, name }) =>
    name.match(new RegExp(`${search}`, "gi"))
  );
  return filter;
};

export const searchWrapper = (
  breeds: IBreedCat[],
  search: string | null,
  matchedSearch: (breeds: IBreedCat[], search: string | null) => IBreedCat[]
) => {
  const filter = matchedSearch(breeds, search);

  return (func: (breeds: IBreedCat[]) => string) => func(filter);
};
