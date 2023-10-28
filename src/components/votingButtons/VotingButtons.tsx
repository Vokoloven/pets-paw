import {
  boxPropsByCondition,
  btnPropsByCondition,
} from "./handleVoitingButtons";
import { buttons } from "./buttons";

type TProps = {
  button: {
    id: string;
    icon: JSX.Element;
    name: string;
    ariaLabel: string;
  };
};

export const VotingButton = ({ button }: TProps) => {
  return (
    <>
      <div
        className={`bg-white ${boxPropsByCondition(button.name)}`}
        key={button.id}
      >
        <button
          type="button"
          aria-label={button.ariaLabel}
          className={`p-[25px] border-white ${btnPropsByCondition(
            button.name
          )} group transition`}
        >
          {button.icon}
        </button>
      </div>
    </>
  );
};
