"use client";

import Image from "next/image";
import Logo from "../../../public/logoLight.svg";
import DarkLogo from "../../../public/logoDark.svg";
import { NavCard } from "../navCard/NavCard";
import { navCardItems } from "../navCard/navCardItems";
import { useRouter } from "next/navigation";
import { Switcher } from "../switcher";
import type { TNavboardProps } from "@/types";
import { DarkIcon, LightIcon } from "../icons";

export const Navboard = ({
  props: { setTheme, theme },
}: {
  props: TNavboardProps;
}) => {
  const router = useRouter();

  return (
    <div className="laptop:mr-5 desktop:mr-[72px] mobile:w-full laptop:sticky laptop:top-8 laptop:self-start desktop:sticky desktop:top-8 desktop:self-start">
      <header className="flex justify-between">
        <Image
          src={Logo}
          alt="logo"
          onClick={() => router.push("/")}
          className="cursor-pointer opacity-100 dark:absolute dark:opacity-0"
          priority
        />
        <Image
          src={DarkLogo}
          alt="logo"
          onClick={() => router.push("/")}
          className="cursor-pointer opacity-0 dark:opacity-100"
          priority
        />
        <div className="flex">
          <div className="flex items-center rounded-[50%] p-1 bg-white dark:bg-rgbaNightBlack mr-2.5 transition-colors">
            <LightIcon color={"fill-darkPink dark:opacity-0 dark:absolute"} />
            <DarkIcon
              color={
                "fill-darkPink dark:opacity-100 dark:static absolute opacity-0"
              }
            />
          </div>
          <Switcher setTheme={setTheme} theme={theme} />
        </div>
      </header>
      <p className="text-nightBlack text-4.5xl font-medium mt-20 dark:text-white">
        Hi! 👋
      </p>
      <p className="text-xl text-placeholder mt-2.5 dark:text-placeholder">
        Welcome to Cat Paw
      </p>
      <p className="text-nightBlack text-xl font-medium mt-15 mobile:mt-[60px] dark:text-white">
        Lets start using The Cat API
      </p>
      <nav className="flex items-center gap-x-4 mt-5 mobile:flex-col">
        {navCardItems.map((card) => (
          <NavCard card={card} key={card.id} />
        ))}
      </nav>
    </div>
  );
};
