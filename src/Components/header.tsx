import { FiPlus } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { ImFacebook2 } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { LuMinus } from "react-icons/lu";
import { Button } from "./ui/button.js";
import { useAtomValue, useSetAtom } from "jotai";
import { dropdownAtom } from "../store/dropDownAtom.js";
import { MdOutlineShoppingBag } from "react-icons/md";
import { LuMenu } from "react-icons/lu";
import { IoIosSearch } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import FieldForm from "./fieldForm.js";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.js";
import {
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu.js";
import { useEffect, useState } from "react";
import { SearchWindow } from "../store/searchWindow.js";
import { useLocation } from "react-router";
export default function Header() {
  const state = useAtomValue(dropdownAtom);
  const setState = useSetAtom(dropdownAtom);
  const search = useAtomValue(SearchWindow);
  const setSearch = useSetAtom(SearchWindow);
  const [isScrolled, setIsScrolled] = useState(false);
  const [ripple, setRipple] = useState<{ x: number; y: number } | null>(null);
  const location = useLocation();
  const pathname = location.pathname;

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
      {!isScrolled && (
        <div className="bg-head flex justify-between flex-wrap px-6 py-1 gap-2">
          <div className="flex w-full justify-between items-center lg:w-fit">
            <div className="flex items-center space-x-2">
              <h1 className="bg-primary px-3 py-[2px] rounded-xl uppercase text-[13px]">
                Hot
              </h1>
              <p className="text-xs">Free Express Shipping</p>
            </div>
            <div className="lg:hidden ">
              {state ? (
                <LuMinus className="text-xl" onClick={() => setState(false)} />
              ) : (
                <FiPlus className="text-xl" onClick={() => setState(true)} />
              )}
            </div>
          </div>
          <AnimatePresence>
            {state && (
              <motion.div
                initial={{ scaleY: 0, height: 0, opacity: 0 }}
                animate={{ scaleY: 1, height: "auto", opacity: 1 }}
                exit={{ scaleY: 0, height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className={`menu transform origin-top w-full flex items-center lg:h-auto lg:opacity-100 lg:hidden`}
              >
                <DropdownMenu>
                  <DropdownMenuTrigger
                    asChild
                    className="bg-head h-fit hover:bg-head hover:text-white focus-visible:ring-0"
                  >
                    <Button variant={"ghost"}>English</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-40">
                    <DropdownMenuRadioGroup>
                      <DropdownMenuRadioItem value="English">
                        English
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="Arabic">
                        Arabic
                      </DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                  </DropdownMenuContent>
                  <MdKeyboardArrowDown className="-ml-3" />
                </DropdownMenu>
                <FaTwitter className="ml-3" />
                <ImFacebook2 className="ml-3" />
                <FaInstagram className="ml-3" />
              </motion.div>
            )}
          </AnimatePresence>
          <div className={`menu w-fit flex items-center max-lg:hidden`}>
            <DropdownMenu>
              <DropdownMenuTrigger
                asChild
                className="bg-head h-fit hover:bg-head hover:text-white focus-visible:ring-0"
              >
                <Button variant={"ghost"}>English</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-40">
                <DropdownMenuRadioGroup>
                  <DropdownMenuRadioItem value="English">
                    English
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="Arabic">
                    Arabic
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
              <MdKeyboardArrowDown className="-ml-3" />
            </DropdownMenu>
            <FaTwitter className="ml-3" />
            <ImFacebook2 className="ml-3" />
            <FaInstagram className="ml-3" />
          </div>
        </div>
      )}
      <div
        className={`px-6 py-3 flex items-center justify-between w-full bg-white transition-all duration-75 ${
          isScrolled
            ? "fixed z-20 shadow-[0_5px_10px_rgba(0,0,0,0.1)] animate-slide-down"
            : "relative"
        }`}
      >
        <button
          className="hover:bg-[#4b566b0a] p-2 rounded-2xl lg:hidden relative overflow-hidden"
          onClick={(e) => handleClick(e)}
        >
          <LuMenu className="text-icons-light-gray text-2xl" />
        </button>
        <div className="flex items-center space-x-4 max-lg:hidden">
          <img src="/logo2.svg" className="max-lg:hidden" alt="" />
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
                              <DropdownMenuItem className="w-full">
                                clothes
                              </DropdownMenuItem>
                              <DropdownMenuItem className="w-full">
                                shoes
                              </DropdownMenuItem>
                            </div>
                            <div className="flex flex-col items-start pl-3 w-full">
                              <h6>Woman</h6>
                              <DropdownMenuItem className="w-full">
                                clothes
                              </DropdownMenuItem>
                              <DropdownMenuItem className="w-full">
                                shoes
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
                            <DropdownMenuItem>mobiles</DropdownMenuItem>
                            <DropdownMenuItem>ipads</DropdownMenuItem>
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
        <img src="/bazaar-black-sm.svg" className="lg:hidden -mr-10" alt="" />
        <FieldForm />
        <div className="flex gap-3 items-center">
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

          <button
            type="button"
            className={`relative overflow-hidden hover:bg-[#4b566b0a] p-2 rounded-xl  ${
              pathname === "/cart" ? "hidden" : ""
            }`}
            onClick={(e) => handleClick(e)}
          >
            <MdOutlineShoppingBag className="text-icons-light-gray text-2xl" />
          </button>
        </div>
      </div>
      {!isScrolled && (
        <div className="flex justify-between max-lg:hidden px-6 lg:py-4">
          <div className="w-[278px]">
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
                  className="relative overflow-hidden flex items-center w-full bg-light-gray px-2 py-[5px] rounded-xl"
                >
                  <div className="flex w-full items-center space-x-2">
                    <svg
                      className="fill-primary"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                    >
                      <path d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm10 10h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zM17 3c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zM7 13c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4z"></path>
                    </svg>
                    <h6 className="text-head text-sm">Categories</h6>
                  </div>
                  <IoIosArrowForward
                    className={`text-lg text-[#7d879c] transform transition-transform duration-200 ${
                      isOpen ? "rotate-90" : "rotate-0"
                    }`}
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

              <DropdownMenuContent asChild align="start">
                <motion.div
                  initial={{ opacity: 0, scaleY: 0 }}
                  animate={{ opacity: 1, scaleY: 1 }}
                  exit={{ opacity: 0, scaleY: 1 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
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
                            <DropdownMenuItem className="w-full">
                              clothes
                            </DropdownMenuItem>
                            <DropdownMenuItem className="w-full">
                              shoes
                            </DropdownMenuItem>
                          </div>
                          <div className="flex flex-col items-start pl-3 w-full">
                            <h6>Woman</h6>
                            <DropdownMenuItem className="w-full">
                              clothes
                            </DropdownMenuItem>
                            <DropdownMenuItem className="w-full">
                              shoes
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
                          <g fill="none" stroke="currentColor" stroke-width="1">
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
                          <DropdownMenuItem>mobiles</DropdownMenuItem>
                          <DropdownMenuItem>ipads</DropdownMenuItem>
                        </DropdownMenuSubContent>
                      </DropdownMenuPortal>
                    </DropdownMenuSub>
                  </DropdownMenuGroup>
                </motion.div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      )}
    </header>
  );
}
