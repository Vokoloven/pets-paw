import { Dispatch, MouseEventHandler, ReactNode, SetStateAction } from "react";

export type TSelectProps = {
  sx: string;
  paper: string;
  paperList: string;
  icon: JSX.Element;
  value: string | null;
  setValue: Dispatch<SetStateAction<string | null>>;
  defaultState?: string;
  children: ReactNode;
};

export type TMenuItemProps = {
  value: string | number;
  children: ReactNode;
};
