"use client";

import { Backtab } from "@/components/backtab";
import { DropdownIcon } from "@/components/icons";
import { Select } from "@/components/form";
import { useState } from "react";
import { replacedInputString } from "@/helpers/";

export default function Breeds() {
  const [breed, setBreed] = useState<string | null>(null);
  const [perPage, setPerPage] = useState<string | null>(null);

  return (
    <Backtab flexProps="flex-row items-center">
      <section>
        <h1 className="absolute left-[9999px] w-px h-px overflow-hidden">
          Breeds
        </h1>
        <div className="flex">
          <Select
            sx={
              "ml-2.5 bg-body w-[226px] px-2.5 py-2 rounded-1.5lg text-placeholder leading-6 flex justify-between items-center"
            }
            paper={
              "text-placeholder leading-6 w-[300px] h-[300px] absolute top-0 left-0 translate-y-11 rounded-[30px] p-5 bg-white"
            }
            paperList={"mb-2.5 last:mb-0 hover:bg-lightPink"}
            icon={<DropdownIcon color={"fill-placeholder"} />}
            setState={setBreed}
            state={breed}
            defaultState="Select..."
            list={Array.from("HereWego")}
          />
          <Select
            sx={
              "ml-2.5 bg-body w-[101px] px-2.5 py-2 rounded-1.5lg text-placeholder leading-6 flex justify-between items-center"
            }
            paper={
              "text-placeholder leading-6 w-[300px] absolute top-0 left-0 translate-y-11 rounded-[30px] p-5 bg-white"
            }
            paperList={"mb-2.5 last:mb-0 hover:bg-lightPink"}
            icon={<DropdownIcon color={"fill-placeholder"} />}
            setState={setPerPage}
            state={perPage}
            defaultState="Limit: 5"
            list={["Limit: 5", "Limit: 10", "Limit: 15", "Limit: 20"]}
          />
        </div>
      </section>
    </Backtab>
  );
}
