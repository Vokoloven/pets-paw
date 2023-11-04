"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";

interface IImage {
  id: string;
  url: string;
  width: number;
  height: number;
  breeds: Record<string, any>[];
}

export const useVoting = (vote: { value: number; image_id: string } | null) => {
  const [image, setImage] = useState<Array<IImage>>([]);
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
    }
  }, []);

  const postVoting = useCallback(async () => {
    try {
      const res = await axios.post("/api/voting", vote);
      const { data } = res;

      if (data.message === "SUCCESS") {
        getVoting();
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.message);
      }
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
    if (!vote) return;

    postVoting();
  }, [vote]);

  return { image };
};
