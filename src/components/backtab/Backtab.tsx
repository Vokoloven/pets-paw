import { BackArrowIcon } from "../icons";
import { useRouter } from "next/navigation";
import type { TBacktabProps } from "@/types";

export const Backtab = ({
  children,
  childrenProps,
  boxProps,
  wrapper,
  boxElement,
  heading,
  boxName,
}: TBacktabProps) => {
  const router = useRouter();

  return (
    <section
      className={`flex ${childrenProps} bg-white dark:bg-rgbaNightBlack p-5 mt-2.5 rounded-2.5xl`}
    >
      <h1 className="absolute left-[-9999px] w-px h-px overflow-hidden">
        {heading}
      </h1>
      <div className={wrapper}>
        <div className="flex items-center">
          <button
            type="button"
            aria-label="back"
            className="bg-lightPink p-2.5 rounded-1.5lg mr-2.5 hover:bg-darkPink group transition outline-none focus:bg-darkPink dark:bg-rgbaDarkPinkLow dark:hover:bg-lightPink"
            onClick={() => router.back()}
          >
            <BackArrowIcon
              color={
                "fill-darkPink group-hover:fill-white group-focus:fill-white transition dark:group-hover:fill-darkPink"
              }
            />
          </button>
          <div className={boxProps}>{boxName}</div>
        </div>
        {boxElement}
      </div>
      {children}
    </section>
  );
};
