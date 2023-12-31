"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import type { TVotingImage } from "@/types";

export const useVoting = (vote: { value: number; image_id: string } | null) => {
  const [image, setImage] = useState<Array<TVotingImage>>([]);
  const isFirstRender = useRef<boolean>(true);

  const getVoting = useCallback(async () => {
    try {
      const res = await axios.get("/api/voting");
      const { data } = res;
      if (Boolean(data)) {
        setImage(data);
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.message);
      }
    } finally {
    }
  }, []);

  const postVoting = useCallback(async () => {
    try {
      const res = await axios.post("/api/voting", vote);
      const { data } = res;

      if (data.message === "SUCCESS") getVoting();
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.message);
      }
    } finally {
    }
  }, [vote]);

  const postFavourites = useCallback(async () => {
    try {
      const res = await axios.post("/api/favourites", vote);
      const { data } = res;
      if (data.message === "SUCCESS") getVoting();
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.message);
      }
    } finally {
    }
  }, [vote]);

  useEffect(() => {
    if (isFirstRender.current) {
      getVoting();

      return () => {
        isFirstRender.current = false;
      };
    }
  }, []);

  useEffect(() => {
    if (vote?.value === 1 || vote?.value === -1) postVoting();
    if (vote?.value === 0) postFavourites();
  }, [vote]);

  return { image };
};
