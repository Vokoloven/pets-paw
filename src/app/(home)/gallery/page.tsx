"use client";

import { Backtab } from "@/components/backtab";
import { UploadIcon } from "@/components/icons";
import { useState } from "react";
import { Modal } from "@/components/modal";
import { GallerySelects, GalleryImageUpload } from "@/components/gallery";
import { useOverflow, useBreeds } from "@/hooks";
import { GridImages } from "@/components/gridImages";
import { GridImagesGallery } from "@/components/gridImages/GridImagesGallery";

export default function Gallery() {
  const [order, setOrder] = useState<string | null>("RANDOM");
  const [type, setType] = useState<string | null>("jpg,png,gif");
  const [breedId, setBreedId] = useState<string | null>(null);
  const [limit, setLimit] = useState<string | null>("5");
  const [open, setOpen] = useState<boolean>(false);
  useOverflow(open);
  const { breeds, breedImages, loadingBreeds, getGalleryImages } = useBreeds();

  return (
    <Backtab
      boxName="GALLERY"
      heading="Gallery"
      boxProps="px-[30px] py-[5px] bg-darkPink rounded-1.5lg text-white font-medium text-xl leading-[30px] tracking-[2px]"
      wrapper="flex justify-between mobile:flex-col"
      childrenProps="flex flex-col"
      boxElement={
        <button
          aria-label="Upload"
          onClick={() => setOpen((prevState) => !prevState)}
          className="py-3 px-[30px] bg-lightPink rounded-1.5lg flex items-center hover:bg-darkPink hover:transition-colors transition-colors group mobile:justify-center mobile:mt-2.5"
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
          breeds,
          loadingBreeds,
          getGalleryImages,
        }}
      />
      <GridImages>
        <GridImagesGallery images={breedImages} />
      </GridImages>
      <Modal
        open={open}
        setOpen={setOpen}
        backdrop={"bg-backdrop mobile:bg-body"}
        modal={`mobile:container top-[50%] right-[30px] transition-all -translate-y-2/4 bg-body rounded-2.5xl p-5 2xl:max-w-[680px] mobile:translate-y-0 mobile:static ${
          open ? "scale-100" : "scale-75"
        }`}
      >
        <GalleryImageUpload setOpen={setOpen} />
      </Modal>
    </Backtab>
  );
}
