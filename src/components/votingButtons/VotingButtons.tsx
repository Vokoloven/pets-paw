import {
  boxPropsByCondition,
  btnPropsByCondition,
} from "../../utils/handleVoitingButtons";
import { handleClickVoitingButtons } from "@/utils";
import type { TVotingButton } from "@/types";

export const VotingButton = ({
  button,
  setState,
  image_id,
  setVote,
}: TVotingButton) => {
  return (
    <div
      className={`bg-white dark:bg-[#282828] ${boxPropsByCondition(
        button.name
      )}`}
    >
      <button
        type="button"
        aria-label={button.ariaLabel}
        className={`p-[25px] border-white dark:border-[#282828] ${btnPropsByCondition(
          button.name
        )} group transition`}
        onClick={handleClickVoitingButtons.bind(
          null,
          button.name,
          setState,
          image_id,
          setVote
        )}
      >
        {button.icon}
      </button>
    </div>
  );
};
