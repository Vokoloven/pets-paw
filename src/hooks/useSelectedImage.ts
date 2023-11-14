import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import type { IBreedImage } from "@/types";
import axios, { AxiosError } from "axios";

export const useSelectedImage = (imageId: string | null, breedId: string) => {
  const [imageBreed, setImageBreed] = useState<IBreedImage>({
    breeds: [],
    id: "",
    url: "",
    width: 0,
    height: 0,
  });
  const [imagesBreed, setBreedImages] = useState<IBreedImage[]>([]);

  const getImageById = useCallback(async () => {
    try {
      const req = axios.post("/api/selectedImage", { imageId });
      const res = await req;
      const { data } = res;
      setImageBreed(data);
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.message);
      }
    } finally {
    }
  }, [imageId]);

  const getImages = useCallback(async () => {
    try {
      const res = await axios.post("/api/breeds", { perPage: 4, breedId });
      const { data } = res;
      setBreedImages(data);
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.message);
      }
    } finally {
    }
  }, [breedId]);

  useEffect(() => {
    getImageById();
  }, [imageId]);

  useEffect(() => {
    getImages();
  }, [breedId]);

  const spreadImages = (
    imageBreed: IBreedImage,
    imagesBreed: IBreedImage[]
  ) => {
    if (Boolean(imageBreed.breeds.length) && Boolean(imagesBreed.length)) {
      const spreadImages = [imageBreed, ...imagesBreed];
      return spreadImages;
    } else {
      return [];
    }
  };

  const images = spreadImages(imageBreed, imagesBreed);

  return { imageBreed, imagesBreed, images };
};
