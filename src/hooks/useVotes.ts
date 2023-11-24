"use client";

import axios, { AxiosError } from "axios";
import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import type { IVotesResponse } from "@/types";

export const useVotes = () => {
  const [voteImages, setVoteImages] = useState<IVotesResponse[]>([]);

  const getVotes = useCallback(async () => {
    try {
      const req = axios.get("/api/votes");

      const { data } = (await req) as { data: IVotesResponse[] };

      setVoteImages(data);
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.message);
      }
    }
  }, []);

  const removeVotes = useCallback(async (vote_id: number) => {
    try {
      const res = await axios.delete("/api/votes", {
        data: { vote_id },
      });

      const { data } = res;

      if (data.message === "SUCCESS") getVotes();
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.message);
      }
    }
  }, []);

  useEffect(() => {
    getVotes();
  }, []);

  return { voteImages, removeVotes };
};
