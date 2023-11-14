import axios, { AxiosError } from "axios";
import { useCallback, useEffect, useState, useRef } from "react";
import toast from "react-hot-toast";
import type { IBreedCat, IBreedImage } from "@/types";
import { breedsIdsCollector } from "@/helpers";

export const useBreeds = (breedId: string | null, perPage: string | null) => {
  const [breeds, setBreeds] = useState<IBreedCat[]>([]);
  const [breedImages, setBreedImages] = useState<IBreedImage[]>([]);
  const [loadingBreeds, setLoadingBreeds] = useState<boolean>(false);
  const isFirstRender = useRef<boolean>(true);

  const getBreeds = useCallback(async () => {
    try {
      setLoadingBreeds(true);
      const res = await axios.get("/api/breeds");
      const { data } = res;
      if (Boolean(data.length)) setBreeds(data);
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.message);
      }
    } finally {
      setLoadingBreeds(false);
    }
  }, []);

  const getImages = useCallback(async () => {
    try {
      const res = await axios.post("/api/breeds", {
        ...(breedId === "all"
          ? { breedId: breedsIdsCollector(breeds) }
          : { breedId }),
        perPage,
      });
      const { data } = res;
      setBreedImages(data);
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.message);
      }
    } finally {
    }
  }, [breedId, perPage, breeds]);

  useEffect(() => {
    if (isFirstRender.current) {
      getBreeds();
      return () => {
        isFirstRender.current = false;
      };
    }
  }, []);

  useEffect(() => {
    getImages();
  }, [breedId, perPage, breeds]);

  return { breeds, loadingBreeds, breedImages };
};
