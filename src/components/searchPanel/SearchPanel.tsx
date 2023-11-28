import React, { ChangeEvent, useState, FormEvent } from "react";
import { useClearPathname } from "@/hooks/useClearPathname";
import { PreferenceButtons, buttons } from "../preferenceButtons/";
import { SearchIcon, CloseIcon } from "../icons";
import { useRouter } from "next/navigation";
import { MenuIcon } from "../icons";
import { Modal } from "../modal";
import { NavboardMobile } from "@/components/navboard";

export const SearchPanel = () => {
  const [value, setValue] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const pathname = useClearPathname();
  const route = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    route.push(`/search?text=${value}`);
  };

  return (
    pathname !== "/" && (
      <div className="flex flex-wrap justify-between tablet:flex-nowrap tablet:justify-normal">
        <button
          aria-label="Menu"
          onClick={() => {
            setOpen((prevOpen) => !prevOpen);
          }}
          className="py-[21px] px-[15px] bg-white rounded-2.5xl mr-2.5 hover:bg-lightPink transition-colors"
        >
          <MenuIcon color="fill-darkPink" />
        </button>
        <form
          className="relative w-full order-1 tablet:order-[0] mt-2.5 tablet:mt-0"
          onSubmit={handleSubmit}
        >
          <input
            onChange={handleChange}
            type="text"
            name="search"
            placeholder="Search for breeds by name"
            className={`px-5 py-[13px] rounded-2.5xl w-full text-black outline-none text-xl leading-[30px] placeholder:text-placeholder border-2 border-solid  ${
              Boolean(value)
                ? "border-darkPink"
                : "border-transparent hover:border-lightPink"
            }`}
          />
          <button
            type="submit"
            aria-label="Search"
            className="p-2.5 rouned rounded-1.5lg bg-lightPink absolute top-[10px] right-[10px] hover:bg-darkPink outline-none focus:bg-darkPink transition group"
          >
            <SearchIcon
              color={
                "fill-darkPink group-hover:fill-white group-focus:fill-white"
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
          backdrop={"bg-body"}
          backdropElement={
            <button
              aria-label="Close"
              onClick={() => setOpen((prevOpen) => !prevOpen)}
              className="absolute top-[30px] right-[30px] p-[17.5px] bg-white rounded-2.5xl transition-colors hover:bg-darkPink hover:transition-colors group"
            >
              <CloseIcon
                color={
                  "fill-darkPink group-hover:fill-white group-hover:transition-colors transition-colors"
                }
                size="25"
              />
            </button>
          }
          modal={`absolute top-[110px] right-[50%] transition-all translate-x-2/4 bg-body rounded-2.5xl 2xl:max-w-[680px] ${
            open ? "scale-100" : "scale-75"
          }`}
        >
          <NavboardMobile setOpen={setOpen} />
        </Modal>
      </div>
    )
  );
};
