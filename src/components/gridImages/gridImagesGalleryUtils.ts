import type { IFavouriteList } from "@/types";

export const isInFavouriteList = (
  favouriteList: IFavouriteList[],
  id: string
) => {
  const inList = favouriteList.reduce((acc, favourite) => {
    if (favourite.image_id === id) {
      return favourite.id;
    } else {
      return acc;
    }
  }, 0);
  return inList;
};

export const handleClick = (
  func: number,
  id: string,
  setFavourites: (image_id: string) => Promise<void>,
  removeFavourites: (image_id: number) => Promise<void>
) => {
  func === 0 ? setFavourites(id) : removeFavourites(func);
};
