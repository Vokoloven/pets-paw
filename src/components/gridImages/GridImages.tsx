import { classNameByCondition } from "./classNameByCondition";
import Image from "next/image";
import type { TGridImagesProps } from "@/types";
import Link from "next/link";

export const GridImages = ({ images, imageId }: TGridImagesProps) => {
  return (
    <div className="grid grid-cols-3 gap-5 mt-5">
      {Boolean(images.length) &&
        images.map(({ id, url, width, height, breeds }, index) => (
          <Link
            href={{
              pathname: `/breeds/${breeds[0]?.id}`,
              query: {
                imageId: id,
              },
            }}
            className={`${classNameByCondition(index)} `}
            key={id}
          >
            <div
              className={`h-full w-full relative transition-colors before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-2.5xl before:hover:bg-rgbaDarkPink before:hover:transition-colors group`}
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
                {Boolean(imageId?.length) ? breeds[0]?.name : imageId}
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
};
