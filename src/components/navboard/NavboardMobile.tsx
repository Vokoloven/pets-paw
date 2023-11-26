"use client";

import Image from "next/image";
import Logo from "../../../public/logoLight.svg";
import { NavCardMobile } from "@/components/navCard";
import { navCardItems } from "../navCard/navCardItems";
import { useRouter } from "next/navigation";
import type { Dispatch, SetStateAction } from "react";

export const NavboardMobile = ({
  setOpen,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const router = useRouter();

  return (
    <div>
      <nav className="flex items-center gap-x-4">
        {navCardItems.map((card) => (
          <NavCardMobile card={card} key={card.id} setOpen={setOpen} />
        ))}
      </nav>
    </div>
  );
};
