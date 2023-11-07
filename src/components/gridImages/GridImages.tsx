import { classNameByCondition } from "./classNameByCondition";
import Image from "next/image";
import type { TGridImagesProps } from "@/types";

export const GridImages = ({ images }: TGridImagesProps) => {
  return (
    <div className="grid grid-cols-3 gap-5 mt-5">
      {images?.map(({ id, url, width, height }, index) => (
        <div
          key={id}
          className={`${classNameByCondition(
            index
          )} relative transition-colors before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-2.5xl hover:before:bg-rgbaDarkPink`}
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
        </div>
      ))}
    </div>
  );
};
