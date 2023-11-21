import {
  gridClassName,
  styleSkeleton,
  GridImages,
} from "@/components/gridImages";

export default function Loading() {
  return (
    <GridImages>
      {Array.from({ length: 5 }, (_, index) => (
        <div
          className={`${gridClassName(
            5,
            styleSkeleton
          )(index)} bg-placeholder animate-pulse rounded-2.5xl`}
          key={index}
        ></div>
      ))}
    </GridImages>
  );
}
