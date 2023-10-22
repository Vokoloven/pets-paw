export const handleCardStyle = (alt: string) => {
  switch (alt) {
    case "voting":
      return "bg-regal-purple border-regal-rgba-0.6 ";
      break;
    case "breeds":
      return "bg-regal-green border-regal-rgba-0.6";
      break;
    case "gallery":
      return "bg-regal-yellow border-regal-rgba-0.6";
      break;

    default:
      return "";
  }
};
