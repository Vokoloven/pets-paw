import { Select } from "@/components/form";
import { DropdownIcon } from "@/components/icons";
import { MenuItem } from "@/components/form";
import { Fragment } from "react";
import { UpdateIcon } from "@/components/icons";
import { useBreeds } from "@/hooks";
import type { TGallerySelectProps } from "@/types";

export const GallerySelects = ({
  props: {
    order,
    setBreedId,
    setOrder,
    limit,
    setLimit,
    type,
    setType,
    breedId,
    breeds,
    loadingBreeds,
    getGalleryImages,
  },
}: {
  props: TGallerySelectProps;
}) => {
  return (
    <div className="bg-body dark:bg-rgbaNightBlack rounded-2.5xl pb-5 pt-2.5 px-5 mt-5">
      <div className="flex gap-5 mobile:flex-col mobile:gap-2.5">
        <div className="flex flex-col w-full">
          <span className="pl-2.5 leading-[18px] font-medium text-[10px] text-placeholder">
            ORDER
          </span>
          <Select
            sx={
              "w-full bg-white dark:bg-nightBlack dark:text-white dark:hover:border-rgbaDarkPinkLow px-2.5 py-1.5 rounded-1.5lg text-nightBlack leading-6 flex justify-between items-center border-2 border-transparent border-solid transition hover:border-lightPink"
            }
            paperWrapper="w-full whitespace-nowrap leading-6 absolute top-0 left-0 translate-y-11 rounded-[30px] py-5 bg-white dark:bg-nightBlack z-10 shadow-md"
            paper="text-placeholder"
            paperList="mb-2.5 last:mb-0 px-5 hover:bg-lightPink dark:hover:bg-rgbaDarkPinkLow transition"
            icon={<DropdownIcon color={"fill-placeholder"} />}
            setValue={setOrder}
            value={order}
            defaultValue="RANDOM"
            defaultLabel="Random"
          >
            {Array.from([
              { value: "RANDOM", label: "Random" },
              { value: "ASC", label: "Asc" },
              { value: "DESC", label: "Desc" },
            ]).map(({ value, label }) => (
              <Fragment key={value}>
                <MenuItem value={value}>{label}</MenuItem>
              </Fragment>
            ))}
          </Select>
        </div>
        <div className="flex flex-col w-full">
          <span className="pl-2.5 leading-[18px] font-medium text-[10px] text-placeholder">
            TYPE
          </span>
          <Select
            sx={
              "w-full bg-white dark:bg-nightBlack dark:text-white dark:hover:border-rgbaDarkPinkLow px-2.5 py-1.5 rounded-1.5lg text-nightBlack leading-6 flex justify-between items-center border-2 border-transparent border-solid transition hover:border-lightPink"
            }
            paperWrapper="w-full whitespace-nowrap leading-6 absolute top-0 left-0 translate-y-11 rounded-[30px] py-5 bg-white dark:bg-nightBlack z-10 shadow-md"
            paper="text-placeholder"
            paperList="mb-2.5 last:mb-0 px-5 hover:bg-lightPink dark:hover:bg-rgbaDarkPinkLow transition"
            icon={<DropdownIcon color={"fill-placeholder"} />}
            setValue={setType}
            value={type}
            defaultValue="jpg,png,gif"
            defaultLabel="All"
          >
            {Array.from([
              { value: "jpg,png,gif", label: "All" },
              { value: "jpg,png", label: "Static" },
              { value: "gif", label: "Animated" },
            ]).map(({ value, label }) => (
              <Fragment key={value}>
                <MenuItem value={value}>{label}</MenuItem>
              </Fragment>
            ))}
          </Select>
        </div>
      </div>
      <div className="flex gap-5 mt-2.5 items-end mobile:flex-col mobile:gap-2.5">
        <div className="flex flex-col w-full">
          <span className="pl-2.5 leading-[18px] font-medium text-[10px] text-placeholder">
            BREED
          </span>
          <Select
            sx={
              "w-full bg-white dark:bg-nightBlack dark:text-white dark:hover:border-rgbaDarkPinkLow px-2.5 py-1.5 rounded-1.5lg text-nightBlack leading-6 flex justify-between items-center border-2 border-transparent border-solid transition hover:border-lightPink"
            }
            paperWrapper="w-full whitespace-nowrap h-[300px] leading-6 absolute top-0 left-0 translate-y-11 rounded-[30px] py-5 bg-white dark:bg-nightBlack z-10 overflow-y-auto scrollbar-width scrollbar-thumb shadow-md"
            paper="text-placeholder"
            paperList="mb-2.5 last:mb-0 px-5 hover:bg-lightPink dark:hover:bg-rgbaDarkPinkLow transition"
            icon={<DropdownIcon color={"fill-placeholder"} />}
            setValue={setBreedId}
            value={breedId}
            defaultValue={null}
            defaultLabel="None"
            loader={Array.from({ length: 15 }, (_, index) => (
              <div
                key={index}
                className="h-2 w-[260px] mb-2.5 last:mb-0 animate-pulse mx-auto rounded bg-placeholder"
              ></div>
            ))}
            loading={loadingBreeds}
          >
            {Boolean(breeds.length) && (
              <MenuItem value={null}>{"None"}</MenuItem>
            )}
            {breeds?.map(({ id, name }) => (
              <Fragment key={id}>
                <MenuItem value={id}>{name}</MenuItem>
              </Fragment>
            ))}
          </Select>
        </div>
        <div className="flex flex-col w-full">
          <span className="pl-2.5 leading-[18px] font-medium text-[10px] text-placeholder">
            LIMIT
          </span>
          <div>
            <div className="flex">
              <Select
                sx={
                  "w-full bg-white dark:bg-nightBlack dark:text-white dark:hover:border-rgbaDarkPinkLow px-2.5 py-1.5 rounded-1.5lg text-nightBlack leading-6 flex justify-between items-center border-2 border-transparent border-solid transition hover:border-lightPink"
                }
                mainWrapper="w-full"
                paperWrapper="w-full whitespace-nowrap leading-6 absolute top-0 left-0 translate-y-11 rounded-[30px] py-5 bg-white dark:bg-nightBlack z-10 shadow-md"
                paper="text-placeholder"
                paperList="mb-2.5 last:mb-0 px-5 hover:bg-lightPink dark:hover:bg-rgbaDarkPinkLow transition"
                icon={<DropdownIcon color={"fill-placeholder"} />}
                setValue={setLimit}
                value={limit}
                defaultValue="5"
                defaultLabel="5 items per page"
              >
                {Array.from(["5", "10", "15", "20"]).map((item) => (
                  <Fragment key={item}>
                    <MenuItem value={item}>{`${item} items per page`}</MenuItem>
                  </Fragment>
                ))}
              </Select>
              <button
                aria-label="Refresh list"
                onClick={() => getGalleryImages(breedId, limit, type, order)}
                className="ml-2.5 p-2.5 bg-white dark:bg-nightBlack rounded-1.5lg transition-colors group hover:bg-darkPink"
              >
                <UpdateIcon
                  color={
                    "fill-darkPink transition-colors group-hover:fill-white"
                  }
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
