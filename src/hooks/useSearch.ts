"use client";

import { useCallback, useEffect, useState, useRef } from "react";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import type { TBreedImage } from "@/types";

export const useSearch = (
  breedId: string,
  perPage: string | null = "100",
  mimeTypes: string | null = "jpg,png,gif",
  order: string | null = "RANDOM"
) => {
  const [breedImages, setBreedImages] = useState<TBreedImage[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getGalleryImages = useCallback(async () => {
    try {
      setLoading(true);
      const res = await axios.post("/api/breeds", {
        breedId,
        perPage,
        mimeTypes,
        order,
      });
      const { data } = res as { data: TBreedImage[] };
      setBreedImages(data);
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.message);
      }
    } finally {
      setLoading(false);
    }
  }, [breedId]);

  useEffect(() => {
    breedId ? getGalleryImages() : setBreedImages([]);
  }, [breedId]);

  return { breedImages, loading };
};
