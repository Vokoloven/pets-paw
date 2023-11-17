"use client";

import { Backtab } from "@/components/backtab";
import { UploadIcon } from "@/components/icons";
import { useState } from "react";
import { Modal } from "@/components/modal";
import { GallerySelects } from "@/components/gallery";
import { GalleryImageUpload } from "@/components/gallery";

export default function Gallery() {
  const [order, setOrder] = useState<string | null>("RANDOM");
  const [type, setType] = useState<string | null>("jpg,png,gif");
  const [breedId, setBreedId] = useState<string | null>(null);
  const [limit, setLimit] = useState<string | null>("5");
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Backtab
      boxName="GALLERY"
      heading="Gallery"
      boxProps="px-[30px] py-[5px] bg-darkPink rounded-1.5lg text-white font-medium text-xl leading-[30px]"
      wrapper="flex justify-between"
      childrenProps="flex flex-col"
      boxElement={
        <button
          onClick={() => setOpen((prevState) => !prevState)}
          className="py-3 px-[30px] bg-lightPink rounded-1.5lg flex items-center hover:bg-darkPink hover:transition-colors transition-colors group"
        >
          <UploadIcon
            color={
              "fill-darkPink group-hover:fill-white group-hover:transition-colors transition-colors"
            }
          />
          <span className="ml-2.5 font-medium text-darkPink text-base leading-4 tracking-[2px] group-hover:text-white group-hover:transition-colors transition-colors">
            UPLOAD
          </span>
        </button>
      }
    >
      <GallerySelects
        props={{
          order,
          setOrder,
          type,
          setType,
          breedId,
          setBreedId,
          limit,
          setLimit,
        }}
      />
      <Modal
        backdrop={`bg-backdrop ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        } transition-all`}
        modal={`top-[50%] right-[30px] transition-all -translate-y-2/4 bg-body rounded-2.5xl p-5 2xl:max-w-[680px] ${
          open ? "scale-100" : "scale-75"
        }`}
      >
        <GalleryImageUpload setOpen={setOpen} />
      </Modal>
    </Backtab>
  );
}
