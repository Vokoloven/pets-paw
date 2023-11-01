import { classNameByCondition } from "./classNameByCondition";
import { replacedInputString } from "@/helpers";
import Image from "next/image";
import Cat from "../../../public/cat.jpg";

type TProps = {
  images: any[];
  perPage: string | null;
};

export const GridImages = ({ images, perPage }: TProps) => {
  return (
    <div className="grid grid-cols-3 gap-5 mt-5">
      {images
        .slice(0, Number(replacedInputString(perPage)))
        .map((item, index) => (
          <div
            key={index}
            className={`${classNameByCondition(
              index
            )} relative transition-colors before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-2.5xl hover:before:bg-rgbaDarkPink`}
          >
            <Image
              src={Cat}
              alt={"Cat"}
              className="h-full object-cover rounded-2.5xl"
              priority
            />
          </div>
        ))}
    </div>
  );
};
