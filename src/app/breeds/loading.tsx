import { classNameByConditionSkeleton } from "@/components/gridImages/classNameByCondition";

export default function Loading() {
  return (
    <div className="grid grid-cols-3 gap-5 mt-5">
      {Array.from({ length: 5 }, (_, index) => (
        <div
          className={`${classNameByConditionSkeleton(
            index
          )} bg-placeholder animate-pulse rounded-2.5xl`}
          key={index}
        ></div>
      ))}
    </div>
  );
}
