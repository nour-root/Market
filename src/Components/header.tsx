import { Button } from "../Components/ui/button";
import { useAtomValue, useSetAtom } from "jotai";
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "./ui/dialog";
import FieldForm from "../Components/fieldForm";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../Components/ui/dropdown-menu";
import {
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "../Components/ui/dropdown-menu";
import { useEffect, useState } from "react";
import { SearchWindow } from "../store/searchWindow";
import { useLocation, Link } from "react-router";
import Mini_item_cart from "./mini_item_cart";
import { cart_items } from "@/store/cart_items";
import { DataAtom } from "@/store/data";
import type { Product } from "@/store/types";
import MiniHead from "./miniHead";
import Head from "./Head";
import Menu from "./Menu";
export default function Header() {
  const products = useAtomValue(DataAtom);
  const search = useAtomValue(SearchWindow);
  const setSearch = useSetAtom(SearchWindow);
  const [isScrolled, setIsScrolled] = useState(false);
  const [ripple, setRipple] = useState<{ x: number; y: number } | null>(null);
  const location = useLocation();
  const pathname = location.pathname;
  const cartItems = useAtomValue(cart_items);
  const total = cartItems
    .map((order) => {
      const product = products.find((x) => x.id === order.id);
      return product ? product.price * order.quantity : 0;
    })
    .reduce((a, c) => a + c, 0)
    .toFixed(2);
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

  const handleClickShadow = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setRipple({ x, y });

    setTimeout(() => setRipple(null), 0);
  };
  if (!search) {
    document.body.style.overflowY = "auto";
  }
  const [isOpen, setIsOpen] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`max-lg:border-0 border-b border-head/10 bg-white w-full`}
    >
      {!isScrolled && <MiniHead />}
      <div
        className={`px-6 py-3 flex items-center justify-between w-full bg-white transition-all duration-75 ${
          isScrolled
            ? "fixed z-30 shadow-[0_5px_10px_rgba(0,0,0,0.1)] animate-slide-down"
            : "relative"
        }`}
      >
        <Menu />
        <div className="flex items-center space-x-4 max-lg:hidden">
          <img src="/logo2.svg" alt="" />
          {isScrolled && (
            <div className="w-fit">
              <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
                <DropdownMenuTrigger
                  onPointerDown={(e) => {
                    handleClickShadow(e);
                    setIsOpen(true);
                  }}
                  asChild
                  className="focus-visible:outline-0"
                >
                  <button
                    type="button"
                    className="relative overflow-hidden flex items-center w-full hover:bg-light-gray px-2 py-[5px] rounded-xl"
                  >
                    <div className="flex w-full items-center space-x-2">
                      <svg
                        className="fill-title-p"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                      >
                        <path d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm10 10h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zM17 3c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zM7 13c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4z"></path>
                      </svg>
                    </div>
                    <IoIosArrowForward
                      className={`text-lg text-[#7d879c] transform transition-transform duration-200 rotate-90`}
                    />
                    <AnimatePresence>
                      {ripple && (
                        <motion.span
                          className="absolute -left-3 top-0 h-10 bg-head/40 opacity-50 rounded-full"
                          initial={{ scale: 0, opacity: 0.5 }}
                          animate={{ scale: 6, opacity: 0 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.6, ease: "easeOut" }}
                          style={{
                            left: ripple.x,
                            top: ripple.y,
                            width: 100,
                            height: 100,
                            transform: "translate(-50%, -50%)",
                            pointerEvents: "none",
                          }}
                        />
                      )}
                    </AnimatePresence>
                  </button>
                </DropdownMenuTrigger>

                <DropdownMenuContent
                  asChild
                  align="start"
                  className="relative top-0 z-30"
                >
                  <motion.div
                    initial={{ opacity: 0, scaleY: 0 }}
                    animate={{ opacity: 1, scaleY: 1 }}
                    exit={{ opacity: 0, scaleY: 1 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="origin-top w-[278px] rounded-xl bg-popover text-head shadow-md overflow-hidden transform"
                  >
                    <DropdownMenuGroup className="space-y-2">
                      <DropdownMenuSub>
                        <DropdownMenuSubTrigger className="capitalize flex items-center space-x-3 focus:text-primary data-[state=open]:text-primary data-[state=open]:bg-head/3 focus:bg-head/3">
                          <svg
                            className="w-5 h-5"
                            focusable="false"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            data-testid="ShirtLineIcon"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-width="1"
                              d="M5.777 10.296v7.969c0 1.323 0 1.985.449 2.547c.448.562.985.66 2.058.858c.992.182 2.249.33 3.716.33s2.724-.148 3.716-.33c1.073-.198 1.61-.296 2.059-.858c.448-.562.448-1.224.448-2.547v-7.97c0-.683 0-1.025.132-1.326c.131-.3.378-.523.871-.968l.186-.167c1.056-.952 1.584-1.429 1.588-2.118c.004-.69-.465-1.122-1.401-1.988a8 8 0 0 0-.418-.362c-.472-.378-1.138-.792-1.648-1.09a2.05 2.05 0 0 0-1.567-.205l-.49.129a1.6 1.6 0 0 0-.949.703c-1.202 1.897-3.852 1.897-5.054 0a1.6 1.6 0 0 0-.948-.703l-.49-.129a2.05 2.05 0 0 0-1.568.205c-.51.298-1.176.712-1.648 1.09a8 8 0 0 0-.418.362C3.464 4.594 2.996 5.027 3 5.716s.532 1.166 1.588 2.118l.186.167c.493.445.74.668.871.968c.132.3.132.643.132 1.327Z"
                            ></path>
                          </svg>
                          <p>fashion</p>
                        </DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                          <DropdownMenuSubContent className="ml-3 text-head space-y-3">
                            <div className="flex flex-col items-start pl-3 w-full">
                              <h6>Man</h6>
                              <DropdownMenuItem asChild className="w-full">
                                <Link to="products/category/clothes?gender=men">
                                  clothes
                                </Link>
                              </DropdownMenuItem>
                            </div>
                            <div className="flex flex-col items-start pl-3 w-full">
                              <h6>Woman</h6>
                              <DropdownMenuItem asChild className="w-full">
                                <Link to="products/category/clothes?gender=women">
                                  clothes
                                </Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem asChild className="w-full">
                                <Link to="products/category/jewelery">
                                  jewelery
                                </Link>
                              </DropdownMenuItem>
                            </div>
                          </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                      </DropdownMenuSub>
                      <DropdownMenuSub>
                        <DropdownMenuSubTrigger className="capitalize flex items-center space-x-3 focus:text-primary data-[state=open]:text-primary data-[state=open]:bg-head/3 focus:bg-head/3">
                          <svg
                            className="w-5 h-5"
                            focusable="false"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            data-testid="LaptopMobileIcon"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g
                              fill="none"
                              stroke="currentColor"
                              stroke-width="1"
                            >
                              <path
                                stroke-linecap="round"
                                d="M22 10c0-3.771 0-5.657-1.172-6.828S17.772 2 14 2S8.343 2 7.172 3.172C6.229 4.115 6.045 5.52 6.009 8M22 14c0 3.771 0 5.657-1.172 6.828S17.772 22 14 22h-2"
                              ></path>
                              <path d="M2 14.5c0-1.405 0-2.107.337-2.611a2 2 0 0 1 .552-.552C3.393 11 4.096 11 5.5 11s2.107 0 2.611.337a2 2 0 0 1 .552.552C9 12.393 9 13.096 9 14.5v4c0 1.404 0 2.107-.337 2.611a2 2 0 0 1-.552.552C7.607 22 6.904 22 5.5 22s-2.107 0-2.611-.337a2 2 0 0 1-.552-.552C2 20.607 2 19.904 2 18.5z"></path>
                              <path stroke-linecap="round" d="M17 19h-5"></path>
                            </g>
                          </svg>
                          <p>electronics</p>
                        </DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                          <DropdownMenuSubContent className="ml-3 text-head">
                            <DropdownMenuItem>
                              <Link to={`products/category/electronics`}>
                                mobiles
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Link to={`products/category/electronics`}>
                                ipads
                              </Link>
                            </DropdownMenuItem>
                          </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                      </DropdownMenuSub>
                    </DropdownMenuGroup>
                  </motion.div>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}
        </div>
        <img
          src="/bazaar-black-sm.svg"
          className={`lg:hidden ${
            pathname === "/" ? "max-lg:-mr-12" : "-mr-10"
          } `}
          alt=""
        />
        <FieldForm />
        <div className="flex gap-2 items-center">
          <div
            onClick={(e) => {
              handleClick(e);
              setSearch(!search);
              document.body.style.overflowY = "hidden";
            }}
            className="relative lg:hidden hover:bg-[#4b566b0a] overflow-hidden inline-flex items-center justify-center w-10 h-10 rounded-xl  cursor-pointer "
          >
            <IoIosSearch className="search text-icons-light-gray text-2xl lg:hidden relative overflow-hidden" />
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <div
                className={`w-fit h-fit relative ${
                  pathname === "/cart" ? "hidden" : ""
                }`}
              >
                <button
                  type="button"
                  className={`overflow-hidden hover:bg-[#4b566b0a] py-0 md:p-2 rounded-xl `}
                  onClick={(e) => handleClick(e)}
                >
                  <MdOutlineShoppingBag className="text-icons-light-gray text-2xl" />
                </button>
                {cartItems.length !== 0 ? (
                  <div className="absolute w-5 h-5 max-sm:w-4 max-sm:h-4 max-sm:text-[12px] rounded-full bg-primary -top-2 -right-3 max-lg:-top-3 text-sm flex items-center justify-center">
                    {cartItems
                      .map((order) => order.quantity)
                      .reduce((a, c) => a + c, 0)}
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </DialogTrigger>
            <DialogContent className="!max-w-[400px] !h-[100%] max-sm:!max-w-[330px] max-sm:left-[calc(100%-160px)] left-[calc(100%-200px)] !rounded-r-none origin-top-right flex items-center gap-8 px-0">
              <div className="relative w-full h-full flex flex-col">
                <DialogHeader className="h-auto">
                  <DialogTitle className="text-sm text-head flex items-center gap-2 absolute -top-1 left-6">
                    <svg
                      className="w-6 h-6"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 20 23"
                      data-testid="CartBagIcon"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.33329 7.37181V5.37181C5.33329 2.79431 7.42079 0.705139 9.99996 0.705139C12.5791 0.705139 14.6666 2.79431 14.6666 5.37181V7.37181H17.3333C18.4375 7.37181 19.3333 8.26764 19.3333 9.37181V18.0385C19.3333 20.2468 17.5416 22.0385 15.3333 22.0385H4.66663C2.45746 22.0385 0.666626 20.2468 0.666626 18.0385V9.37181C0.666626 8.26764 1.56204 7.37181 2.66663 7.37181H5.33329ZM7.33329 7.37181H12.6666V5.37181C12.6666 3.89889 11.4708 2.70514 9.99996 2.70514C8.52913 2.70514 7.33329 3.89889 7.33329 5.37181V7.37181ZM2.66663 9.37181V18.0385C2.66663 19.1426 3.56204 20.0385 4.66663 20.0385H15.3333C16.4375 20.0385 17.3333 19.1426 17.3333 18.0385V9.37181H14.6666V11.7051C14.6666 12.2593 14.2208 12.7051 13.6666 12.7051C13.1125 12.7051 12.6666 12.2593 12.6666 11.7051V9.37181H7.33329V11.7051C7.33329 12.2593 6.88746 12.7051 6.33329 12.7051C5.77913 12.7051 5.33329 12.2593 5.33329 11.7051V9.37181H2.66663Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <span>
                      {cartItems
                        .map((order) => order.quantity)
                        .reduce((a, c) => a + c, 0)}{" "}
                      items
                    </span>
                  </DialogTitle>
                  <hr className="mt-8 w-full" />
                </DialogHeader>
                {cartItems.length > 0 ? (
                  <>
                    <div className="text-title-p w-full max-h-[485px] !scroll-auto overflow-auto cart-1 max-sm:mt-3">
                      {cartItems.map((order) => {
                        const search: Product | undefined = products?.find(
                          (x) => x?.id === order?.id
                        );
                        if (search !== undefined) {
                          return (
                            <Mini_item_cart
                              order={search}
                              quantity={order.quantity}
                              key={search.id}
                            />
                          );
                        } else <></>;
                      })}
                    </div>
                    <div className="flex flex-col px-6 w-full space-y-3 mt-6 absolute bottom-0">
                      <DialogClose asChild>
                        <Button
                          variant={"default"}
                          className=" w-full rounded-lg py-5 px-10 capitalize"
                        >
                          checkout now ( ${total})
                        </Button>
                      </DialogClose>
                      <DialogClose asChild>
                        <Link to={"/cart"}>
                          <Button
                            variant={"outline"}
                            className="w-full rounded-lg py-5 px-10 capitalize"
                          >
                            view cart
                          </Button>
                        </Link>
                      </DialogClose>
                    </div>
                  </>
                ) : (
                  <div className="w-full h-full flex flex-col flex-wrap justify-center items-center gap-4">
                    <img src="/shopping-bag.svg" alt="" />
                    <div className="w-full">
                      <p className="text-dark-gray w-1/2 text-center mx-auto">
                        Your shopping bag is empty. Start shopping
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      {!isScrolled && <Head />}
    </header>
  );
}
