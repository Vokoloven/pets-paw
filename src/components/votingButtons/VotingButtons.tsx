import { LikeIcon, DislikeIcon, FavouriteIcon } from "../icons";

const buttons = [
  {
    id: "1",
    icon: <LikeIcon color={"fill-white"} />,
    name: "add to like list",
  },
  {
    id: "2",
    icon: <FavouriteIcon color={"fill-white"} />,
    name: "add to favourite list",
  },
  {
    id: "3",
    icon: <DislikeIcon color={"fill-white"} />,
    name: "add to dislike list",
  },
];

type TButton = {
  id: string;
  icon: JSX.Element;
  name: string;
};

export const VotingButton = () => {
  const propsByCondition = (buttons: TButton) => {
    switch (buttons.name) {
      case "add to like list":
        return "bg-cardGreen border-y-4 border-l-4 border-r-2 rounded-l-2.5xl";

        break;

      case "add to favourite list":
        return "bg-darkPink border-y-4 border-r-2 border-l-2";

        break;

      case "add to dislike list":
        return "bg-cardYellow rounded-r-2.5xl border-y-4 border-l-2 border-r-4";

        break;

      default:
        break;
    }
  };

  return (
    <div className="flex absolute bottom-0 left-2/4 -translate-x-1/2 translate-y-1/2">
      {buttons.map((button) => (
        <button type="button" aria-label={button.name} className={`p-[25px] border-white ${propsByCondition(button)}`}>
          {button.icon}
        </button>
      ))}
    </div>
  );
};
