const sortByCondition = (items: any[], condition: "az" | "za") => {
  if (condition === "az") return items.sort((a, b) => a.localeCompare(b));
  if (condition === "za") return items.sort((b, a) => a.localeCompare(a));
};
