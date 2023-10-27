import {
  votingButtons,
  boxPropsByCondition,
  btnPropsByCondition,
} from "./handleVoitingButtons";

export const VotingButton = () => {
  return (
    <div className="flex absolute bottom-0 left-2/4 -translate-x-1/2 translate-y-1/2">
      {votingButtons.map((button) => (
        <div
          className={`bg-white ${boxPropsByCondition(button)}`}
          key={button.id}
        >
          <button
            type="button"
            aria-label={button.name}
            className={`p-[25px] border-white ${btnPropsByCondition(
              button
            )} group transition`}
          >
            {button.icon}
          </button>
        </div>
      ))}
    </div>
  );
};
