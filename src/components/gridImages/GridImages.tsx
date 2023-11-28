import type { PropsWithChildren } from "react";

export const GridImages = ({ children }: PropsWithChildren) => {
  return (
    <div className="grid mobile:grid-cols-1 mobile:gap-2.5 grid-cols-3 gap-5 mt-5">
      {children}
    </div>
  );
};
