import { Dispatch, ReactNode, SetStateAction } from "react";

export type TSelectProps = {
  sx: string;
  paperWrapper: string;
  paper: string;
  paperList: string;
  icon: JSX.Element;
  value: string | null;
  setValue: Dispatch<SetStateAction<string | null>>;
  defaultValue?: string;
  defaultLabel?: string;
  children: ReactNode;
  loader?: JSX.Element | JSX.Element[];
  loading?: boolean;
};

export type TMenuItemProps = {
  value: string | number;
  children: ReactNode;
};
