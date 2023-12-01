"use client";
import { style } from ".";
import { gridClassName, filteredVoteImages } from "@/utils";
import Image from "next/image";
import { BinIcon } from "@/components/icons";
import { useVotes, useResponsiveScreen } from "@/hooks";
import { Spinner } from "../spinner";

export const GridImagesPreference = ({ pref }: { pref: 1 | -1 }) => {
  const { voteImages, removeVotes, loading } = useVotes();
  const { screen } = useResponsiveScreen();

  return (
    Boolean(voteImages.length) &&
    filteredVoteImages(pref, voteImages).map(
      ({ id, image: { url } }, index) => (
        <div
          key={id}
          className={`${
            screen !== "mobile" &&
            gridClassName(voteImages.length, style)(index)
          } h-full w-full relative transition-colors before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-2.5xl before:hover:bg-rgbaDarkPink group`}
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
            onClick={removeVotes.bind(null, id)}
            aria-label="Add to favourites"
            className={`absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4 ${
              loading ? "p-[9px]" : "p-[15px]"
            } leading-6 text-darkPink rounded-1.5lg bg-white transition-opacity opacity-0 group-hover:opacity-100 text-center flex items-center`}
          >
            {loading ? (
              <Spinner sx="h-8 w-8 border-4 text-darkPink" />
            ) : (
              <BinIcon color="fill-darkPink" />
            )}
          </button>
        </div>
      )
    )
  );
};
