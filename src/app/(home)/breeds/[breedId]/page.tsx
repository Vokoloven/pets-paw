"use client";

import { Backtab } from "@/components/backtab";
import { useSearchParams } from "next/navigation";
import { useSelectedImage } from "@/hooks";
import { breedIdItem } from "@/utils";
import { CustomSlider } from "@/components/slider";

export default function SelectedBreed({
  params,
}: {
  params: { breedId: string };
}) {
  const { breedId } = params;
  const searchParams = useSearchParams();
  const imageId = searchParams.get("imageId");
  const { images } = useSelectedImage(imageId, breedId);

  return (
    <Backtab
      boxElement={
        <div className="ml-2.5 mobile:px-4 px-[30px] py-[5px] bg-darkPink rounded-1.5lg text-white font-medium text-xl leading-[30px] tracking-[2px]">
          {breedId.toUpperCase()}
        </div>
      }
      boxName="BREEDS"
      heading="Selected breed"
      wrapper="flex"
      childrenProps="flex flex-col"
      boxProps="px-[30px] py-[5px] bg-lightPink rounded-1.5lg text-darkPink font-medium text-xl leading-[30px] tracking-[2px]"
    >
      {Boolean(images?.length) && (
        <div className="mt-5 flex flex-col">
          <CustomSlider images={images} />
          <div className="relative bg-white rounded-2.5xl p-10 mobile:p-5 w-full border-2 border-lightPink border-solid mt-[50px]">
            <div className="flex justify-center flex-col">
              <h2 className="font-medium text-xl text-placeholder text-center mobile:text-base">
                Breed description
              </h2>
              <div className="mt-5 flex mobile:flex-col mobile:mt-0">
                <div className="w-full">
                  <ul>
                    <li className="text-black font-medium">Temperament:</li>
                    <li className="text-placeholder">
                      {images?.[0].breeds[0]?.temperament}
                    </li>
                  </ul>
                </div>
                <div className="w-full ml-5 mobile:ml-0">
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
            <div className="mobile:text-xl mobile:px-5 mobile:py-4 whitespace-nowrap rounded-2.5xl bg-white py-[5px] px-10 font-medium text-black text-4xl absolute top-0 left-[50%] -translate-y-1/2 -translate-x-1/2 leading-normal text-center">
              {images?.[0].breeds[0]?.name}
            </div>
          </div>
        </div>
      )}
    </Backtab>
  );
}
