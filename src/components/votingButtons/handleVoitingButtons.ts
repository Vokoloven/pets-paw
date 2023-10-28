export const btnPropsByCondition = (name: string) => {
  switch (name) {
    case "like":
      return "bg-cardGreen border-y-4 border-l-4 border-r-2 rounded-l-2.5xl hover:bg-rgbaCardGreen";

      break;

    case "favourite":
      return "bg-darkPink border-y-4 border-r-2 border-l-2 hover:bg-rgbaDarkPink";

      break;

    case "dislike":
      return "bg-cardYellow rounded-r-2.5xl border-y-4 border-l-2 border-r-4 hover:bg-rgbaCardYellow";

      break;

    default:
      break;
  }
};

export const boxPropsByCondition = (name: string) => {
  switch (name) {
    case "like":
      return "rounded-tl-2.5xl rounded-bl-2.5xl";

      break;

    case "dislike":
      return "rounded-tr-2.5xl rounded-br-2.5xl";

      break;

    default:
      break;
  }
};
