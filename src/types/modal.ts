import type { Dispatch, ReactNode, SetStateAction } from "react";

export type TModalProps = {
  children?: ReactNode;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  backdrop?: string;
  modal?: string;
};
