"use client";

import axios, { AxiosError } from "axios";
import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import type { TVotesResponse } from "@/types";

export const useVotes = () => {
  const [voteImages, setVoteImages] = useState<TVotesResponse[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getVotes = useCallback(async () => {
    try {
      const req = axios.get("/api/votes");

      const { data } = (await req) as { data: TVotesResponse[] };

      setVoteImages(data);
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.message);
      }
    }
  }, []);

  const removeVotes = useCallback(async (vote_id: number) => {
    try {
      setLoading(true);
      const res = await axios.delete("/api/votes", {
        data: { vote_id },
      });

      const { data } = res;

      if (data.message === "SUCCESS") getVotes();
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.message);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getVotes();
  }, []);

  return { voteImages, removeVotes, loading };
};
