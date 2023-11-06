import axios, { AxiosError } from "axios";
import { useCallback, useEffect, useState, useRef } from "react";
import toast from "react-hot-toast";
import type { IBreedCat } from "@/types";

export const useBreeds = () => {
  const [breeds, setBreeds] = useState<IBreedCat[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const isFirstRender = useRef<boolean>(true);

  const getBreeds = useCallback(async () => {
    try {
      setLoading(true);
      const res = await axios.get("/api/breeds");
      const { data } = res;
      if (Boolean(Object.keys(data).length)) setBreeds(data);
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.message);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      getBreeds();
      return () => {
        isFirstRender.current = false;
      };
    }
  }, []);

  return { breeds, loading };
};
