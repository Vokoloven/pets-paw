import { DislikeIcon, LikeIcon, FavouriteIcon } from "../icons";

export const buttons = (pathname: string) => {
  const items = [
    {
      id: "1",
      icon: (
        <LikeIcon
          color={
            pathname === "likes"
              ? "fill-white dark:fill-darkPink"
              : "fill-darkPink"
          }
        />
      ),
      name: "likes",
      ariaLabel: "Likes list",
    },
    {
      id: "2",
      icon: (
        <FavouriteIcon
          color={
            pathname === "favourites"
              ? "fill-white dark:fill-darkPink"
              : "fill-darkPink"
          }
        />
      ),
      name: "favourites",
      ariaLabel: "Favourites list",
    },
    {
      id: "3",
      icon: (
        <DislikeIcon
          color={
            pathname === "dislikes"
              ? "fill-white dark:fill-darkPink"
              : "fill-darkPink"
          }
        />
      ),
      name: "dislikes",
      ariaLabel: "Dislikes list",
    },
  ];
  return items;
};
