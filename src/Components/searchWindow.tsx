import { IoMdClose } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { SearchWindow } from "@/store/searchWindow";
import { useAtomValue, useSetAtom } from "jotai";
export default function Search() {
  const state = useAtomValue(SearchWindow);
  const setState = useSetAtom(SearchWindow);
  function CloseHandleClick() {
    setState(!state);
    document.body.style.overflowY = "auto";
  }
  return (
    <div
      className={`fixed z-50 bg-white py-6 px-4 transition-all duration-200 ${
        state ? "top-0" : "-top-full"
      } w-full h-full flex flex-col flex-wrap items-center gap-6`}
    >
      <div className="w-full flex items-center justify-between">
        <h1 className="capitalize text-head text-sm">Search</h1>
        <IoMdClose
          onClick={CloseHandleClick}
          className="text-icons-light-gray text-2xl cursor-pointer"
        />
      </div>
      <div className="flex items-center justify-center w-full">
        <label
          htmlFor="search"
          className="flex items-center bg-[#f3f5f9] rounded-l-lg px-3 w-full space-x-2"
        >
          <IoIosSearch className="text-icons-light-gray text-xl" />
          <input
            name="search"
            className="text-icons-light-gray py-3 text-sm outline-0"
            type="text"
            placeholder="Searching For..."
          />
        </label>
        <button
          type="button"
          className="bg-primary text-sm py-3 px-9 rounded-r-lg"
        >
          Search
        </button>
      </div>
    </div>
  );
}
