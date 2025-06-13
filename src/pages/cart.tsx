import Item_cart from "@/components/item_cart";
import InputCountry from "@/components/inputCountry";
import { useState } from "react";
import { Button } from "@/components/ui/button";
export default function Cart() {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="py-5 px-4 max-lg:relative max-lg:z-10 bg-backGround text-[#2B3445]">
      <div className="flex max-lg:flex-col gap-5">
        <div className="flex w-full flex-col gap-6 max-h-[400px] overflow-y-scroll scroll cart-items p-2">
          <Item_cart />
        </div>
        <div className="bg-white lg:w-1/2 p-6 rounded-[12px] border border-head/5 flex flex-col">
          <div className="w-full flex justify-between items-center">
            <p className="capitalize text-dark-gray">total:</p>
            <p className="capitalize">0.00</p>
          </div>
          <hr className="my-5" />
          <div className="space-y-3">
            <p className="">Shipping Estimates</p>
            <InputCountry />
            <form
              className="w-full flex items-center px-4 relative group space-y-6 rounded-lg border hover:border-head focus-within:outline focus-within:border-0 focus-within:outline-primary"
              onFocus={() => {
                setIsFocused(true);
              }}
              onBlur={() => {
                setTimeout(() => {
                  setIsFocused(false);
                }, 0);
              }}
            >
              <label
                htmlFor="country"
                className={`absolute z-10 transition-all duration-300 px-2 w-fit h-fit left-5 text-head capitalize bg-white text-sm ${
                  isFocused || inputValue
                    ? "-top-2 left-0 text-xs text-primary"
                    : "top-3 left-6"
                }`}
              >
                ZIP Code
              </label>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="3100"
                className="relative py-3 top-0 outline-0 w-full h-full px-3 placeholder:text-white group-focus-within:placeholder:text-gray-400"
                autoComplete="off"
              />
            </form>
            <Button
              variant={"outline"}
              className="transition-all duration-300 hover:text-primary hover:border-primary w-full text-primary"
            >
              Calculate Shipping
            </Button>
            <Button
              variant={"default"}
              className="transition-all duration-300 hover:text-white hover:border-primary w-full text-white"
            >
              Calculate Shipping
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
