import { LikeIcon, DislikeIcon, FavouriteIcon } from "../icons";

export const handleIcon = (name: string) => {
  switch (name) {
    case "like":
      return <LikeIcon color={"fill-cardGreen"} />;

      break;
    case "favourite":
      return <FavouriteIcon color={"fill-darkPink"} />;

      break;
    case "dislike":
      return <DislikeIcon color={"fill-cardYellow"} />;

      break;

    default:
      return "";
  }
};
