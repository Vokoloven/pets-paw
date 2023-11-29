import type { TFavouriteList } from "@/types";

export const isInFavouriteList = (
  favouriteList: TFavouriteList[],
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

export const handleClickToFavourites = (
  func: number,
  id: string,
  setFavourites: (image_id: string) => Promise<void>,
  removeFavourites: (image_id: number) => Promise<void>
) => {
  func === 0 ? setFavourites(id) : removeFavourites(func);
};

import type { TVotesResponse } from "@/types";

export const filteredVoteImages = (
  pref: 1 | -1,
  voteImages: TVotesResponse[]
) => {
  const result = voteImages.reduce((acc: TVotesResponse[], image) => {
    if (pref === image.value) {
      acc = [...acc, image];

      return acc;
    }

    return acc;
  }, []);
  return result;
};

export const gridClassName = (
  arrayLength: number,
  style: { index: number; style: string }[]
) => {
  const accArr: { index: number; style: string }[] = [];
  const baseIndex = Math.ceil(arrayLength / 10);

  for (let i = 0; i < baseIndex; i++) {
    accArr.push(
      ...style.map(({ index, style }) => {
        return { index: index + 10 * i, style };
      })
    );
  }

  return (index: number) => {
    const style = accArr.find((style) => style.index === index);
    const styleValue = style ? style.style : "";
    return styleValue;
  };
};
