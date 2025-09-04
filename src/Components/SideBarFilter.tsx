import type { Product } from "@/store/types";
import Slider from "./slider";
import Rating from "./Rating";
import { Button } from "./ui/button";
export default function SideBarFilter({
  valSearch,
  products,
  display,
  setDisplay,
  minPrice,
  maxPrice,
  selectedRating,
  setMinPrice,
  setMaxPrice,
  setSelectedRating,
}: {
  valSearch: string | null;
  products: Product[] | null;
  display: boolean;
  setDisplay: (val: boolean) => void;
  minPrice: number;
  maxPrice: number;
  selectedRating: number | null;
  setMinPrice: (val: number) => void;
  setMaxPrice: (val: number) => void;
  setSelectedRating: (val: number | null) => void;
}) {
  function ClearAllFilters() {
    setSelectedRating(null);
    setMaxPrice(1000);
    setMinPrice(0);
  }
  if (display) {
    document.body.style.overflow = "hidden";
  }
  return (
    <div
      onMouseDown={() => {
        setDisplay(false);
        document.body.style.overflow = "auto";
      }}
      className={`absolute w-full h-full left-0 -top-40 transition-all duration-300 ${
        display
          ? "bg-black/20 backdrop-blur-sm z-40 pointer-events-auto"
          : "bg-transparent -z-10 pointer-events-none"
      }`}
    >
      <div
        className={`fixed z-50 bg-white transition-all duration-300 ${
          display ? "left-0" : "-left-full"
        }  top-12 w-[60%] h-full px-6 py-5 space-y-8 lg:hidden`}
      >
        {valSearch ? (
          <div>
            <p className="font-medium text-lg">
              <span className="capitalize">searching for</span> "
              {valSearch.toLocaleLowerCase()}"
            </p>
            <p className="text-dark-gray text-sm">
              {products?.length} result found
            </p>
          </div>
        ) : (
          ""
        )}
        <p className="font-medium text-sm capitalize">Categories</p>
        <hr />
        <Slider
          setMax={setMaxPrice}
          setMin={setMinPrice}
          maxPrice={maxPrice}
          minPrice={minPrice}
        />
        <hr />
        <Rating
          setSelectedRating={setSelectedRating}
          selectedRating={selectedRating}
        />
        <Button
          className="capitalize w-full cursor-pointer"
          onClick={ClearAllFilters}
        >
          clear all filters
        </Button>
      </div>
    </div>
  );
}
