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
export default function Card({ product }: { product: Product }) {
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
  return (
    <div className="swiper-slide h-[375px] cursor-pointer rounded-lg border border-head/5 bg-white">
      <div className="overflow-hidden flex flex-col justify-between">
        <div className="relative w-full h-[200px] py-3 group flex justify-center">
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
                  <Button className="bg-head rounded-xl py-6 px-10 hover:bg-head/90">
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
              className="lg:w-auto lg:h-full md:w-1/2 md:h-[80%]  max-sm:w-auto max-sm:h-full transition-transform duration-400 transform group-hover:scale-55 scale-65"
              alt=""
            />
          </Link>
        </div>
        <div className="border-t h-full border-head/20 py-6 px-4 flex flex-col gap-2">
          <p className="text-sm text-title-p text-ellipsis overflow-hidden text-nowrap">
            {product.title}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-baseline gap-2">
              <p className="text-primary text-sm font-semibold">
                {`$` + product.price}
              </p>
              <del className="text-icons-light-gray text-xs font-semibold">
                ${product.price - 0.25}
              </del>
            </div>
            <button className="border-[.5px] border-primary/50 text-primary rounded-lg p-[5px] transition-all duration-200 hover:outline hover:bg-primary/5 cursor-pointer">
              <FaPlus />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
