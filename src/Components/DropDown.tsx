import { MdKeyboardArrowDown } from "react-icons/md";
export default function DropDown({
  onChange,
  sortedProd,
}: {
  onChange: (e: string) => void;
  sortedProd: string;
}) {
  const handleShowSortBy = () => {
    const sortBy = document.querySelector(".sortBy");
    const arrow = document.querySelector(".arrow");

    sortBy?.classList.toggle("opacity-0");
    sortBy?.classList.toggle("scale-0");

    arrow?.classList.remove("rotate-0");
    arrow?.classList.toggle("-rotate-180");
  };
  const handleCloseSortBy = () => {
    const sortBy = document.querySelector(".sortBy");
    const arrow = document.querySelector(".arrow");

    sortBy?.classList.add("opacity-0");
    sortBy?.classList.add("scale-0");

    arrow?.classList.remove("-rotate-180");
    arrow?.classList.add("rotate-0");
  };
  const handleSelect = (e: React.MouseEvent<HTMLDivElement>) => {
    const value = (e.target as HTMLDivElement).textContent
      ?.trim()
      .toLowerCase();
    if (value) {
      onChange(value);
    }
  };
  return (
    <div className="flex items-center justify-end max-lg:justify-start">
      <div className="sort-by capitalize text-dark-gray flex items-center gap-3">
        <p className="max-lg:text-sm">sort by:</p>
        <div
          tabIndex={0}
          onClick={handleShowSortBy}
          onBlur={handleCloseSortBy}
          className="relative w-[180px] border rounded-md text-head p-3 max-lg:p-2 flex items-center justify-between cursor-pointer"
        >
          <p className="text-sm max-lg:text-xs capitalize">{sortedProd}</p>
          <MdKeyboardArrowDown className="arrow transform transition-all duration-[268ms]" />
          <div
            onClick={(e) => handleSelect(e)}
            className="sortBy *:hover:bg-[#4b566b0a] absolute z-10 bg-white w-full min-h-auto left-0 top-12 border rounded-md transition-all transform  scale-0 opacity-0 custom-transition"
          >
            <div className="capitalize px-4 py-3 text-sm max-lg:text-xs">
              price low to high
            </div>
            <div className="capitalize px-4 py-3 text-sm max-lg:text-xs">
              price high to low
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
