import React, { ChangeEvent, useState, FormEvent } from "react";
import { useClearPathname } from "@/hooks/useClearPathname";
import { PreferenceButtons, buttons } from "../preferenceButtons/";
import { SearchIcon, CloseIcon } from "../icons";
import { useRouter } from "next/navigation";
import { MenuIcon } from "../icons";
import { Modal } from "../modal";
import { NavboardMobile } from "@/components/navboard";
import { useOverflow } from "@/hooks";

export const SearchPanel = () => {
  const [value, setValue] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const pathname = useClearPathname();
  const route = useRouter();
  useOverflow(open);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value) return;

    route.push(`/search?text=${value}`);
  };

  return (
    pathname !== "/" && (
      <div className="flex mobile:flex-wrap mobile:justify-between">
        <button
          aria-label="Menu"
          onClick={() => {
            setOpen((prevOpen) => !prevOpen);
          }}
          className="py-[21px] px-[15px] bg-white rounded-2.5xl mr-2.5 hover:bg-lightPink transition-colors laptop:hidden desktop:hidden dark:bg-rgbaNightBlack"
        >
          <MenuIcon color="fill-darkPink" />
        </button>
        <form
          className="relative w-full mobile:order-1 mobile:mt-2.5"
          onSubmit={handleSubmit}
        >
          <input
            onChange={handleChange}
            type="text"
            name="search"
            placeholder="Search for breeds by name"
            className={`px-5 py-[13px] rounded-2.5xl w-full text-nightBlack dark:text-placeholder dark:bg-rgbaNightBlack outline-none text-xl leading-[30px] placeholder:text-placeholder border-2 border-solid  ${
              Boolean(value)
                ? "border-darkPink"
                : "border-transparent hover:border-lightPink dark:hover:border-rgbaDarkPink"
            }`}
          />
          <button
            type="submit"
            aria-label="Search"
            className="p-2.5 rouned rounded-1.5lg bg-lightPink absolute top-[10px] right-[10px] hover:bg-darkPink outline-none focus:bg-darkPink transition group dark:bg-rgbaDarkPinkLow dark:focus:bg-lightPink dark:hover:bg-lightPink"
          >
            <SearchIcon
              color={
                "fill-darkPink group-hover:fill-white dark:group-hover:fill-darkPink group-focus:fill-white transition"
              }
            />
          </button>
        </form>
        <div className="flex gap-[10px] ml-2.5">
          {buttons(pathname).map((button) => (
            <React.Fragment key={button.id}>
              <PreferenceButtons button={button} pathname={pathname} />
            </React.Fragment>
          ))}
        </div>
        <Modal
          open={open}
          setOpen={setOpen}
          backdrop={"bg-body dark:bg-nightDark"}
          backdropElement={
            <button
              aria-label="Close"
              onClick={() => setOpen((prevOpen) => !prevOpen)}
              className="absolute mobile:top-5 mobile:right-5 top-[30px] right-[30px] p-[17.5px] bg-white rounded-2.5xl transition-colors hover:bg-darkPink group dark:bg-rgbaNightBlack dark:hover:bg-rgbaDarkPinkLow"
            >
              <CloseIcon
                color={"fill-darkPink group-hover:fill-white transition-colors"}
                size="25"
              />
            </button>
          }
          modal={`container dark:bg-nightDark absolute top-[110px] right-[50%] transition-all translate-x-2/4 bg-body rounded-2.5xl 2xl:max-w-[680px] ${
            open ? "scale-100" : "scale-75"
          }`}
        >
          <NavboardMobile setOpen={setOpen} />
        </Modal>
      </div>
    )
  );
};
