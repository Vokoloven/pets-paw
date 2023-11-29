import type { TBreedImage } from "@/types";

export const sortBreedsByCondition = (
  breedsImages: TBreedImage[],
  sortCondition?: "az" | "za" | "none"
) => {
  const copyBreedsImages = [...breedsImages];

  if (sortCondition === "az") {
    return copyBreedsImages?.sort((a, b) =>
      a?.breeds[0]?.name?.localeCompare(b?.breeds[0]?.name)
    );
  } else if (sortCondition === "za") {
    return copyBreedsImages?.sort((a, b) =>
      b?.breeds[0]?.name?.localeCompare(a?.breeds[0]?.name)
    );
  } else {
    return breedsImages;
  }
};
