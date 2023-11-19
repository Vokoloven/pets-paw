import { classNameByCondition } from "./classNameByCondition";
import Image from "next/image";
import type { IVotesResponse } from "@/types";
import { FavouriteFilledIcon } from "@/components/icons";

export const GridImagesPreference = ({
  images,
}: {
  images: IVotesResponse[];
}) => {
  return (
    <>
      {Boolean(images.length) &&
        images.map(({ id, image: { url } }, index) => (
          <div
            key={id}
            className={`${classNameByCondition(
              index
            )} h-full w-full relative transition-colors before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-2.5xl before:hover:bg-rgbaDarkPink before:hover:transition-colors group`}
          >
            <Image
              src={url}
              alt={"Cat"}
              width={500}
              height={500}
              placeholder="blur"
              blurDataURL={url}
              priority
              className="h-full w-full object-cover rounded-2.5xl"
            />
            <button
              aria-label="Add to favourites"
              className="absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4 p-2.5 leading-6 text-darkPink rounded-1.5lg bg-white transition-opacity opacity-0 group-hover:opacity-100 group-hover:transition-opacity text-center"
            >
              <FavouriteFilledIcon color="fill-darkPink" />
            </button>
          </div>
        ))}
    </>
  );
};
