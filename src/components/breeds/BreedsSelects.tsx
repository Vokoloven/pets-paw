import { Select } from "@/components/form";
import { DropdownIcon, SortAZIcon, SortZAIcon } from "@/components/icons";
import type { TBreedsSelectsProps } from "@/types";
import { Fragment } from "react";
import { MenuItem } from "@/components/form";

export const BreedsSelects = ({
  props: {
    breeds,
    imageId,
    loadingBreeds,
    perPage,
    sortCondition,
    setImageId,
    setPerPage,
    setSortCondition,
  },
}: {
  props: TBreedsSelectsProps;
}) => {
  return (
    <div className="mobile:w-full flex mobile:flex-col mobile:mt-2.5 laptop:mt-2.5">
      <Select
        sx={
          "mobile:w-full w-[226px] mobile:ml-0 laptop:ml-0 ml-2.5 bg-body dark:bg-rgbaNightBlack px-2.5 py-1.5 rounded-1.5lg text-placeholder leading-6 flex justify-between items-center border-2 border-transparent border-solid transition hover:border-lightPink dark:hover:border-rgbaDarkPinkLow"
        }
        paperWrapper={
          "w-full h-[300px] py-5 leading-6 absolute top-0 left-0 translate-y-11 rounded-[30px] bg-white dark:bg-nightDark z-10 overflow-y-auto scrollbar-width scrollbar-thumb shadow-md"
        }
        paper={"text-placeholder"}
        paperList={
          "mb-2.5 last:mb-0 px-5 hover:bg-lightPink dark:hover:bg-rgbaDarkPinkLow transition"
        }
        icon={<DropdownIcon color={"fill-placeholder"} />}
        setValue={setImageId}
        value={imageId}
        defaultLabel="All breeds"
        defaultValue="all"
        loader={Array.from({ length: 15 }, (_, index) => (
          <div
            key={index}
            className="h-2 w-[260px] mb-2.5 last:mb-0 animate-pulse mx-auto rounded bg-placeholder"
          ></div>
        ))}
        loading={loadingBreeds}
      >
        {Boolean(breeds.length) && (
          <MenuItem value={"all"}>{"All breeds"}</MenuItem>
        )}
        {breeds?.map(({ id, name }) => (
          <Fragment key={id}>
            <MenuItem value={id}>{name}</MenuItem>
          </Fragment>
        ))}
      </Select>
      <div className="flex mobile:mt-2.5 mobile:w-full">
        <Select
          sx={
            "mobile:w-full w-[101px] mobile:ml-0 ml-2.5 bg-body dark:bg-rgbaNightBlack px-2.5 py-1.5 rounded-1.5lg text-placeholder leading-6 flex justify-between items-center border-2 border-transparent border-solid transition hover:border-lightPink dark:hover:border-rgbaDarkPinkLow"
          }
          mainWrapper={"mobile:w-full"}
          paperWrapper={
            "w-full py-5 leading-6 absolute top-0 left-0 translate-y-11 rounded-[30px] bg-white dark:bg-nightDark z-10 shadow-md"
          }
          paper={"text-placeholder"}
          paperList={
            "mb-2.5 last:mb-0 px-5 hover:bg-lightPink dark:hover:bg-rgbaDarkPinkLow transition"
          }
          icon={<DropdownIcon color={"fill-placeholder"} />}
          defaultLabel="Limit: 5"
          defaultValue="5"
          value={perPage}
          setValue={setPerPage}
        >
          {["5", "10", "15", "20"].map((item, index) => (
            <Fragment key={index}>
              <MenuItem value={item}>{`Limit: ${item}`}</MenuItem>
            </Fragment>
          ))}
        </Select>
        <button
          onClick={() => setSortCondition("az")}
          aria-label="Sort A-Z"
          type="button"
          className={`ml-2.5 py-1.5 px-2 rounded-1.5lg border-2 border-transparent border-solid group transition ${
            sortCondition === "az"
              ? "bg-darkPink dark:bg-rgbaDarkPinkLow"
              : "bg-body dark:bg-rgbaNightBlack hover:border-lightPink dark:hover:border-rgbaDarkPinkLow"
          }`}
        >
          <SortAZIcon
            color={`${
              sortCondition === "az"
                ? "fill-white dark:fill-darkPink"
                : "fill-placeholder group-hover:fill-darkPink"
            } transition`}
          />
        </button>
        <button
          onClick={() => setSortCondition("za")}
          aria-label="Sort Z-A"
          type="button"
          className={`ml-2.5 py-1.5 px-2 rounded-1.5lg border-2 border-transparent border-solid group transition ${
            sortCondition === "za"
              ? "bg-darkPink dark:bg-rgbaDarkPinkLow"
              : "bg-body dark:bg-rgbaNightBlack hover:border-lightPink dark:hover:border-rgbaDarkPinkLow"
          }`}
        >
          <SortZAIcon
            color={`${
              sortCondition === "za"
                ? "fill-white dark:fill-darkPink"
                : "fill-placeholder group-hover:fill-darkPink"
            } transition`}
          />
        </button>
      </div>
    </div>
  );
};
