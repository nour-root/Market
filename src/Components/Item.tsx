import type { Product } from "@/store/types";
import Star from "./shared/star";
import { FaPlus } from "react-icons/fa6";
import { useState } from "react";
import type { cartItem } from "@/store/types";
import { cart_items } from "@/store/cart_items";
import { useSetAtom, useAtomValue } from "jotai";

export default function Item({ product }: { product: Product }) {
  const [loading, setLoading] = useState(false);
  const arr_items = useAtomValue(cart_items);
  const setArr_items = useSetAtom(cart_items);
  const AddToCart = (item_id: number, e: React.MouseEvent<HTMLElement>) => {
    const btn = e.currentTarget;
    if (btn.classList.contains("add-to-cart")) {
      const originalBorderColor = btn.style.borderColor;
      const intervalID = setInterval(() => {
        btn.style.borderColor = "#ccc";
        setLoading(true);
      });
      const search: cartItem | undefined = arr_items.find(
        (x: cartItem) => x.id === item_id
      );
      if (search !== undefined) return;
      const newItem: cartItem = { id: item_id, quantity: 1 };
      setArr_items((prev): cartItem[] => [...prev, newItem]);
      setTimeout(() => {
        clearInterval(intervalID);
        btn.style.borderColor = originalBorderColor || "";
        setLoading(false);
      }, 1000);
    }
  };
  return (
    <div className="flex items-center space-x-4 rounded-xl overflow-hidden h-[156px] border">
      <div className="bg-[#f3f5f9] w-1/6 h-full flex">
        <img src={product.image} className="w-1/2 mx-auto my-auto" alt="" />
      </div>
      <div className="w-full flex items-center justify-between px-4">
        <div className="flex flex-col space-y-4">
          <p>{product.title}</p>
          <div className="flex gap-1">
            <Star key={product.id} p={product} />
          </div>
          <p className="text-[18px] font-semibold text-primary">
            ${product.price.toFixed(2)}
          </p>
        </div>
        <div className="self-end">
          <button
            onClick={(e) => AddToCart(product.id, e)}
            className="add-to-cart border-[.5px] border-primary/50 text-primary rounded-lg p-[5px] transition-all duration-200 hover:border-primary hover:bg-primary/5 cursor-pointer"
          >
            {loading ? (
              <svg
                className="animate-spin text-gray-300"
                height="15"
                width="15"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M512 1024c-69.1 0-136.2-13.5-199.3-40.2C251.7 958 197 921 150 874c-47-47-84-101.7-109.8-162.7C13.5 648.2 0 581.1 0 512c0-19.9 16.1-36 36-36s36 16.1 36 36c0 59.4 11.6 117 34.6 171.3c22.2 52.4 53.9 99.5 94.3 139.9c40.4 40.4 87.5 72.2 139.9 94.3C395 940.4 452.6 952 512 952c59.4 0 117-11.6 171.3-34.6c52.4-22.2 99.5-53.9 139.9-94.3c40.4-40.4 72.2-87.5 94.3-139.9C940.4 629 952 571.4 952 512c0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9a437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.2C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7c26.7 63.1 40.2 130.2 40.2 199.3s-13.5 136.2-40.2 199.3C958 772.3 921 827 874 874c-47 47-101.8 83.9-162.7 109.7c-63.1 26.8-130.2 40.3-199.3 40.3z"
                  fill="currentColor"
                />
              </svg>
            ) : (
              <FaPlus className="plus" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
