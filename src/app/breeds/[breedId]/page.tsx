"use client";

import { Backtab } from "@/components/backtab";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useSelectedImage } from "@/hooks";
import { breedIdItem } from "@/helpers";

export default function SelectedBreed({
  params,
}: {
  params: { breedId: string };
}) {
  const { breedId } = params;
  const searchParams = useSearchParams();
  const imageId = searchParams.get("imageId");
  const { imageBreed } = useSelectedImage(imageId);

  return (
    <Backtab
      boxElement={
        <div className="ml-2.5 px-[30px] py-[5px] bg-darkPink rounded-1.5lg text-white font-medium text-xl leading-[30px]">
          {breedId.toUpperCase()}
        </div>
      }
      boxName="BREEDS"
      heading="Selected breed"
      wrapper="flex"
      childrenProps="flex flex-col"
      boxProps="px-[30px] py-[5px] bg-lightPink rounded-1.5lg text-darkPink font-medium text-xl leading-[30px]"
    >
      <div className="mt-5 flex flex-col">
        {Boolean(imageBreed.url) && (
          <Image
            src={imageBreed.url}
            alt="Cat"
            width={imageBreed.width}
            height={imageBreed.height}
            priority
            placeholder="blur"
            blurDataURL={imageBreed.url}
            className="rounded-2.5xl object-cover h-full w-full"
          />
        )}
        <div className="relative bg-white rounded-2.5xl px-10 py-10 w-full border-2 border-lightPink border-solid mt-[50px]">
          <div className="flex justify-center flex-col">
            <h2 className="font-medium text-xl text-placeholder text-center">
              Family companion cat
            </h2>
            <div className="mt-5 flex">
              <div className="w-full">
                <ul>
                  <li className="text-black font-medium">Temperament:</li>
                  <li className="text-placeholder">
                    {imageBreed.breeds[0]?.temperament}
                  </li>
                </ul>
              </div>
              <div className="w-full ml-5">
                <ul>
                  {breedIdItem(imageBreed).map((item) => (
                    <li key={item.name}>
                      <span className="font-medium text-black">
                        {item.name}:{" "}
                      </span>
                      <span className="text-placeholder">
                        {item.value} {item.add}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="rounded-2.5xl bg-white py-[5px] px-10 font-medium text-black text-4xl absolute top-0 left-[50%] -translate-y-1/2 -translate-x-1/2 leading-normal">
            {imageBreed?.breeds[0]?.name}
          </div>
        </div>
      </div>
    </Backtab>
  );
}
