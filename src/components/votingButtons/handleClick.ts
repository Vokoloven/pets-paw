import { Dispatch, SetStateAction } from "react";
import { TState } from "@/app/voting/page";

export const handleClick = (
  name: string,
  setState: Dispatch<SetStateAction<Array<TState>>>
) => {
  const now = new Date();
  const correctName = name.replace(/\w/, (value) => value.toUpperCase()) + "s";
  const formattedTime = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  const id = new Date().getTime().toString();

  setState((prevState) => [
    { id, time: formattedTime, action: correctName, name },
    ...prevState,
  ]);
};
