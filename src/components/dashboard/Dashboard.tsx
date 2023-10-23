"use client";

import Image from "next/image";
import Logo from "../../../public/logoLight.svg";
import { NavCard } from "../navCard/NavCard";
import { navCardItems } from "../navCard/navCardItems";
import { useRouter } from "next/navigation";

export const Dashboard = () => {
  const router = useRouter();

  return (
    <section>
      <header>
        <Image
          src={Logo}
          alt="logo"
          onClick={() => router.push("/")}
          className="cursor-pointer"
        />
      </header>
      <p className="text-black text-4.5xl font-medium mt-20">Hi! 👋</p>
      <h1 className="text-xl text-placeholder mt-2.5">
        Welcome to MacPaw Bootcamp 2023
      </h1>
      <h2 className="text-black text-xl font-medium mt-15">
        Lets start using The Cat API
      </h2>
      <div className="flex items-center gap-x-4 mt-5">
        {navCardItems.map((card) => (
          <NavCard card={card} key={card.alt} />
        ))}
      </div>
    </section>
  );
};
