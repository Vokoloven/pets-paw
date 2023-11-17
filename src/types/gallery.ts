import { Dispatch, SetStateAction } from "react";

type TGallerySelect = {
  state: string | null;
  setState: Dispatch<SetStateAction<string | null>>;
};

export type TGallerySelectProps = {
  order: TGallerySelect["state"];
  type: TGallerySelect["state"];
  breedId: TGallerySelect["state"];
  limit: TGallerySelect["state"];
  setBreedId: TGallerySelect["setState"];
  setLimit: TGallerySelect["setState"];
  setType: TGallerySelect["setState"];
  setOrder: TGallerySelect["setState"];
};
