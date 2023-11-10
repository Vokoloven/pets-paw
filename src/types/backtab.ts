import { ReactNode } from "react";

export type TBacktabProps = {
  children: ReactNode;
  boxProps?: string;
  childrenProps?: string;
  boxElement?: JSX.Element;
  heading: string;
  boxName: string;
  wrapper?: string;
};
