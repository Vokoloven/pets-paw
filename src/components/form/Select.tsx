import {
  useState,
  useEffect,
  Children,
  cloneElement,
  ReactNode,
  isValidElement,
  MouseEvent,
} from "react";
import type { TSelectProps } from "@/types";

export const Select = ({
  sx,
  paper,
  paperList,
  icon,
  setValue,
  value,
  defaultState,
  children,
}: TSelectProps) => {
  const [label, setLabel] = useState<string | undefined | null>(
    () => defaultState
  );
  const [open, setOpen] = useState<boolean>(false);
  const [isMouseListening, setIsMouseListening] = useState<boolean>(false);

  const toggleOpen = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const handleClick = (value: string, e: MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    const { textContent } = target;
    setLabel(textContent);
    setValue(value);
    setOpen(false);
  };

  const handleClickOutside = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (isMouseListening) {
      return;
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMouseListening]);

  useEffect(() => {
    if (!value && defaultState) {
      setValue(defaultState);
    }
  }, [value]);

  return (
    <div className="relative">
      <div
        onMouseEnter={() => setIsMouseListening(true)}
        onMouseLeave={() => setIsMouseListening(false)}
        onClick={toggleOpen}
        className={sx}
      >
        <span>{label}</span>
        <div
          className={`${
            open && "rotate-180 transition-transform"
          } transition-transform`}
        >
          {icon}
        </div>
      </div>
      <ul
        onMouseEnter={() => setIsMouseListening(true)}
        onMouseLeave={() => setIsMouseListening(false)}
        className={`${paper} ${
          open
            ? "opacity-100 transition-opacity"
            : "opacity-0 pointer-events-none transition-opacity"
        }`}
      >
        {Children.map(children, (child: ReactNode) => {
          if (isValidElement(child))
            return cloneElement(
              <li
                className={paperList}
                onClick={handleClick.bind(
                  null,
                  child?.props.children.props.value
                )}
              >
                {child}
              </li>
            );
        })}
      </ul>
    </div>
  );
};
