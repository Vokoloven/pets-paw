export const classNameByCondition = (index: number) => {
  if (index === 0 || index === 10 || index === 20) {
    return "row-span-2";
  } else if (index === 3 || index === 13) {
    return "col-span-2 row-span-2";
  } else if (index === 7 || index === 17) {
    return "row-span-2";
  } else if (index === 8 || index === 18) {
    return "col-span-2 row-span-2";
  }
};