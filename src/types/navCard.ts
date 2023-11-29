import type { StaticImageData } from "next/image";

export type TNavCardProps = {
  card: {
    id: string;
    src: StaticImageData;
    alt: string;
    name: string;
    ariaLabel: string;
  };
};
