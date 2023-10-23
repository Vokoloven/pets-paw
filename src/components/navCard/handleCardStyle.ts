export const handleCardStyle = (alt: string) => {
  switch (alt) {
    case "voting":
      return "bg-base-purple";
      break;
    case "breeds":
      return "bg-base-green";
      break;
    case "gallery":
      return "bg-base-yellow";
      break;

    default:
      return "";
  }
};
