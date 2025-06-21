import { FaPlus, FaMinus } from "react-icons/fa6";
import { HiXMark } from "react-icons/hi2";
import type { Product } from "@/store/types";
import { cart_items } from "@/store/cart_items";
import { useSetAtom } from "jotai";
export default function Item_cart({
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
    <div className="bg-white rounded-[10px] shadow flex gap-2 h-[150px] max-[424px]:h-auto  max-[424px]:flex-col max-[424px]:items-center max-[424px]:relative">
      <img
        src={order.image}
        className="w-1/3 max-[424px]:w-1/2 lg:w-1/6 p-4"
        alt=""
      />
      <div className="p-4 flex w-full items-start justify-between gap-1">
        <div className="flex flex-col gap-2 h-full justify-between">
          <p className="text-lg">{order.title}</p>
          <div className="flex space-x-2">
            <div className="text-icons-light-gray flex space-x-1">
              <p>${order.price}</p>
              <p>x</p>
              <p>{quantity}</p>
            </div>
            <p className="text-primary">${quantity * order.price}</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={Decrement}
              className="border-[.5px] border-primary/50 text-primary rounded-lg p-[5px] transition-all duration-200 hover:outline hover:bg-primary/5 cursor-pointer"
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
          className="text-icons-light-gray text-lg max-[424px]:absolute max-[424px]:top-3 max-[424px]:right-3"
        >
          <HiXMark />
        </button>
      </div>
    </div>
  );
}
