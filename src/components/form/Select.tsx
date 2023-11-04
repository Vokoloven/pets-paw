import { useState, useEffect, Dispatch, SetStateAction } from "react";
import type { TSelectProps } from "@/types";

export const Select = ({
  sx,
  paper,
  paperList,
  icon,
  list,
  setState,
  state,
  defaultState,
}: TSelectProps) => {
  const [select, setSelect] = useState<boolean>(false);
  const [on, setOn] = useState<boolean>(false);

  const toggleSelect = () => {
    setSelect((prevSelect) => !prevSelect);
  };

  const handleSelect = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;
    const { textContent } = target;
    if (textContent) setState(textContent);
    setSelect(false);
  };

  useEffect(() => {
    if (on) {
      return;
    }

    const handleClickOutside = () => {
      setSelect(false);
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [on]);

  useEffect(() => {
    if (!state && defaultState) {
      setState(defaultState);
    }
  }, [state]);

  return (
    <div className="relative">
      <div
        onMouseEnter={() => setOn(true)}
        onMouseLeave={() => setOn(false)}
        onClick={toggleSelect}
        className={sx}
      >
        <span>{state ?? defaultState}</span>
        <div
          className={`${
            select && "rotate-180 transition-transform"
          } transition-transform`}
        >
          {icon}
        </div>
      </div>
      <ul
        onMouseEnter={() => setOn(true)}
        onMouseLeave={() => setOn(false)}
        className={`${paper} ${
          select
            ? "opacity-100 transition-opacity"
            : "opacity-0 pointer-events-none transition-opacity"
        }`}
      >
        {list?.map((item, index) => (
          <li
            key={index}
            className={`${paperList} transition hover:transition`}
            onClick={handleSelect}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
