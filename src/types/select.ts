import { Dispatch, SetStateAction } from "react";

export type TSelectProps = {
  sx: string;
  paper: string;
  paperList: string;
  icon: JSX.Element;
  list: any[];
  state: string | null;
  setState: Dispatch<SetStateAction<string | null>>;
  defaultState?: string;
};
