import type { TSwitcherProps } from "@/types";

export const Switcher = ({ theme, setTheme }: TSwitcherProps) => {
  const handleClick = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div
      className={`relative py-1 px-1 w-[44px] rounded-[50px] transition-colors bg-lightPink dark:bg-rgbaNightBlack`}
      onClick={handleClick}
    >
      <div
        className={`transition-transform absolute rounded-[50%] bg-darkPink h-4 w-4 translate-x-0 dark:translate-x-[125%]`}
      ></div>
    </div>
  );
};
