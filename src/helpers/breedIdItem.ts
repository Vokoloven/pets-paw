import type { IBreedImage } from "@/types";

export const breedIdItem = (imageBreed: IBreedImage) => {
  if (imageBreed) {
    return [
      {
        name: "Origin",
        value: imageBreed.breeds[0]?.origin,
        add: "",
      },
      {
        name: "Weight",
        value: imageBreed.breeds[0]?.weight?.metric,
        add: "kgs",
      },
      {
        name: "Life span",
        value: imageBreed.breeds[0]?.life_span,
        add: "years",
      },
    ];
  }
};
