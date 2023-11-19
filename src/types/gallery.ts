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

export interface IUploadImage {
  id: string;
  url: string;
  sub_id: string;
  width: number;
  height: number;
  original_filename: string;
  pending: number;
  approved: number;
}

export interface IUploadedImages {
  breed_ids: null;
  breeds: [];
  created_at: string;
  height: number;
  id: string;
  original_filename: string;
  sub_id: null;
  url: string;
  width: number;
}
