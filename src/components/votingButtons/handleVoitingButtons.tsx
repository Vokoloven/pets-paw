import { LikeIcon, DislikeIcon, FavouriteIcon } from "../icons";

type TButton = {
  id: string;
  icon: JSX.Element;
  name: string;
};

export const votingButtons = [
  {
    id: "1",
    icon: (
      <LikeIcon color={"fill-white group-hover:fill-cardGreen transition"} />
    ),
    name: "add to like list",
  },
  {
    id: "2",
    icon: (
      <FavouriteIcon
        color={"fill-white group-hover:fill-darkPink transition"}
      />
    ),
    name: "add to favourite list",
  },
  {
    id: "3",
    icon: (
      <DislikeIcon
        color={"fill-white group-hover:fill-cardYellow transition"}
      />
    ),
    name: "add to dislike list",
  },
];

export const btnPropsByCondition = (buttons: TButton) => {
  switch (buttons.name) {
    case "add to like list":
      return "bg-cardGreen border-y-4 border-l-4 border-r-2 rounded-l-2.5xl hover:bg-rgbaCardGreen";

      break;

    case "add to favourite list":
      return "bg-darkPink border-y-4 border-r-2 border-l-2 hover:bg-rgbaDarkPink";

      break;

    case "add to dislike list":
      return "bg-cardYellow rounded-r-2.5xl border-y-4 border-l-2 border-r-4 hover:bg-rgbaCardYellow";

      break;

    default:
      break;
  }
};

export const boxPropsByCondition = (buttons: TButton) => {
  switch (buttons.name) {
    case "add to like list":
      return "rounded-tl-2.5xl rounded-bl-2.5xl";

      break;

    case "add to dislike list":
      return "rounded-tr-2.5xl rounded-br-2.5xl";

      break;

    default:
      break;
  }
};
