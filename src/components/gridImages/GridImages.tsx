import { classNameByCondition } from "./classNameByCondition";
import Image from "next/image";
import type { TGridImagesProps } from "@/types";

export const GridImages = ({ images, breedId }: TGridImagesProps) => {
  return (
    <div className="grid grid-cols-3 gap-5 mt-5">
      {images?.map(({ id, url, width, height, breeds }, index) => (
        <div
          key={id}
          className={`${classNameByCondition(
            index
          )} relative transition-colors before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-2.5xl before:hover:bg-rgbaDarkPink before:hover:transition-colors group`}
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
          <div className="absolute bottom-[10px] left-[50%] -translate-x-2/4 py-[5px] px-[42px] leading-6 text-darkPink rounded-1.5lg bg-white transition-opacity opacity-0 group-hover:opacity-100 group-hover:transition-opacity text-center">
            {Boolean(breedId?.length) ? breeds[0]?.name : breedId}
          </div>
        </div>
      ))}
    </div>
  );
};
