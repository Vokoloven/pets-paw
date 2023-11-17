import { Dispatch, ReactNode, SetStateAction } from "react";

export type TSelectProps = {
  mainWrapper?: string;
  sx?: string;
  paperWrapper?: string;
  paper?: string;
  paperList?: string;
  icon: JSX.Element;
  value: string | null;
  setValue: Dispatch<SetStateAction<string | null>>;
  defaultValue: string | null;
  defaultLabel: string;
  children: ReactNode;
  loader?: JSX.Element | JSX.Element[];
  loading?: boolean;
};

export type TMenuItemProps = {
  value: string | number | null;
  children: ReactNode;
};
