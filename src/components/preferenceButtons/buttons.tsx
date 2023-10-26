import { DislikeIcon, LikeIcon, FavouriteIcon } from "../icons";

export const buttons = (pathname: string) => {
  const items = [
    {
      id: "1",
      icon: (
        <LikeIcon
          color={pathname === "likes" ? "fill-white" : "fill-darkPink"}
        />
      ),
      name: "likes",
    },
    {
      id: "2",
      icon: (
        <FavouriteIcon
          color={pathname === "favourites" ? "fill-white" : "fill-darkPink"}
        />
      ),
      name: "favourites",
    },
    {
      id: "3",
      icon: (
        <DislikeIcon
          color={pathname === "dislikes" ? "fill-white" : "fill-darkPink"}
        />
      ),
      name: "dislikes",
    },
  ];
  return items;
};
