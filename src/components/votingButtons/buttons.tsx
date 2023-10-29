import { LikeIcon, DislikeIcon, FavouriteIcon } from "../icons";

export const buttons = [
  {
    id: "1",
    icon: (
      <LikeIcon color={"fill-white group-hover:fill-cardGreen transition"} />
    ),
    name: "like",
    ariaLabel: "Add to like list",
  },
  {
    id: "2",
    icon: (
      <FavouriteIcon
        color={"fill-white group-hover:fill-darkPink transition"}
      />
    ),
    name: "favourite",
    ariaLabel: "Add to favourite list",
  },
  {
    id: "3",
    icon: (
      <DislikeIcon
        color={"fill-white group-hover:fill-cardYellow transition"}
      />
    ),
    name: "dislike",
    ariaLabel: "Add to dislike list",
  },
];
