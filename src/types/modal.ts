import type { ReactNode } from "react";

export type TModalProps = {
  children?: ReactNode;
  open?: boolean;
  backdrop?: string;
  modal?: string
};
