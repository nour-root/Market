import Item_cart from "@/Components/item_cart";
import InputCountry from "@/Components/inputCountry";
import { Button } from "@/Components/ui/button";
import { DataAtom } from "@/store/data";
import { cart_items } from "@/store/cart_items";
import { useAtomValue } from "jotai";
import type { cartItem, Product } from "@/store/types";
import { useState } from "react";

export default function CartPage({
  onStepClick,
}: {
  onStepClick: (index: number) => void;
}) {
  const products = useAtomValue(DataAtom);
  const cartItems = useAtomValue(cart_items);
  const total = cartItems
    .map((x) => {
      const item = products.find((p) => p.id === x.id);
      return item ? item.price * x.quantity : 0;
    })
    .reduce((a, c) => a + c, 0)
    .toFixed(2);
  const [focusStates, setFocusStates] = useState({
    zipCode: false,
    Voucher: false,
  });
  const [inputValues, setInputValues] = useState({
    zipCode: "",
    Voucher: "",
  });
  const handleFocus = (field: string) => {
    setFocusStates((prev) => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field: string) => {
    setTimeout(() => {
      setFocusStates((prev) => ({ ...prev, [field]: false }));
    }, 0);
  };
  const handleChange = (field: string, value: string) => {
    setInputValues((prev) => ({ ...prev, [field]: value }));
  };
  return (
    <div className="flex max-lg:flex-col gap-5 h-full">
      <div className="flex w-full flex-col gap-6 h-[600px] overflow-y-scroll cart-items p-2">
        {cartItems?.map((x) => {
          const order = x as cartItem;
          const found: Product | undefined = products.find(
            (o: Product) => o.id === order.id
          );
          if (found)
            return (
              <Item_cart
                key={found.id}
                order={found}
                quantity={order.quantity}
              />
            );
        })}
      </div>
      <form className="bg-white lg:w-1/2 lg:h-full p-6 rounded-[12px] border border-head/5 flex flex-col">
        <div className="w-full flex justify-between items-center">
          <p className="capitalize text-dark-gray">total:</p>
          <p className="capitalize text-lg font-semibold">${total}</p>
        </div>
        <hr className="my-5" />
        <div
          className="flex flex-col space-y-3"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex items-center space-x-3">
            <p className="capitalize">Additional Comments</p>
            <p className="bg-primary/10 text-xs px-2 py-[2px] rounded-sm text-primary">
              Note
            </p>
          </div>
          <textarea className="resize-none min-w-0 w-full p-2 min-h-[150px] rounded-lg border hover:border-head"></textarea>
          <div className="space-y-3">
            <div
              className="w-full flex items-center px-4 relative group space-y-6 rounded-lg border hover:border-head focus-within:outline focus-within:border-0 focus-within:outline-primary"
              onFocus={() => {
                handleFocus("Voucher");
              }}
              onBlur={() => {
                setTimeout(() => {
                  handleBlur("Voucher");
                }, 0);
              }}
            >
              <label
                className={`absolute z-10 transition-all duration-300 px-2 w-fit h-fit left-5 text-head capitalize bg-white text-sm ${
                  focusStates.Voucher || inputValues.Voucher
                    ? "-top-2 left-0 text-xs text-primary"
                    : "top-3 left-6"
                }`}
              >
                Voucher
              </label>
              <input
                type="text"
                value={inputValues.Voucher}
                onChange={(e) => handleChange("Voucher", e.target.value)}
                placeholder="Voucher"
                className="relative py-3 top-0 outline-0 w-full h-full px-3 placeholder:text-white group-focus-within:placeholder:text-gray-400"
                autoComplete="off"
              />
            </div>
          </div>
          <Button
            variant={"outline"}
            type="submit"
            className="transition-all duration-300 hover:text-primary hover:border-primary w-full text-primary"
          >
            Calculate Shipping
          </Button>
        </div>
        <div className="space-y-3 mt-10">
          <p>Shipping Estimates</p>
          <InputCountry />
          <div
            className="w-full flex items-center px-4 relative group space-y-6 rounded-lg border hover:border-head focus-within:outline focus-within:border-0 focus-within:outline-primary"
            onFocus={() => {
              handleFocus("zipCode");
            }}
            onBlur={() => {
              setTimeout(() => {
                handleBlur("zipCode");
              }, 0);
            }}
          >
            <label
              className={`absolute z-10 transition-all duration-300 px-2 w-fit h-fit left-5 text-head capitalize bg-white text-sm ${
                focusStates.zipCode || inputValues.zipCode
                  ? "-top-2 left-0 text-xs text-primary"
                  : "top-3 left-6"
              }`}
            >
              ZIP Code
            </label>
            <input
              type="text"
              value={inputValues.zipCode}
              onChange={(e) =>
                handleChange(inputValues.zipCode, e.target.value)
              }
              placeholder="3100"
              className="relative py-3 top-0 outline-0 w-full h-full px-3 placeholder:text-white group-focus-within:placeholder:text-gray-400"
              autoComplete="off"
            />
          </div>
          <Button
            variant={"outline"}
            className="transition-all duration-300 hover:text-primary hover:border-primary w-full text-primary"
          >
            Calculate Shipping
          </Button>
        </div>
        <Button
          variant={"default"}
          onClick={() => onStepClick(1)}
          className="transition-all mt-4 duration-300 hover:text-white hover:border-primary w-full text-white"
        >
          Checkout Now
        </Button>
      </form>
    </div>
  );
}
