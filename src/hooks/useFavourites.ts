import { AxiosError } from "axios";
import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import type { IFavouriteList } from "@/types";

export const useFavourites = () => {
  const [favouriteList, setFavouriteList] = useState<IFavouriteList[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getFavourites = useCallback(async () => {
    try {
      const req = axios.get("/api/favourites");

      const { data } = (await req) as { data: IFavouriteList[] };

      setFavouriteList(data);
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.message);
      }
    }
  }, []);

  const setFavourites = useCallback(async (image_id: string) => {
    try {
      setLoading(true);
      const res = await axios.post("/api/favourites", { image_id });
      const { data } = res;
      if (data.message === "SUCCESS") getFavourites();
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.message);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  const removeFavourites = useCallback(async (favourites_id: number) => {
    try {
      setLoading(true);
      const res = await axios.delete("/api/favourites", {
        data: {
          favourites_id,
        },
      });
      const { data } = res;
      if (data.message === "SUCCESS") getFavourites();
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.message);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getFavourites();
  }, []);
  return { favouriteList, setFavourites, removeFavourites, loading };
};
