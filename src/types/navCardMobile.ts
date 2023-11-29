import type { TNavCardProps } from ".";
import type { Dispatch, SetStateAction } from "react";

type TNavCardMobile = {
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export type TNavCardMobileProps = TNavCardMobile & TNavCardProps;
