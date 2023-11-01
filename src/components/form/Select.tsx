import { useState, useRef, useEffect, Dispatch, SetStateAction } from "react";
import { text } from "stream/consumers";

type TSelect = {
  sx: string;
  paper: string;
  paperList: string;
  icon: JSX.Element;
  list: any[];
  state: string | null;
  setState: Dispatch<SetStateAction<string | null>>;
  defaultState?: string;
};

export const Select = ({
  sx,
  paper,
  paperList,
  icon,
  list,
  setState,
  state,
  defaultState,
}: TSelect) => {
  const [select, setSelect] = useState<boolean>(false);
  const [on, setOn] = useState<boolean>(false);
  const selectRef = useRef<HTMLInputElement>(null);

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
      if (selectRef.current) {
        setSelect(false);
      }
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
          ref={selectRef}
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
        className={`${paper} transition-opacity ${
          select ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {list?.map((item, index) => (
          <li key={index} className={paperList} onClick={handleSelect}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
