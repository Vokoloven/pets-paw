import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

type TProps = {
  button: {
    id: string;
    icon: React.JSX.Element;
    name: string;
  };
  pathname: string;
};

export const PreferenceButtons = ({ button, pathname }: TProps) => {
  const [active, setActive] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    if (button.name === pathname) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [pathname]);

  return (
    <button
      type="button"
      aria-label={button.name}
      onClick={() => router.push(button.name)}
      className={`p-[15px] rounded-2.5xl outline-none ${
        active
          ? "bg-darkPink"
          : "bg-white hover:bg-lightPink focus:bg-lightPink transition cursor-pointer"
      }`}
    >
      {button.icon}
    </button>
  );
};