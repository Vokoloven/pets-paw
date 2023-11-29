"use client";
import { style } from ".";
import { gridClassName } from "@/utils";
import Image from "next/image";
import type { IBreedImage } from "@/types";
import { useResponsiveScreen } from "@/hooks";

export const GridImagesSearch = ({
  breedImages,
}: {
  breedImages: IBreedImage[];
}) => {
  const { screen } = useResponsiveScreen();

  return (
    Boolean(breedImages.length) &&
    breedImages.map(({ id, url, width, height, breeds }, index) => (
      <div
        key={id}
        className={`${
          screen !== "mobile" && gridClassName(breedImages.length, style)(index)
        } h-full w-full relative transition-colors before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-2.5xl before:hover:bg-rgbaDarkPink before:hover:transition-colors group`}
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
        <div className="absolute bottom-[10px] left-[50%] -translate-x-2/4 py-[5px] px-[42px] leading-6 text-darkPink rounded-1.5lg bg-white transition-opacity opacity-0 group-hover:opacity-100 group-hover:transition-opacity text-center">
          {breeds[0]?.name}
        </div>
      </div>
    ))
  );
};
