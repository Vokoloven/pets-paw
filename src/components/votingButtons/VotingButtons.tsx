import {
  boxPropsByCondition,
  btnPropsByCondition,
} from "./handleVoitingButtons";
import { handleClick } from "./handleClick";
import { TState } from "@/app/voting/page";
import { Dispatch, SetStateAction } from "react";

type TProps = {
  button: {
    id: string;
    icon: JSX.Element;
    name: string;
    ariaLabel: string;
  };
  setState: Dispatch<SetStateAction<Array<TState>>>;
};

export const VotingButton = ({ button, setState }: TProps) => {
  return (
    <>
      <div className={`bg-white ${boxPropsByCondition(button.name)}`}>
        <button
          type="button"
          aria-label={button.ariaLabel}
          className={`p-[25px] border-white ${btnPropsByCondition(
            button.name
          )} group transition`}
          onClick={handleClick.bind(null, button.name, setState)}
        >
          {button.icon}
        </button>
      </div>
    </>
  );
};
