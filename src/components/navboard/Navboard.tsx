"use client";

import Image from "next/image";
import Logo from "../../../public/logoLight.svg";
import { NavCard } from "../navCard/NavCard";
import { navCardItems } from "../navCard/navCardItems";
import { useRouter } from "next/navigation";
import { Switcher } from "../switcher";
import { useTheme } from "@/hooks";

export const Navboard = () => {
  const router = useRouter();

  const { theme, setTheme } = useTheme();

  return (
    <div className="laptop:mr-5 desktop:mr-[72px] mobile:w-full">
      <header className="flex justify-between">
        <Image
          src={Logo}
          alt="logo"
          onClick={() => router.push("/")}
          className="cursor-pointer"
          priority
        />
        <Switcher setTheme={setTheme} theme={theme} />
      </header>
      <p className="text-black text-4.5xl font-medium mt-20">Hi! 👋</p>
      <p className="text-xl text-placeholder mt-2.5">Welcome to Cat Paw</p>
      <p className="text-black text-xl font-medium mt-15 mobile:mt-[60px]">
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
