export const handleCardActions = <T>(hover: T, focus: T, active: T): string => {
  if (active) return "border-lightPink";
  if (hover) return "border-white";
  if (focus) return "border-white";
  return "border-semiTransparentWhite";
};

export const handleButtonActions = <T>(
  hover: T,
  focus: T,
  active: T
): string => {
  if (active) return "bg-darkPink text-white";
  if (hover) return "bg-lightPink text-darkPink";
  if (focus) return "bg-lightPink text-darkPink";
  return "bg-white text-darkPink";
};

export const handleBgColor = <T>(id: T): string => {
  switch (id) {
    case "1":
      return "bg-cardPurple";
      break;
    case "2":
      return "bg-cardGreen";
      break;
    case "3":
      return "bg-cardYellow";
      break;

    default:
      return "";
  }
};
