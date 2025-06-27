import { FaPlus } from "react-icons/fa6";
import { IoEye } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import type { Product } from "@/store/types";
import { Link } from "react-router";
import Star from "./shared/star";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { cart_items } from "@/store/cart_items";
import { useSetAtom, useAtomValue } from "jotai";
import type { cartItem } from "@/store/types";
import { useState } from "react";

export default function Card({ product }: { product: Product }) {
  const arr_items = useAtomValue(cart_items);
  const setArr_items = useSetAtom(cart_items);
  const [loading, setLoading] = useState(false);
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const button = e.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${
      e.clientX - button.getBoundingClientRect().left - radius
    }px`;
    circle.style.top = `${
      e.clientY - button.getBoundingClientRect().top - radius
    }px`;
    circle.className = "ripple"; //

    const existingRipple = button.querySelector(".ripple");
    if (existingRipple) {
      existingRipple.remove();
    }

    button.appendChild(circle);
  };
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
  const AddToCartModal = (item_id: number) => {
    const search: cartItem | undefined = arr_items.find(
      (x: cartItem) => x.id === item_id
    );
    if (search !== undefined) return;
    const newItem: cartItem = { id: item_id, quantity: 1 };
    setArr_items((prev): cartItem[] => [...prev, newItem]);
  };
  const getDiscountedPrice = (price: number, discount?: number) => {
    if (!discount) return price;
    return price - (price * discount) / 100;
  };
  return (
    <div className="swiper-slide h-[468px] cursor-pointer rounded-lg border border-head/5 bg-white">
      <div className="overflow-hidden flex flex-col justify-between">
        <div className="relative w-full h-[400px] py-3 group flex items-center justify-center overflow-hidden">
          <div className="bg-primary absolute w-fit h-fit text-xs text-white py-1 px-2 top-4 left-3 rounded-lg">
            25% off
          </div>
          <div className="text-icons-light-gray/60 transition-opacity duration-400 group-hover:opacity-100 opacity-0 text-xl absolute top-4 right-5 space-y-1">
            <Dialog>
              <DialogTrigger asChild>
                <div
                  className="p-2 hover:bg-title-p/5 rounded-xl relative overflow-hidden"
                  onClick={handleClick}
                >
                  <IoEye />
                </div>
              </DialogTrigger>
              <DialogContent className="!max-w-[800px] flex items-center gap-8 px-6">
                <div className="w-1/2 h-full p-10">
                  <img src={product.image} className="w-auto" alt="" />
                </div>
                <div className="w-full flex flex-col py-4 space-y-6">
                  <DialogHeader>
                    <DialogTitle className="text-2xl text-head">
                      {product.title}
                    </DialogTitle>
                    <p className="text-3xl text-primary font-semibold">
                      ${product.price}
                    </p>
                    <div className="flex space-x-2">
                      <Star p={product} key={product.id} />
                    </div>
                    <DialogDescription className="text-title-p">
                      {product.description}
                    </DialogDescription>
                  </DialogHeader>
                  <Button
                    onClick={() => AddToCartModal(product.id)}
                    className="bg-head rounded-xl py-6 px-10 hover:bg-head/90"
                  >
                    Add to cart
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
            <div
              className="p-2 relative overflow-hidden hover:bg-title-p/5 rounded-xl"
              onClick={handleClick}
            >
              <MdFavoriteBorder />
            </div>
          </div>
          <Link to={`products/${product.title}`}>
            <img
              src={product.image}
              className="lg:h-full  w-auto max-sm:h-full transition-transform duration-400 transform group-hover:scale-55 scale-60"
              alt=""
            />
          </Link>
        </div>
        <div className="border-t h-full border-head/20 py-6 px-4 flex flex-col gap-4">
          <p className="text-sm text-title-p text-ellipsis overflow-hidden text-nowrap">
            {product.title}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-baseline gap-2">
              <p className="text-primary text-sm font-semibold">
                {`$` + getDiscountedPrice(product.price, 25).toFixed(2)}
              </p>
              <del className="text-icons-light-gray text-xs font-semibold">
                ${product.price}
              </del>
            </div>
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
    </div>
  );
}
