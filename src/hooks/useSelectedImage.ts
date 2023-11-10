import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import type { IBreedImage } from "@/types";
import axios, { AxiosError } from "axios";

export const useSelectedImage = (imageId: string | null) => {
  const [imageBreed, setImageBreed] = useState<IBreedImage>({
    breeds: [],
    id: "",
    url: "",
    width: 0,
    height: 0,
  });
  const [loading, setLoading] = useState<boolean>(false);
  const getImageById = useCallback(async () => {
    try {
      setLoading(true);
      const req = axios.post("/api/selectedImage", { imageId });
      const res = await req;
      const { data } = res;
      setImageBreed(data);
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.message);
      }
    } finally {
      setLoading(false);
    }
  }, [imageId]);

  useEffect(() => {
    getImageById();
  }, [imageId]);

  return { imageBreed };
};
