import type { TModalProps } from "@/types";

export const Modal = ({ children, backdrop, modal }: TModalProps) => {
  return (
    <div className={`fixed top-0 left-0 w-full h-full ${backdrop}`}>
      <div className={`absolute ${modal}`}>{children}</div>
    </div>
  );
};
