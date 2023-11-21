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
