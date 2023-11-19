import type { PropsWithChildren } from "react";

export const GridImages = ({ children }: PropsWithChildren) => {
  return (
    <div className="grid grid-cols-3 gap-5 mt-5 max-h-[680px] overflow-auto scrollbar-width scrollbar-thumb">
      {children}
    </div>
  );
};
