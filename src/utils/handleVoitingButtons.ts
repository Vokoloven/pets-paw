export const btnPropsByCondition = (name: string) => {
  switch (name) {
    case "like":
      return "bg-cardGreen border-y-4 border-l-4 border-r-2 rounded-l-2.5xl hover:bg-rgbaCardGreen";

      break;

    case "favourite":
      return "bg-darkPink border-y-4 border-r-2 border-l-2 hover:bg-rgbaDarkPink";

      break;

    case "dislike":
      return "bg-cardYellow rounded-r-2.5xl border-y-4 border-l-2 border-r-4 hover:bg-rgbaCardYellow";

      break;

    default:
      return "";
  }
};

export const boxPropsByCondition = (name: string) => {
  switch (name) {
    case "like":
      return "rounded-tl-2.5xl rounded-bl-2.5xl";

      break;

    case "dislike":
      return "rounded-tr-2.5xl rounded-br-2.5xl";

      break;

    default:
      return "";
  }
};

import { Dispatch, SetStateAction } from "react";
import type { TVotingState } from "@/types";

export const handleClickVoitingButtons = (
  name: string,
  setState: Dispatch<SetStateAction<Array<TVotingState>>>,
  image_id: string,
  setVote: Dispatch<SetStateAction<{ value: number; image_id: string } | null>>
) => {
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
