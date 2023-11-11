import { Dispatch, SetStateAction } from "react";
import type { TVotingState } from "@/types";

export const handleClick = (
  name: string,
  setState: Dispatch<SetStateAction<Array<TVotingState>>>,
  image_id: string,
  setVote: Dispatch<SetStateAction<{ value: number; image_id: string } | null>>
) => {
  // if (!image_id) return;
  const now = new Date();
  const correctName = name.replace(/\w/, (value) => value.toUpperCase()) + "s";
  const formattedTime = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  const id = new Date().getTime().toString();

  const vote = (name: string, image_id: string) => {
    switch (name) {
      case "like":
        return { value: 1, image_id };

        break;

      case "dislike":
        return { value: -1, image_id };

        break;

      case "favourite":
        return { value: 0, image_id };

        break;

      default:
        return null;
    }
  };

  setVote(vote(name, image_id));
  setState((prevState) => [
    { id, time: formattedTime, action: correctName, name, image_id },
    ...prevState,
  ]);
};
