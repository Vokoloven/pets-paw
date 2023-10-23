export const handleCardBgColor = <T>(alt: T): T => {
  switch (alt) {
    case "voting":
      return "bg-base-purple" as T;
      break;
    case "breeds":
      return "bg-base-green" as T;
      break;
    case "gallery":
      return "bg-base-yellow" as T;
      break;

    default:
      return "" as T;
  }
};

export const handleCardActions = <T>(hover: T, focus: T, active: T): string => {
  if (active) return "border-base-hover-pink";
  if (hover) return "border-white";
  if (focus) return "border-white";
  return "border-base-rgba-0.6";
};

export const handleButtonActions = <T>(
  hover: T,
  focus: T,
  active: T
): string => {
  if (active) return "bg-base-active-pink text-white";
  if (hover) return "bg-base-hover-pink text-base-active-pink";
  if (focus) return "bg-base-hover-pink text-base-active-pink";
  return "bg-white text-base-active-pink";
};
