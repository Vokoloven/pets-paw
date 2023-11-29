import { Dispatch, SetStateAction } from "react";

export type TVotingImage = {
  id: string;
  url: string;
  width: number;
  height: number;
  breeds: Record<string, any>[];
};

export type TVotingState = {
  id: string;
  time: string;
  action: string;
  picture?: string;
  name: string;
  image_id: string;
};

export type TVotingButton = {
  button: {
    id: string;
    icon: JSX.Element;
    name: string;
    ariaLabel: string;
  };
  image_id: string;
  setState: Dispatch<SetStateAction<Array<TVotingState>>>;
  setVote: Dispatch<SetStateAction<{ value: number; image_id: string } | null>>;
};
