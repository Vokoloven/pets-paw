import { NavCardMobile, navCardItems } from "@/components/navCard";
import type { Dispatch, SetStateAction } from "react";

export const NavboardMobile = ({
  setOpen,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
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
