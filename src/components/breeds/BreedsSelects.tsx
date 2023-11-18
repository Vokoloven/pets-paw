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
    <div className="flex">
      <Select
        sx={
          "w-[226px] ml-2.5 bg-body px-2.5 py-1.5 rounded-1.5lg text-placeholder leading-6 flex justify-between items-center border-2 border-transparent border-solid transition hover:border-lightPink hover:transition"
        }
        paperWrapper={
          "w-[300px] h-[300px] py-5 leading-6 absolute top-0 left-0 translate-y-11 rounded-[30px] bg-white z-10 overflow-y-auto scrollbar-width scrollbar-thumb"
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
      <Select
        sx={
          "w-[101px] ml-2.5 bg-body px-2.5 py-1.5 rounded-1.5lg text-placeholder leading-6 flex justify-between items-center border-2 border-transparent border-solid transition hover:border-lightPink hover:transition"
        }
        paperWrapper={
          "w-[300px] py-5 leading-6 absolute top-0 left-0 translate-y-11 rounded-[30px] bg-white z-10"
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
  );
};
