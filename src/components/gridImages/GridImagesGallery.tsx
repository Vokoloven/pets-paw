import { classNameByCondition } from "./classNameByCondition";
import Image from "next/image";
import type { TGridImagesProps, IFavouriteList } from "@/types";
import { FavouriteIcon, FavouriteFilledIcon } from "../icons";
import { useFavourites } from "@/hooks";
import { Spinner } from "../spinner";
import { isInFavouriteList, handleClick } from "./gridImagesGalleryUtils";

export const GridImagesGallery = ({
  images,
}: Pick<TGridImagesProps, "images">) => {
  const { favouriteList, setFavourites, removeFavourites, loading } =
    useFavourites();

  return (
    <>
      {Boolean(images.length) &&
        images.map(({ id, url, width, height }, index) => (
          <div
            key={id}
            className={`${classNameByCondition(
              index
            )} h-full w-full relative transition-colors before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-2.5xl before:hover:bg-rgbaDarkPink before:hover:transition-colors group`}
          >
            <Image
              src={url}
              alt={"Cat"}
              width={width}
              height={height}
              placeholder="blur"
              blurDataURL={url}
              priority
              className="h-full w-full object-cover rounded-2.5xl"
            />
            <button
              onClick={handleClick.bind(
                null,
                isInFavouriteList(favouriteList, id),
                id,
                setFavourites,
                removeFavourites
              )}
              aria-label="Add to favourites"
              className={`absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4 ${
                loading ? "p-[9px]" : "p-2.5"
              } leading-6 text-darkPink rounded-1.5lg bg-white transition-opacity opacity-0 group-hover:opacity-100 group-hover:transition-opacity text-center flex items-center`}
            >
              {loading ? (
                <Spinner sx="h-8 w-8 border-4 text-darkPink" />
              ) : isInFavouriteList(favouriteList, id) ? (
                <FavouriteFilledIcon color="fill-darkPink" />
              ) : (
                <FavouriteIcon color="fill-darkPink" />
              )}
            </button>
          </div>
        ))}
    </>
  );
};
