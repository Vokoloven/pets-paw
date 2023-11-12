"use client";

import { Backtab } from "@/components/backtab";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useSelectedImage } from "@/hooks";
import { breedIdItem } from "@/helpers";
import Slider from "react-slick";

export default function SelectedBreed({
  params,
}: {
  params: { breedId: string };
}) {
  const { breedId } = params;
  const searchParams = useSearchParams();
  const imageId = searchParams.get("imageId");
  const { imageBreed, images } = useSelectedImage(imageId, breedId);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots: any) => (
      <div>
        <ul className="rounded-2.5xl bg-white flex gap-[5px] p-[10px]">
          {dots}
        </ul>
      </div>
    ),
  };

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
      {Boolean(images?.length) && (
        <div className="mt-5 flex flex-col">
          <div className="relative">
            <Slider {...sliderSettings}>
              {images?.map(({ id, url, width, height }) => (
                <Image
                  key={id}
                  src={url}
                  alt="Cat"
                  width={width}
                  height={height}
                  priority
                  placeholder="blur"
                  blurDataURL={url}
                  className="rounded-2.5xl h-[500px] w-full object-cover"
                />
              ))}
            </Slider>
          </div>
          <div className="relative bg-white rounded-2.5xl px-10 py-10 w-full border-2 border-lightPink border-solid mt-[50px]">
            <div className="flex justify-center flex-col">
              <h2 className="font-medium text-xl text-placeholder text-center">
                Breed description
              </h2>
              <div className="mt-5 flex">
                <div className="w-full">
                  <ul>
                    <li className="text-black font-medium">Temperament:</li>
                    <li className="text-placeholder">
                      {images?.[0].breeds[0]?.temperament}
                    </li>
                  </ul>
                </div>
                <div className="w-full ml-5">
                  <ul>
                    {Boolean(images?.length) &&
                      breedIdItem(images?.[0])!.map((item) => (
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
              {images?.[0].breeds[0]?.name}
            </div>
          </div>
        </div>
      )}
    </Backtab>
  );
}
