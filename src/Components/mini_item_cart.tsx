import { FaPlus, FaMinus } from "react-icons/fa6";
import { HiXMark } from "react-icons/hi2";
import type { Product } from "@/store/types";
import { cart_items } from "@/store/cart_items";
import { useSetAtom } from "jotai";
export default function Mini_item_cart({
  order,
  quantity,
}: {
  order: Product;
  quantity: number;
}) {
  const setCartItems = useSetAtom(cart_items);
  const Increment = () => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === order.id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  const Decrement = () => {
    if (quantity === 1) return;
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === order.id ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };
  const Remove_item = () => {
    setCartItems((prev) => prev.filter((x) => x.id !== order.id));
  };
  return (
    <div className="border-b px-2 flex items-center space-x-4 pl-8 transition-all duration-500">
      <img src={order.image} className="w-1/5" alt="" />
      <div className="p-4 flex w-full items-center justify-between gap-1">
        <div className="flex flex-col gap-2 h-full justify-between">
          <p className="text-sm">{order.title}</p>
          <div className="flex space-x-2">
            <div className="text-icons-light-gray flex space-x-1">
              <p>${order.price}</p>
              <p>x</p>
              <p>{quantity}</p>
            </div>
            <p className="text-primary">${order.price * quantity}</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={Decrement}
              className={`${
                quantity === 1 ? "opacity-50" : "opacity-100"
              } border-[.5px] border-primary/50 text-primary rounded-lg p-[5px] transition-all duration-200 hover:outline hover:bg-primary/5 cursor-pointer`}
            >
              <FaMinus className="text-sm font-light" />
            </button>
            <p>{quantity}</p>
            <button
              onClick={Increment}
              className="border-[.5px] border-primary/50 text-primary rounded-lg p-[5px] transition-all duration-200 hover:outline hover:bg-primary/5 cursor-pointer"
            >
              <FaPlus className="text-sm font-light" />
            </button>
          </div>
        </div>
        <button
          onClick={Remove_item}
          className="text-icons-light-gray text-lg self-start md:self-center hover:bg-[#4b566b0a] p-1 rounded-lg"
        >
          <HiXMark />
        </button>
      </div>
    </div>
  );
}
