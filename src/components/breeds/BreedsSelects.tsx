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
          "mobile:w-full w-[226px] mobile:ml-0 laptop:ml-0 ml-2.5 bg-body px-2.5 py-1.5 rounded-1.5lg text-placeholder leading-6 flex justify-between items-center border-2 border-transparent border-solid transition hover:border-lightPink hover:transition"
        }
        paperWrapper={
          "w-full h-[300px] py-5 leading-6 absolute top-0 left-2.5 translate-y-11 rounded-[30px] bg-white z-10 overflow-y-auto scrollbar-width scrollbar-thumb shadow-md"
        }
        paper={"text-placeholder"}
        paperList={
          "mb-2.5 last:mb-0 px-5 hover:bg-lightPink transition hover:transition"
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
            "mobile:w-full w-[101px] mobile:ml-0 ml-2.5 bg-body px-2.5 py-1.5 rounded-1.5lg text-placeholder leading-6 flex justify-between items-center border-2 border-transparent border-solid transition hover:border-lightPink hover:transition"
          }
          mainWrapper={"mobile:w-full"}
          paperWrapper={
            "w-full py-5 leading-6 absolute top-0 left-2.5 translate-y-11 rounded-[30px] bg-white z-10 shadow-md"
          }
          paper={"text-placeholder"}
          paperList={
            "mb-2.5 last:mb-0 px-5 hover:bg-lightPink transition hover:transition"
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
          className={`ml-2.5 py-1.5 px-2 rounded-1.5lg border-2 border-transparent border-solid group transition hover:transition ${
            sortCondition === "az"
              ? "bg-darkPink"
              : "bg-body hover:border-lightPink"
          }`}
        >
          <SortAZIcon
            color={`${
              sortCondition === "az"
                ? "fill-white"
                : "fill-placeholder group-hover:fill-darkPink group-hover:transition"
            } transition`}
          />
        </button>
        <button
          onClick={() => setSortCondition("za")}
          aria-label="Sort Z-A"
          type="button"
          className={`ml-2.5 py-1.5 px-2 rounded-1.5lg border-2 border-transparent border-solid group transition hover:transition ${
            sortCondition === "za"
              ? "bg-darkPink"
              : "bg-body hover:border-lightPink"
          }`}
        >
          <SortZAIcon
            color={`${
              sortCondition === "za"
                ? "fill-white"
                : "fill-placeholder group-hover:fill-darkPink group-hover:transition"
            } transition`}
          />
        </button>
      </div>
    </div>
  );
};
