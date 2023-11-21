export const style = [
  { index: 0, style: "row-span-2" },
  { index: 3, style: "col-span-2 row-span-2" },
  { index: 7, style: "row-span-2" },
  { index: 8, style: "col-span-2 row-span-2" },
];

export const styleSkeleton = [
  { index: 0, style: "row-span-2" },
  { index: 1, style: "h-[200px]" },
  { index: 2, style: "h-[200px]" },
  { index: 4, style: "h-[200px]" },
  { index: 3, style: "col-span-2 row-span-2 h-[400px]" },
  { index: 7, style: "row-span-2" },
  { index: 8, style: "col-span-2 row-span-2 h-[400px]" },
];

export const gridClassName = (
  arrayLength: number,
  style: { index: number; style: string }[]
) => {
  const accArr: { index: number; style: string }[] = [];
  const baseIndex = Math.ceil(arrayLength / 10);

  for (let i = 0; i < baseIndex; i++) {
    accArr.push(
      ...style.map(({ index, style }) => {
        return { index: index + 10 * i, style };
      })
    );
  }

  return (index: number) => {
    const style = accArr.find((style) => style.index === index);
    const styleValue = style ? style.style : "";
    return styleValue;
  };
};
