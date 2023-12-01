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
  if (hover) return "bg-lightPink text-darkPink dark:bg-rgbaDarkPinkLow";
  if (focus) return "bg-lightPink text-darkPink dark:bg-rgbaDarkPinkLow";
  return "bg-white text-darkPink dark:bg-rgbaNightBlack";
};

export const handleBgColor = <T>(name: T): string => {
  switch (name) {
    case "voting":
      return "bg-cardPurple";
      break;
    case "breeds":
      return "bg-cardGreen";
      break;
    case "gallery":
      return "bg-cardYellow";
      break;

    default:
      return "";
  }
};

export const hadnleButtonAction = (active: string) => {
  if (active) return;
};
