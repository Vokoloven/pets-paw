import type { TModalProps } from "@/types";
import { useEffect, useRef, MouseEvent, KeyboardEvent } from "react";

export const Modal = ({
  children,
  backdrop,
  backdropElement,
  modal,
  open,
  setOpen,
}: TModalProps) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    const target = e.target;
    if (target === modalRef.current) setOpen(false);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") setOpen(false);
  };

  useEffect(() => {
    if (open && modalRef.current) modalRef.current.focus();
  }, [open]);

  return (
    <div
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onClick={handleClick}
      ref={modalRef}
      className={`fixed top-0 left-0 w-full h-full ${
        open ? "opacity-100" : "opacity-0 pointer-events-none"
      } transition-all ${backdrop} z-50`}
    >
      {backdropElement}
      <div className={`absolute ${modal}`}>{children}</div>
    </div>
  );
};
