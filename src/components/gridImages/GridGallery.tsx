import { classNameByCondition } from "./classNameByCondition";
import Image from "next/image";
import type { TGridImagesProps } from "@/types";
import { FavouriteIcon } from "../icons";

export const GridGallery = ({ images }: Pick<TGridImagesProps, "images">) => {
  return (
    <div className="grid grid-cols-3 gap-5 mt-5">
      {Boolean(images.length) &&
        images.map(({ id, url, width, height, breeds }, index) => (
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
            <button className="absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4 p-2.5 leading-6 text-darkPink rounded-1.5lg bg-white transition-opacity opacity-0 group-hover:opacity-100 group-hover:transition-opacity text-center">
              <FavouriteIcon color="fill-darkPink" />
            </button>
          </div>
        ))}
    </div>
  );
};
