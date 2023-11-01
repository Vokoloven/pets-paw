import { ReactNode } from "react";
import { BackArrowIcon } from "../icons";
import { useClearPathname } from "@/hooks/useClearPathname";
import { useRouter } from "next/navigation";

type TProps = { children: ReactNode; flexProps: string };

export const Backtab = ({ children, flexProps }: TProps) => {
  const pathname = useClearPathname();
  const router = useRouter();

  return (
    <div className={`flex ${flexProps} bg-white p-5 mt-2.5 rounded-2.5xl`}>
      <div className="flex items-center">
        <button
          type="button"
          aria-label="back"
          className="bg-lightPink p-2.5 rounded-1.5lg mr-2.5 hover:bg-darkPink group transition outline-none focus:bg-darkPink"
          onClick={() => router.back()}
        >
          <BackArrowIcon
            color={
              "fill-darkPink group-hover:fill-white group-focus:fill-white transition"
            }
          />
        </button>
        <div className="px-[30px] py-[5px] bg-darkPink rounded-1.5lg text-white font-medium text-xl leading-[30px]">
          {pathname.toUpperCase()}
        </div>
      </div>
      {children}
    </div>
  );
};
