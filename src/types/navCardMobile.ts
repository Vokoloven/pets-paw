import type { TNavCardProps } from ".";
import type { Dispatch, SetStateAction } from "react";

type TNavMobile = {
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export type TNavCardMobile = TNavMobile & TNavCardProps;
