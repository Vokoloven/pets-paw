"use client";

import Image from "next/image";
import Logo from "../../../public/logoLight.svg";
import { NavCard } from "../navCard/NavCard";
import { navCardItems } from "../navCard/navCardItems";
import { useRouter } from "next/navigation";

export const Navboard = () => {
  const router = useRouter();

  return (
    <div className="laptop:mr-5 desktop:mr-[72px]">
      <header>
        <Image
          src={Logo}
          alt="logo"
          onClick={() => router.push("/")}
          className="cursor-pointer"
          priority
        />
      </header>
      <p className="text-black text-4.5xl font-medium mt-20">Hi! 👋</p>
      <p className="text-xl text-placeholder mt-2.5">Welcome to Cat Paw</p>
      <p className="text-black text-xl font-medium mt-15">
        Lets start using The Cat API
      </p>
      <nav className="flex items-center gap-x-4 mt-5">
        {navCardItems.map((card) => (
          <NavCard card={card} key={card.id} />
        ))}
      </nav>
    </div>
  );
};
